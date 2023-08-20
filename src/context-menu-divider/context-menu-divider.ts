import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { contextMenuDividerStyles } from "./context-menu-divider.styles.js"

export const contextMenuDividerTagName = "dav-context-menu-divider"

@customElement(contextMenuDividerTagName)
export class ContextMenuDivider extends LitElement {
	static styles = [globalStyles, contextMenuDividerStyles]

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
		return html`<div class="divider"></div>`
	}
}
