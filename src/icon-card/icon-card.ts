import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { Settings, Theme } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { iconCardStyles } from "./icon-card.styles.js"

export const iconCardTagName = "dav-icon-card"

@customElement(iconCardTagName)
export class IconCard extends LitElement {
	static styles = [globalStyles, iconCardStyles]

	@state() private theme: Theme = getSettings().theme

	@property({ type: String }) text: string = ""

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		this.theme = settings.theme
		setThemeColorVariables(this.style, this.theme)
	}

	getText() {
		if (this.text.length > 0) {
			return html`<p>${this.text}</p>`
		}
	}

	render() {
		return html`
			<button class="icon-card-container">
				<slot></slot>

				${this.getText()}
			</button>
		`
	}
}
