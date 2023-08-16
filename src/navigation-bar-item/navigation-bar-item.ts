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
import { navigationBarItemStyles } from "./navigation-bar-item.styles.js"

export const navigationBarItemTagName = "dav-navigation-bar-item"

@customElement(navigationBarItemTagName)
export class NavigationBarItem extends LitElement {
	static styles = [globalStyles, navigationBarItemStyles]

	@state() private theme: Theme = getSettings().theme

	@state() private itemClasses = {
		"item-container": true,
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
			<button class=${classMap(this.itemClasses)}>
				<div class="icon-container">
					<slot name="icon"></slot>
				</div>
				<div class="label-container">
					<slot name="label"></slot>
				</div>
			</button>
		`
	}
}
