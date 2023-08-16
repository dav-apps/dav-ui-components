import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, Theme } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { tabStyles } from "./tab-bar-item.styles.js"

export const tabBarItemTagName = "dav-tab-bar-item"

@customElement(tabBarItemTagName)
export class TabBarItem extends LitElement {
	static styles = [globalStyles, tabStyles]

	@state() private theme: Theme = getSettings().theme

	@state() private itemClasses = {
		active: false
	}

	@property({ type: Boolean }) active: boolean = false

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
		this.itemClasses.active = this.active

		return html`
			<div id="container" class=${classMap(this.itemClasses)}>
				<p><slot></slot></p>
				<div id="border"></div>
			</div>
		`
	}
}
