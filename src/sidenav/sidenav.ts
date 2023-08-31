import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { SidenavMode, Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToSidenavMode
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { sidenavStyles } from "./sidenav.styles.js"
import { showOverlay, hideOverlay } from "./sidenav.animations.js"

export const sidenavTagName = "dav-sidenav"

@customElement(sidenavTagName)
export class Sidenav extends LitElement {
	static styles = [globalStyles, sidenavStyles]

	@query(".overlay") overlay: HTMLDivElement

	@property({ type: Boolean }) open: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToSidenavMode(value)
	})
	mode: SidenavMode = SidenavMode.side

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

	updated(changedProperties: Map<string, any>) {
		if (
			this.mode == SidenavMode.over &&
			changedProperties.has("open") &&
			changedProperties.get("open") != null
		) {
			let newOpen = !changedProperties.get("open") as boolean

			if (newOpen) {
				// Show the overlay
				showOverlay(this.overlay)
			} else {
				// Hide the overlay
				hideOverlay(this.overlay).onfinish = () => {
					this.requestUpdate()
				}
			}
		}
	}

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		if (this.mode == SidenavMode.side) {
			return html`
				<div class="container-inline">
					<slot></slot>
				</div>
			`
		} else {
			return html`
				<div class="container-over">
					<div class="container-over-content">
						<slot></slot>
					</div>

					<div class="overlay" @click=${this.overlayClick}></div>
				</div>
			`
		}
	}
}
