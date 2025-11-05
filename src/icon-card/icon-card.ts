import { LitElement, html } from "lit"
import { customElement, state, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { IconCardSize, Settings } from "../types.js"
import {
	convertStringToIconCardSize,
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { iconCardStyles } from "./icon-card.styles.js"

export const iconCardTagName = "dav-icon-card"

@customElement(iconCardTagName)
export class IconCard extends LitElement {
	static styles = [globalStyles, iconCardStyles]

	@state() private iconCardContainerClasses = {
		"icon-card-container": true,
		sm: false,
		lg: false
	}

	@property({
		type: String,
		converter: (value: string) => convertStringToIconCardSize(value)
	})
	size: IconCardSize = IconCardSize.md
	@property({ type: String })
	text: string = ""
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

	getText() {
		if (this.text.length > 0) {
			return html`
				<p>${this.text}</p>
			`
		}
	}

	render() {
		this.iconCardContainerClasses.sm = this.size === IconCardSize.sm
		this.iconCardContainerClasses.lg = this.size === IconCardSize.lg

		if (this.href.length > 0) {
			return html`
				<a
					class=${classMap(this.iconCardContainerClasses)}
					href=${this.href}
					target=${this.target}
				>
					<slot></slot>

					${this.getText()}
				</a>
			`
		} else {
			return html`
				<button class=${classMap(this.iconCardContainerClasses)}>
					<slot></slot>

					${this.getText()}
				</button>
			`
		}
	}
}
