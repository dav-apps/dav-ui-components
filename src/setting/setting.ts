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
import { settingStyles } from "./setting.styles.js"

export const settingTagName = "dav-setting"

@customElement(settingTagName)
export class Setting extends LitElement {
	static styles = [globalStyles, settingStyles]

	@state() private theme: Theme = getSettings().theme

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
		this.theme = settings.theme
		setThemeColorVariables(this.style, this.theme)
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
