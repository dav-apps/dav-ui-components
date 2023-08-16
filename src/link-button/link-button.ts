import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { Settings, Theme } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { linkButtonStyles } from "./link-button.styles.js"

export const linkButtonTagName = "dav-link-button"

@customElement(linkButtonTagName)
export class LinkButton extends LitElement {
	static styles = [globalStyles, linkButtonStyles]

	@state() private theme: Theme = getSettings().theme

	@property() url: string = ""
	@property() target: string = "blank"

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
		return html`
			<a href=${this.url} target=${this.target}>
				<slot></slot>
			</a>
		`
	}
}
