import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, Theme, ButtonSize } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings,
	convertStringToButtonSize
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { iconButtonStyles } from "./icon-button.styles.js"

export const iconButtonTagName = "dav-icon-button"

@customElement(iconButtonTagName)
export class IconButton extends LitElement {
	static styles = [globalStyles, iconButtonStyles]

	@state() private theme: Theme = getSettings().theme

	@state() private iconButtonClasses = {
		"icon-button": true,
		selected: false,
		small: false
	}

	@property({ type: String }) href: string = ""
	@property({ type: Boolean }) selected: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToButtonSize(value)
	})
	size: ButtonSize = ButtonSize.normal
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
		this.theme = settings.theme
		setThemeColorVariables(this.style, this.theme)
	}

	render() {
		this.iconButtonClasses.selected = this.selected
		this.iconButtonClasses.small = this.size == ButtonSize.small

		if (this.href.length > 0) {
			return html`
				<a
					class=${classMap(this.iconButtonClasses)}
					href=${this.href}
					target=${this.target}
				>
					<slot></slot>
				</a>
			`
		}

		return html`
			<button class=${classMap(this.iconButtonClasses)}>
				<slot></slot>
			</button>
		`
	}
}
