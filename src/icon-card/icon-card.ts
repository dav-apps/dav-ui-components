import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { iconCardStyles } from "./icon-card.styles.js"

export const iconCardTagName = "dav-icon-card"

@customElement(iconCardTagName)
export class IconCard extends LitElement {
	static styles = [globalStyles, iconCardStyles]

	@property({ type: String }) text: string = ""

	getText() {
		if (this.text.length > 0) {
			return html`
				<p>${this.text}</p>
			`
		}
	}

	render() {
		return html`
			<button class="icon-card-container">
				<slot></slot>

				${this.getText()}
			</button>
		`
	}
}
