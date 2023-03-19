import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { cardStyles } from "./card.styles.js"

export const cardTagName = "dav-card"

@customElement(cardTagName)
export class Card extends LitElement {
	static styles = [globalStyles, cardStyles]

	@property({ type: String }) headline: string = ""
	@property({ type: String }) subhead: string = ""

	getHeadline() {
		if (this.headline.length > 0) {
			return html`
				<p class="headline">${this.headline}</p>
			`
		}
	}

	getSubhead() {
		if (this.subhead.length > 0) {
			return html`
				<p class="subhead">${this.subhead}</p>
			`
		}
	}

	render() {
		return html`
			<div class="card-container">
				${this.getHeadline()} ${this.getSubhead()}
				<slot></slot>
			</div>
		`
	}
}
