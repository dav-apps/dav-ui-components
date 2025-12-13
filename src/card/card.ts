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
		horizontal: false,
		selected: false
	}

	@property({ type: String }) headline: string = ""
	@property({ type: String }) subhead: string = ""
	@property({ type: String }) imageSrc: string = ""
	@property({ type: String }) altImageSrc: string = ""
	@property({ type: String }) subheadImageSrc: string = ""
	@property({
		type: String,
		converter: (value: string) => convertStringToOrientation(value)
	})
	orientation: Orientation = Orientation.vertical
	@property({ type: Boolean }) clickable: boolean = false
	@property({ type: Boolean }) selected: boolean = false
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
				<div class="subhead-container">
					${this.getSubheadImage()}
					<p class="subhead">${this.subhead}</p>
				</div>
			`
		}
	}

	getSubheadImage() {
		if (this.subheadImageSrc) {
			return html`
				<img
					class="subhead-image"
					src=${this.subheadImageSrc}
					width="28"
					height="28"
				/>
			`
		}
	}

	getImage() {
		let imageSrc = this.imageSrc

		if (imageSrc == null || imageSrc.length == 0) {
			imageSrc = this.altImageSrc
			this.altImageSrc = null
		}

		if (imageSrc) {
			let onError = ""

			if (this.altImageSrc) {
				onError = `this.onerror=null;this.src='${this.altImageSrc}';`
			}

			return html`
				<img src=${imageSrc} onerror=${onError} />
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
				<slot></slot>
			</div>
		`
	}

	render() {
		this.cardContainerClasses.horizontal =
			this.orientation == Orientation.horizontal
		this.cardContainerClasses.selected = this.selected

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
		} else if (this.clickable) {
			return html`
				<button class=${classMap(this.cardContainerClasses)}>
					${this.getContent()}
				</button>
			`
		} else {
			return html`
				<div class=${classMap(this.cardContainerClasses)}>
					${this.getContent()}
				</div>
			`
		}
	}
}
