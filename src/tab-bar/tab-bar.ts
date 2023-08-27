import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { tabBarStyles } from "./tab-bar.styles.js"

export const tabBarTagName = "dav-tab-bar"

@customElement(tabBarTagName)
export class TabBar extends LitElement {
	static styles = [globalStyles, tabBarStyles]

	render() {
		return html`
			<div class="container">
				<slot></slot>
			</div>
		`
	}
}
