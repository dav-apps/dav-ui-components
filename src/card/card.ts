import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { cardStyles } from "./card.styles.js"

export const cardTagName = "dav-card"

@customElement(cardTagName)
export class Card extends LitElement {
	static styles = [globalStyles, cardStyles]

	render() {
		return html``
	}
}
