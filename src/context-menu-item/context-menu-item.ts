import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, Theme } from "../types.js"
import {
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { contextMenuItemStyles } from "./context-menu-item.styles.js"

export const contextMenuItemTagName = "dav-context-menu-item"

@customElement(contextMenuItemTagName)
export class ContextMenuItem extends LitElement {
	static styles = [globalStyles, contextMenuItemStyles]

	@state() private buttonClasses = {
		darkTheme: false
	}

	@state() private theme: Theme = getSettings().theme

	@property() value: string = ""

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => (this.theme = settings.theme)

	render() {
		this.buttonClasses.darkTheme = this.theme == Theme.dark

		return html`
			<button class=${classMap(this.buttonClasses)}>
				<div id="icon-container">
					<slot name="icon"></slot>
				</div>
				<span id="label">${this.value}</span>
			</button>
		`
	}
}
