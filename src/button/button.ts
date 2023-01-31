import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { Theme, Settings, ButtonColor } from '../types.js'
import {
	convertStringToButtonColor,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from '../utils.js'
import { globalStyles } from '../styles.js'
import { buttonStyles } from './button.styles.js'

export const buttonTagName = "dav-button"

@customElement(buttonTagName)
export class Button extends LitElement {
	static styles = [globalStyles, buttonStyles]

	@state() private buttonClasses = {
		primary: false,
		secondary: false,
		error: false,
		tonal: false,
		disabled: false,
		darkTheme: false
	}

	@state() private theme: Theme = getSettings().theme

	@property({
		type: String,
		converter: (value: string) => convertStringToButtonColor(value)
	}) color: ButtonColor = ButtonColor.primary
	@property({ type: Boolean }) tonal: boolean = false
	@property({ type: Boolean }) disabled: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => this.theme = settings.theme

	buttonClick(event: PointerEvent) {
		if (this.disabled) {
			event.stopPropagation()
		}
	}

	render() {
		switch (this.color) {
			case ButtonColor.secondary:
				this.buttonClasses.primary = false
				this.buttonClasses.secondary = true
				this.buttonClasses.error = false
				break
			case ButtonColor.error:
				this.buttonClasses.primary = false
				this.buttonClasses.secondary = false
				this.buttonClasses.error = true
				break
			default:
				this.buttonClasses.primary = true
				this.buttonClasses.secondary = false
				this.buttonClasses.error = false
		}

		this.buttonClasses.tonal = this.tonal
		this.buttonClasses.disabled = this.disabled
		this.buttonClasses.darkTheme = this.theme == Theme.dark

		return html`
			<button
				class=${classMap(this.buttonClasses)}
				?aria-disabled=${this.disabled}
				@click="${this.buttonClick}">
				<slot></slot>
			</button>
		`
	}
}