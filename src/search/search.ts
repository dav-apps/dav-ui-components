import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { magnifyingGlassLightSvg } from "../../assets/svg/magnifying-glass-light.js"
import { globalStyles } from "../styles.js"
import { searchStyles } from "./search.styles.js"
import { slideIn, slideOut } from "./search.animations.js"

export const searchTagName = "dav-search"

@customElement(searchTagName)
export class Search extends LitElement {
	static styles = [globalStyles, searchStyles]

	@query(".overlay") overlay: HTMLDivElement
	@query(".content-container") contentContainer: HTMLDivElement
	@query(".search-input") searchInput: HTMLInputElement

	@state() private containerStyles = {
		display: "none",
		position: "fixed",
		top: "0",
		bottom: "0",
		left: "0",
		right: "0",
		zIndex: "100"
	}

	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Boolean }) loading: boolean = false
	@property() placeholder: string = ""

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
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
				animations = slideIn(this.contentContainer, this.overlay)
			} else {
				// Play slide out animation
				animations = slideOut(this.contentContainer, this.overlay)
			}

			// Wait for all animations to end
			await Promise.all(animations.map(a => a.finished))

			this.containerStyles.display = newIsVisible ? "block" : "none"
			this.requestUpdate()

			if (newIsVisible) {
				this.searchInput.focus()
			}
		}
	}

	getProgressRing() {
		if (this.loading) {
			return html`
				<div class="progress-ring-container">
					<dav-progress-ring
						indeterminate
						size="24"
						color="white"
					></dav-progress-ring>
				</div>
			`
		}
	}

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	private input() {
		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { value: this.searchInput.value }
			})
		)
	}

	private keydown(event: KeyboardEvent) {
		if (event.key == "Escape") {
			this.dispatchEvent(new CustomEvent("dismiss"))
		}
	}

	render() {
		if (this.visible) {
			this.containerStyles.display = "block"
		}

		return html`
			<div style=${styleMap(this.containerStyles)}>
				<div class="overlay" @click=${this.overlayClick}></div>

				<div class="content-container">
					<div class="search-input-container">
						<input
							class="search-input"
							type="search"
							placeholder=${this.placeholder}
							@input=${this.input}
							@keydown=${this.keydown}
						/>

						<div class="search-icon-container">
							${magnifyingGlassLightSvg}
						</div>
					</div>

					<div>
						${this.getProgressRing()}
					</div>
				</div>
			</div>
		`
	}
}
