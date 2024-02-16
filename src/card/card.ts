import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, Orientation } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToOrientation
} from "../utils.js"
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
	@property({ type: String }) href: string = ""
	@property({ type: String }) target: string = ""

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

	getContent() {
		return html`
			<div class="card-image-container">${this.getImage()}</div>

			<div class="card-content-container">
				${this.getHeadline()}
				<div class="spacer"></div>
				${this.getSubhead()}
			</div>

			<slot></slot>
		`
	}

	render() {
		this.cardContainerClasses.horizontal =
			this.orientation == Orientation.horizontal

		if (this.href.length > 0) {
			return html`
				<a
					class=${classMap(this.cardContainerClasses)}
					href=${this.href}
					target=${this.target}
				>
					${this.getContent()}
				</a>
			`
		} else {
			return html`
				<button class=${classMap(this.cardContainerClasses)}>
					${this.getContent()}
				</button>
			`
		}
	}
}
