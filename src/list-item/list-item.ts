import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { listItemStyles } from "./list-item.styles.js"

export const listItemTagName = "dav-list-item"

@customElement(listItemTagName)
export class ListItem extends LitElement {
	static styles = [globalStyles, listItemStyles]

	@property({ type: String }) imageSrc: string = ""
	@property({ type: String }) headline: string = ""
	@property({ type: String }) subhead: string = ""

	getImage() {
		if (this.imageSrc.length > 0) {
			return html`
				<div class="list-item-image-container">
					<dav-blurhash-image
						class="list-item-image"
						src=${this.imageSrc}
						height="56"
					></dav-blurhash-image>
				</div>
			`
		}
	}

	getHeadline() {
		if (this.headline.length > 0) {
			return html`
				<p class="list-item-headline">${this.headline}</p>
			`
		}
	}

	getSubhead() {
		if (this.subhead.length > 0) {
			return html`
				<p class="list-item-subhead">${this.subhead}</p>
			`
		}
	}

	render() {
		return html`
			<div class="list-item-container" tabindex="0">
				${this.getImage()}

				<div class="list-item-body">
					${this.getHeadline()} ${this.getSubhead()}
				</div>
			</div>
		`
	}
}
