import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { contextMenuItemStyles } from "./context-menu-item.styles.js"

export const contextMenuItemTagName = "dav-context-menu-item"

@customElement(contextMenuItemTagName)
export class ContextMenuItem extends LitElement {
	static styles = [globalStyles, contextMenuItemStyles]

	@property() value: string = ""

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
					<slot name="icon"></slot>
				</div>
				<span id="label">${this.value}</span>
			</button>
		`
	}
}
