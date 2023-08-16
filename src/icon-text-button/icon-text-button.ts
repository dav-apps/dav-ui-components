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
import { iconTextButtonStyles } from "./icon-text-button.styles.js"

export const iconTextButtonTagName = "dav-icon-text-button"

@customElement(iconTextButtonTagName)
export class IconTextButton extends LitElement {
	static styles = [globalStyles, iconTextButtonStyles]

	@state() private theme: Theme = getSettings().theme

	@property({ type: String }) label: string = ""

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

	render() {
		return html`
			<button>
				<div id="icon-container">
					<slot></slot>
				</div>

				<span id="label">${this.label}</span>
			</button>
		`
	}
}
