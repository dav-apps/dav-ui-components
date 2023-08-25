import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { xmarkLightSvg } from "../svg/xmark-light.js"
import { globalStyles } from "../styles.js"
import { panelStyles } from "./panel.styles.js"
import { slideIn, slideOut } from "./panel.animations.js"

export const panelTagName = "dav-panel"

@customElement(panelTagName)
export class Panel extends LitElement {
	static styles = [globalStyles, panelStyles]

	@query("#overlay") overlay: HTMLDivElement
	@query("#content") content: HTMLDivElement

	@state() private contentClasses = {
		"shadow-lg": true,
		darkTheme: false
	}
	@state() private closeButtonClasses = {
		darkTheme: false
	}
	@state() private headerClasses = {
		darkTheme: false
	}
	@state() private containerStyles = {
		display: "none"
	}

	@property() header: string = ""
	@property({ type: Boolean }) visible: boolean = false

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
				animations = slideIn(this.content, this.overlay)
			} else {
				// Play slide out animation
				animations = slideOut(this.content, this.overlay)
			}

			// Wait for all animations to end
			await Promise.all(animations.map(a => a.finished))

			this.containerStyles.display = newIsVisible ? "block" : "none"
			this.requestUpdate()
		}
	}

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	private closeButtonClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		if (this.visible) {
			this.containerStyles.display = "block"
		}

		return html`
			<div id="container" style=${styleMap(this.containerStyles)}>
				<div id="overlay" @click=${this.overlayClick}></div>

				<div id="content" class=${classMap(this.contentClasses)}>
					<div id="header-container">
						<h1 id="header" class=${classMap(this.headerClasses)}>
							${this.header}
						</h1>

						<dav-icon-button
							id="close-button"
							class=${classMap(this.closeButtonClasses)}
							@click=${this.closeButtonClick}
						>
							${xmarkLightSvg}
						</dav-icon-button>
					</div>

					<div id="slot-container" class="modern-vertical-scrollbar">
						<slot></slot>
					</div>
				</div>
			</div>
		`
	}
}
