import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { settingStyles } from "./setting.styles.js"

export const settingTagName = "dav-setting"

@customElement(settingTagName)
export class Setting extends LitElement {
	static styles = [globalStyles, settingStyles]

	@property() header: string = ""

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
			<div id="setting-container">
				<p id="setting-header">${this.header}</p>

				<div>
					<slot></slot>
				</div>
			</div>
		`
	}
}
