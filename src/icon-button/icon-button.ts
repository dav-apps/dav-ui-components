import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, ButtonSize } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToButtonSize
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { iconButtonStyles } from "./icon-button.styles.js"

export const iconButtonTagName = "dav-icon-button"

@customElement(iconButtonTagName)
export class IconButton extends LitElement {
	static styles = [globalStyles, iconButtonStyles]

	@state() private iconButtonClasses = {
		"icon-button": true,
		selected: false,
		disabled: false,
		sm: false,
		xs: false
	}

	@property({ type: String }) href: string = ""
	@property({ type: Boolean }) selected: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToButtonSize(value)
	})
	size: ButtonSize = ButtonSize.md
	@property({ type: String }) target: string = ""
	@property({ type: Boolean }) disabled: boolean = false

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

	buttonClick(event: PointerEvent) {
		if (this.disabled) {
			event.stopPropagation()
		}
	}

	render() {
		this.iconButtonClasses.selected = this.selected
		this.iconButtonClasses.disabled = this.disabled
		this.iconButtonClasses.sm = this.size == ButtonSize.sm
		this.iconButtonClasses.xs = this.size == ButtonSize.xs

		if (this.href.length > 0 && !this.disabled) {
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
			<button
				class=${classMap(this.iconButtonClasses)}
				?aria-disabled=${this.disabled}
				@click="${this.buttonClick}"
			>
				<slot></slot>
			</button>
		`
	}
}
