import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
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

	@property({ type: String }) width: string = "100%"
	@property({ type: String }) height: string = "20px"

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
			<p>Hello</p>
		`
	}
}
