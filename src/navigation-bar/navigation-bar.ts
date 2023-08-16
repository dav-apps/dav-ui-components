import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import { Settings, Theme } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { navigationBarStyles } from "./navigation-bar.styles.js"

export const navigationBarTagName = "dav-navigation-bar"

@customElement(navigationBarTagName)
export class NavigationBar extends LitElement {
	static styles = [globalStyles, navigationBarStyles]

	@state() private theme: Theme = getSettings().theme

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
		return html`<slot></slot>`
	}
}
