import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import {
	getGlobalStyleHtml,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { tabBarStyles } from "./tab-bar.styles.js"

export const tabBarTagName = "dav-tab-bar"

@customElement(tabBarTagName)
export class TabBar extends LitElement {
	static styles = [globalStyles, tabBarStyles]

	render() {
		return html`
			${getGlobalStyleHtml()}

			<div id="container">
				<slot></slot>
			</div>
		`
	}
}
