import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings, ThemeColor } from "../types.js"
import {
	hasWindow,
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToThemeColor
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { dialogStyles } from "./dialog.styles.js"
import { slideIn, slideOut } from "./dialog.animations.js"

export const dialogTagName = "dav-dialog"

@customElement(dialogTagName)
export class Dialog extends LitElement {
	static styles = [globalStyles, dialogStyles]

	@query(".overlay") overlay: HTMLDivElement
	@query(".dialog") dialog: HTMLDivElement

	@state() private dualScreenLayout: boolean = false

	@state() private containerStyles = {
		display: "none",
		justifyContent: "center",
		alignItems: "center",
		position: "fixed",
		top: "0",
		bottom: "0",
		left: "0",
		right: "0",
		zIndex: "100"
	}
	@state() private dialogStyles = {
		maxWidth: "600px"
	}

	@property() headline: string = ""
	@property() primaryButtonText: string = ""
	@property({
		type: String,
		converter: (value: string) => convertStringToThemeColor(value)
	})
	primaryButtonColor: ThemeColor = ThemeColor.primary
	@property() defaultButtonText: string = ""
	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Boolean }) loading: boolean = false
	@property({ type: Number }) maxWidth: number = 600

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
		document.addEventListener("keydown", this.onKeyDown)

		if (hasWindow()) {
			let screenSegments: any

			if (window["getWindowSegments"]) {
				screenSegments = window["getWindowSegments"]()
			} else if (window.visualViewport["segments"]) {
				screenSegments = window.visualViewport["segments"]
			}

			if (screenSegments != null) {
				this.dualScreenLayout =
					screenSegments.length > 1 &&
					screenSegments[0].width == screenSegments[1].width
			}
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)

		document.removeEventListener("keydown", this.onKeyDown)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	async updated(changedProperties: Map<string, any>) {
		if (
			changedProperties.has("visible") &&
			changedProperties.get("visible") != null
		) {
			let newIsVisible = !changedProperties.get("visible") as boolean
			let animations: Animation[]

			if (newIsVisible) {
				// Play slide in animation
				animations = slideIn(this.dialog, this.overlay)
			} else {
				// Play slide out animation
				animations = slideOut(this.dialog, this.overlay)
			}

			// Wait for all animations to end
			await Promise.all(animations.map(a => a.finished))

			this.containerStyles.display = newIsVisible ? "flex" : "none"
			this.requestUpdate()
		}
	}

	onKeyDown = (event: KeyboardEvent) => {
		if (event.key == "Escape" && !this.loading) {
			this.dispatchEvent(new CustomEvent("dismiss"))
		}
	}

	private overlayClick() {
		if (!this.loading) {
			this.dispatchEvent(new CustomEvent("dismiss"))
		}
	}

	primaryButtonClick() {
		this.dispatchEvent(new CustomEvent("primaryButtonClick"))
	}

	defaultButtonClick() {
		this.dispatchEvent(new CustomEvent("defaultButtonClick"))
	}

	getProgressRing() {
		if (this.loading) {
			return html`
				<dav-progress-ring indeterminate size="24"></dav-progress-ring>
			`
		}
	}

	getDefaultButton() {
		if (this.defaultButtonText.length > 0) {
			return html`
				<dav-button
					size="sm"
					outline
					?disabled=${this.loading}
					@click=${this.defaultButtonClick}
				>
					${this.defaultButtonText}
				</dav-button>
			`
		}
	}

	getPrimaryButton() {
		if (this.primaryButtonText.length > 0) {
			return html`
				<dav-button
					color=${this.primaryButtonColor}
					size="sm"
					?disabled=${this.loading}
					@click=${this.primaryButtonClick}
				>
					${this.primaryButtonText}
				</dav-button>
			`
		}
	}

	render() {
		if (this.visible) {
			this.containerStyles.display = "flex"
		}

		this.containerStyles.left = this.dualScreenLayout ? "50%" : "0"
		this.dialogStyles.maxWidth = `${this.maxWidth}px`

		return html`
			<div style=${styleMap(this.containerStyles)}>
				<div class="overlay" @click=${this.overlayClick}></div>

				<div
					class="dialog"
					style=${styleMap(this.dialogStyles)}
					role="dialog"
					aria-modal="true"
					aria-live="assertive"
					aria-labelledby="headline"
				>
					<h4 class="headline">${this.headline}</h4>

					<div class="content-container">
						<slot></slot>
					</div>

					<div class="button-container">
						${this.getProgressRing()} ${this.getDefaultButton()}
						${this.getPrimaryButton()}
					</div>
				</div>
			</div>
		`
	}
}
