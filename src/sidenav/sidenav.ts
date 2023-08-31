import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { SidenavMode, Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToSidenavMode
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { sidenavStyles } from "./sidenav.styles.js"
import { slideIn, slideOut } from "./sidenav.animations.js"

export const sidenavTagName = "dav-sidenav"

@customElement(sidenavTagName)
export class Sidenav extends LitElement {
	static styles = [globalStyles, sidenavStyles]

	@query(".container-over-content") containerOverContent: HTMLDivElement
	@query(".overlay") overlay: HTMLDivElement

	@state() private containerOverContentStyles = {
		display: "none"
	}

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

	async updated(changedProperties: Map<string, any>) {
		if (
			this.mode == SidenavMode.over &&
			changedProperties.has("open") &&
			changedProperties.get("open") != null
		) {
			let newIsOpen = !changedProperties.get("open") as boolean
			let animations: Animation[] = []

			if (newIsOpen) {
				// Play slide in animation
				animations = slideIn(this.containerOverContent, this.overlay)
			} else {
				// Play slide out animation
				animations = slideOut(this.containerOverContent, this.overlay)
			}

			// Wait for all animations to end
			await Promise.all(animations.map(a => a.finished))

			this.containerOverContentStyles.display = newIsOpen ? "flex" : "none"
			this.requestUpdate()
		}
	}

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		if (this.open) {
			this.containerOverContentStyles.display = "flex"
		}

		if (this.mode == SidenavMode.side) {
			return html`
				<div class="container-inline">
					<slot></slot>
				</div>
			`
		} else {
			return html`
				<div
					class="container-over"
					style=${styleMap(this.containerOverContentStyles)}
				>
					<div class="overlay" @click=${this.overlayClick}></div>

					<div class="container-over-content">
						<slot></slot>
					</div>
				</div>
			`
		}
	}
}
