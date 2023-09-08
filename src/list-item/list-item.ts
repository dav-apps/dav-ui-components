import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, ListItemSize } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToListItemSize
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { listItemStyles } from "./list-item.styles.js"

export const listItemTagName = "dav-list-item"

@customElement(listItemTagName)
export class ListItem extends LitElement {
	static styles = [globalStyles, listItemStyles]

	@state() private containerClasses = {
		container: true,
		small: false
	}

	@property({ type: String }) imageSrc: string = ""
	@property({ type: String }) imageFallbackSrc: string = ""
	@property({ type: String })
	headline: string = ""
	@property({ type: String }) subhead: string = ""
	@property({
		type: String,
		converter: (value: string) => convertStringToListItemSize(value)
	})
	size: ListItemSize = ListItemSize.normal
	@property() href: string = ""
	@property() target: string = ""

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

	getImage() {
		if (
			(this.imageSrc != null && this.imageSrc.length > 0) ||
			(this.imageFallbackSrc != null && this.imageFallbackSrc.length > 0)
		) {
			return html`
				<div class="image-container">
					<dav-blurhash-image
						class="image"
						src=${this.imageSrc}
						fallbackSrc=${this.imageFallbackSrc}
						height=${this.containerClasses.small ? 56 : 84}
					></dav-blurhash-image>
				</div>
			`
		}
	}

	getHeadline() {
		if (this.headline != null && this.headline.length > 0) {
			return html`<p class="headline">${this.headline}</p>`
		}
	}

	getSubhead() {
		if (this.subhead != null && this.subhead.length > 0) {
			return html`<p class="subhead">${this.subhead}</p>`
		}
	}

	getContainerContent() {
		return html`
			${this.getImage()}

			<div class="body">${this.getHeadline()} ${this.getSubhead()}</div>
		`
	}

	render() {
		this.containerClasses.small = this.size == ListItemSize.small

		if (this.href.length > 0) {
			return html`
				<a
					class=${classMap(this.containerClasses)}
					href=${this.href}
					target=${this.target}
				>
					${this.getContainerContent()}
				</a>
			`
		} else {
			return html`
				<button class=${classMap(this.containerClasses)}>
					${this.getContainerContent()}
				</button>
			`
		}
	}
}
