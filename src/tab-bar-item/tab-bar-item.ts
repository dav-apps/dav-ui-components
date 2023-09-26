import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { tabStyles } from "./tab-bar-item.styles.js"

export const tabBarItemTagName = "dav-tab-bar-item"

@customElement(tabBarItemTagName)
export class TabBarItem extends LitElement {
	static styles = [globalStyles, tabStyles]

	@state() private itemClasses = {
		container: true,
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
		setThemeColorVariables(this.style, settings.theme)
	}

	render() {
		this.itemClasses.active = this.active

		return html`
			<button class=${classMap(this.itemClasses)}>
				<p><slot></slot></p>
				<div class="border"></div>
			</button>
		`
	}
}
