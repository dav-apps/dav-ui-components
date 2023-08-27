import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
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

	@query(".overlay") overlay: HTMLDivElement
	@query(".content") content: HTMLDivElement

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
			<div class="container" style=${styleMap(this.containerStyles)}>
				<div class="overlay" @click=${this.overlayClick}></div>

				<div class="content">
					<div class="header-container">
						<h1 class="header">${this.header}</h1>

						<dav-icon-button
							class="close-button"
							@click=${this.closeButtonClick}
						>
							${xmarkLightSvg}
						</dav-icon-button>
					</div>

					<div class="modern-vertical-scrollbar slot-container">
						<slot></slot>
					</div>
				</div>
			</div>
		`
	}
}
