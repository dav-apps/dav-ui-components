import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { iconTextButtonStyles } from "./icon-text-button.styles.js"

export const iconTextButtonTagName = "dav-icon-text-button"

@customElement(iconTextButtonTagName)
export class IconTextButton extends LitElement {
	static styles = [globalStyles, iconTextButtonStyles]

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
		setThemeColorVariables(this.style, settings.theme)
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
