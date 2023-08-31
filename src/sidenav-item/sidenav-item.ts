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
import { sidenavItemStyles } from "./sidenav-item.styles.js"

export const sidenavItemTagName = "dav-sidenav-item"

@customElement(sidenavItemTagName)
export class SidenavItem extends LitElement {
	static styles = [globalStyles, sidenavItemStyles]

	@state() sidenavItemClasses = {
		"sidenav-item": true,
		active: false
	}

	@property() value: string = ""
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
		this.sidenavItemClasses.active = this.active

		return html`
			<button class=${classMap(this.sidenavItemClasses)}>
				<span>${this.value}</span>
			</button>
		`
	}
}
