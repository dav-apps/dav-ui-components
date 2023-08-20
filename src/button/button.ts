import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, ButtonColor, ButtonSize } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToButtonColor,
	convertStringToButtonSize
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { buttonStyles } from "./button.styles.js"

export const buttonTagName = "dav-button"

@customElement(buttonTagName)
export class Button extends LitElement {
	static styles = [globalStyles, buttonStyles]

	@state() private buttonClasses = {
		small: false,
		primary: false,
		secondary: false,
		tertiary: false,
		error: false,
		tonal: false,
		outline: false,
		text: false,
		disabled: false
	}

	@property({
		type: String,
		converter: (value: string) => convertStringToButtonSize(value)
	})
	size: ButtonSize = ButtonSize.normal
	@property({
		type: String,
		converter: (value: string) => convertStringToButtonColor(value)
	})
	color: ButtonColor = ButtonColor.primary
	@property({ type: Boolean }) tonal: boolean = false
	@property({ type: Boolean }) outline: boolean = false
	@property({ type: Boolean }) text: boolean = false
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
		this.buttonClasses.small = this.size == ButtonSize.small

		switch (this.color) {
			case ButtonColor.secondary:
				this.buttonClasses.primary = false
				this.buttonClasses.secondary = true
				this.buttonClasses.tertiary = false
				this.buttonClasses.error = false
				break
			case ButtonColor.tertiary:
				this.buttonClasses.primary = false
				this.buttonClasses.secondary = false
				this.buttonClasses.tertiary = true
				this.buttonClasses.error = false
				break
			case ButtonColor.error:
				this.buttonClasses.primary = false
				this.buttonClasses.secondary = false
				this.buttonClasses.tertiary = false
				this.buttonClasses.error = true
				break
			default:
				this.buttonClasses.primary = true
				this.buttonClasses.secondary = false
				this.buttonClasses.tertiary = false
				this.buttonClasses.error = false
		}

		this.buttonClasses.tonal = this.tonal
		this.buttonClasses.outline = this.outline
		this.buttonClasses.text = this.text
		this.buttonClasses.disabled = this.disabled

		return html`
			<button
				class=${classMap(this.buttonClasses)}
				?aria-disabled=${this.disabled}
				@click="${this.buttonClick}"
			>
				<slot></slot>
			</button>
		`
	}
}
