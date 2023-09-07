import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { iconCardStyles } from "./icon-card.styles.js"

export const iconCardTagName = "dav-icon-card"

@customElement(iconCardTagName)
export class IconCard extends LitElement {
	static styles = [globalStyles, iconCardStyles]

	@property({ type: String }) text: string = ""
	@property() href: string = ""
	@property() target: string = ""

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

	getText() {
		if (this.text.length > 0) {
			return html`<p>${this.text}</p>`
		}
	}

	render() {
		if (this.href.length > 0) {
			return html`
				<a
					class="icon-card-container"
					href=${this.href}
					target=${this.target}
				>
					<slot></slot>

					${this.getText()}
				</a>
			`
		} else {
			return html`
				<button class="icon-card-container">
					<slot></slot>

					${this.getText()}
				</button>
			`
		}
	}
}
