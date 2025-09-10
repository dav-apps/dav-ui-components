import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { skeletonStyles } from "./skeleton.styles.js"

export const skeletonTagName = "dav-skeleton"

@customElement(skeletonTagName)
export class Skeleton extends LitElement {
	static styles = [globalStyles, skeletonStyles]

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
			<div class="skeleton"></div>
		`
	}
}
