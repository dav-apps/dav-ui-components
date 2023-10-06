import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, ThemeColor } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToThemeColor
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { badgeStyles } from "./badge.styles.js"

export const badgeTagName = "dav-badge"

@customElement(badgeTagName)
export class Badge extends LitElement {
	static styles = [globalStyles, badgeStyles]

	@state() private containerClasses = {
		container: true,
		secondary: false,
		tertiary: false,
		error: false,
		tonal: false
	}

	@property({
		type: String,
		converter: (value: string) => convertStringToThemeColor(value)
	})
	color: ThemeColor = ThemeColor.primary
	@property({ type: Boolean }) tonal: boolean = false
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

	render() {
		this.containerClasses.secondary = false
		this.containerClasses.tertiary = false
		this.containerClasses.error = false
		this.containerClasses.tonal = this.tonal

		switch (this.color) {
			case ThemeColor.secondary:
				this.containerClasses.secondary = true
				break
			case ThemeColor.tertiary:
				this.containerClasses.tertiary = true
				break
			case ThemeColor.error:
				this.containerClasses.error = true
				break
		}

		if (this.href.length > 0) {
			return html`
				<a
					class=${classMap(this.containerClasses)}
					href=${this.href}
					target=${this.target}
				>
					<slot></slot>
				</a>
			`
		} else {
			return html`
				<button class=${classMap(this.containerClasses)}>
					<slot></slot>
				</button>
			`
		}
	}
}
