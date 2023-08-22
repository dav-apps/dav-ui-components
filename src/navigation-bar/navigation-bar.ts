import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { navigationBarStyles } from "./navigation-bar.styles.js"

export const navigationBarTagName = "dav-navigation-bar"

@customElement(navigationBarTagName)
export class NavigationBar extends LitElement {
	static styles = [globalStyles, navigationBarStyles]

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
		return html`<slot></slot>`
	}
}
