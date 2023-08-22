import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { linkButtonStyles } from "./link-button.styles.js"

export const linkButtonTagName = "dav-link-button"

@customElement(linkButtonTagName)
export class LinkButton extends LitElement {
	static styles = [globalStyles, linkButtonStyles]

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
		setThemeColorVariables(this.style, settings.theme)
	}

	render() {
		return html`
			<a href=${this.url} target=${this.target}>
				<slot></slot>
			</a>
		`
	}
}
