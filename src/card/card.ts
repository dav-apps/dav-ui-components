import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Orientation } from "../types.js"
import { convertStringToOrientation } from "../utils.js"
import { globalStyles } from "../styles.js"
import { cardStyles } from "./card.styles.js"

export const cardTagName = "dav-card"

@customElement(cardTagName)
export class Card extends LitElement {
	static styles = [globalStyles, cardStyles]

	@state() private cardContainerClasses = {
		"card-container": true,
		horizontal: false
	}

	@property({ type: String }) headline: string = ""
	@property({ type: String }) subhead: string = ""
	@property({ type: String }) imageSrc: string = ""
	@property({
		type: String,
		converter: (value: string) => convertStringToOrientation(value)
	})
	orientation: Orientation = Orientation.vertical

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

	getImage() {
		if (this.imageSrc.length > 0) {
			return html`
				<img src=${this.imageSrc} />
			`
		}
	}

	render() {
		this.cardContainerClasses.horizontal =
			this.orientation == Orientation.horizontal

		return html`
			<div class=${classMap(this.cardContainerClasses)}>
				<div class="card-image-container">
					${this.getImage()}
				</div>

				<div class="card-content-container">
					${this.getHeadline()} ${this.getSubhead()}
				</div>

				<slot></slot>
			</div>
		`
	}
}
