import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { classMap } from 'lit/directives/class-map.js'
import { textfieldStyles } from './textfield.styles.js'
import { Theme } from '../types.js'
import { getGlobalStyleHtml, convertStringToTheme } from '../utils.js'

export const textfieldTagName = "dav-textfield"

@customElement(textfieldTagName)
export class Textfield extends LitElement {
	static styles = [textfieldStyles]

	@query("#textfield-input") textfieldInput: HTMLInputElement

	@state() private textfieldLabelClasses = {
		darkTheme: false
	}
	@state() private textfieldInputClasses = {
		darkTheme: false
	}

	@property() value: string = ""
	@property() label: string = ""
	@property() placeholder: string = ""
	@property() type: string = ""
	@property() autocomplete: string = "on"
	@property() errorMessage: string = ""
	@property({
		type: String,
		converter: (value: string) => convertStringToTheme(value)
	}) theme: Theme = Theme.light

	input() {
		this.dispatchEvent(new CustomEvent("change", {
			detail: { value: this.textfieldInput.value }
		}))
	}

	keydown(event: KeyboardEvent) {
		if (event.key == "Enter") {
			this.dispatchEvent(new CustomEvent("enter"))
		}
	}

	getErrorMessage() {
		if (this.errorMessage.length > 0) {
			return html`
				<p id="textfield-error-message"
					class="ms-motion-slideDownIn">
					${this.errorMessage}
				</p>
			`
		}

		return html``
	}

	render() {
		this.textfieldLabelClasses.darkTheme = this.theme == Theme.dark
		this.textfieldInputClasses.darkTheme = this.theme == Theme.dark

		return html`
			${getGlobalStyleHtml()}

			<div>
				<label
					id="textfield-label"
					class=${classMap(this.textfieldLabelClasses)}
					for="textfield-input">
					${this.label}
				</label>

				<input
					id="textfield-input"
					class=${classMap(this.textfieldInputClasses)}
					name="textfield-input"
					.value=${this.value}
					type=${this.type}
					placeholder=${this.placeholder}
					autocomplete=${this.autocomplete}
					@input=${this.input}
					@keydown=${this.keydown}>

				${this.getErrorMessage()}
			</div>
		`
	}
}