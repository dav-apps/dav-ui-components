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
import { contextMenuDividerStyles } from "./context-menu-divider.styles.js"

export const contextMenuDividerTagName = "dav-context-menu-divider"

@customElement(contextMenuDividerTagName)
export class ContextMenuDivider extends LitElement {
	static styles = [globalStyles, contextMenuDividerStyles]

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
		return html`<div class="divider"></div>`
	}
}
