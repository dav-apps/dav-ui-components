import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ButtonType } from '../types'
import { buttonStyles } from './button.styles'

export const buttonTagName = "dav-button"

@customElement(buttonTagName)
export class Button extends LitElement {
	static styles = [buttonStyles]

	@state()
	private buttonClasses = {
		accent: false,
		danger: false,
		disabled: false
	}

	@property({
		type: String,
		converter: (value: string | null) => {
			switch (value) {
				case "accent":
					return ButtonType.accent
				case "danger":
					return ButtonType.danger
				default:
					return ButtonType.default
			}
		}
	}) type: ButtonType = ButtonType.default
	@property({ type: Boolean }) disabled: boolean = false

	render() {
		switch (this.type) {
			case ButtonType.accent:
				this.buttonClasses.accent = true
				this.buttonClasses.danger = false
				break
			case ButtonType.danger:
				this.buttonClasses.accent = false
				this.buttonClasses.danger = true
				break
			default:
				this.buttonClasses.accent = false
				this.buttonClasses.danger = false
		}

		this.buttonClasses.disabled = this.disabled

		return html`
			<button
				class=${classMap(this.buttonClasses)}
				?aria-disabled=${this.disabled}>
				<slot></slot>
			</button>
		`
	}
}