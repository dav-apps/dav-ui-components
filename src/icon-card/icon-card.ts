import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { iconCardStyles } from "./icon-card.styles.js"

export const iconCardTagName = "dav-icon-card"

@customElement(iconCardTagName)
export class IconCard extends LitElement {
	static styles = [globalStyles, iconCardStyles]

	render() {
		return html`
			<div class="icon-card-container">
				<slot></slot>
			</div>
		`
	}
}
