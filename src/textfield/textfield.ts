import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { classMap } from 'lit/directives/class-map.js'
import { Theme } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange
} from '../utils.js'
import { globalStyles } from '../styles.js'
import { textfieldStyles } from './textfield.styles.js'

export const textfieldTagName = "dav-textfield"

@customElement(textfieldTagName)
export class Textfield extends LitElement {
	static styles = [globalStyles, textfieldStyles]

	@query("#textfield-input") textfieldInput: HTMLInputElement

	@state() private textfieldLabelClasses = {
		disabled: false,
		darkTheme: false
	}
	@state() private textfieldInputClasses = {
		disabled: false,
		darkTheme: false
	}

	@state() private theme: Theme = Theme.light

	@property() value: string = ""
	@property() label: string = ""
	@property() placeholder: string = ""
	@property({ type: Boolean }) disabled: boolean = false
	@property() type: string = "text"
	@property() autocomplete: string = "on"
	@property({ type: Boolean }) autofocus: boolean = false
	@property({ type: Number }) min: number = 0
	@property({ type: Number }) max: number = 100
	@property() errorMessage: string = ""

	connectedCallback() {
		super.connectedCallback()
		subscribeThemeChange(this.themeChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeThemeChange(this.themeChange)
	}

	themeChange = (theme: Theme) => this.theme = theme

	input() {
		this.value = this.textfieldInput.value

		this.dispatchEvent(new CustomEvent("change", {
			detail: { value: this.value }
		}))
	}

	keydown(event: KeyboardEvent) {
		if (event.key == "Enter") {
			this.dispatchEvent(new CustomEvent("enter"))
		}
	}

	getLabel() {
		if (this.label != null && this.label.length > 0) {
			return html`
				<label
					id="textfield-label"
					class=${classMap(this.textfieldLabelClasses)}
					for="textfield-input">
					${this.label}
				</label>
			`
		}

		return html``
	}

	getErrorMessage() {
		if (this.errorMessage != null && this.errorMessage.length > 0) {
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
		this.textfieldLabelClasses.disabled = this.disabled
		this.textfieldLabelClasses.darkTheme = this.theme == Theme.dark
		this.textfieldInputClasses.disabled = this.disabled
		this.textfieldInputClasses.darkTheme = this.theme == Theme.dark

		return html`
			${getGlobalStyleHtml()}

			<div>
				${this.getLabel()}

				<input
					id="textfield-input"
					class=${classMap(this.textfieldInputClasses)}
					name="textfield-input"
					.value=${this.value}
					?aria-disabled=${this.disabled}
					?readonly=${this.disabled}
					?autofocus=${this.autofocus}
					type=${this.type}
					placeholder=${this.placeholder}
					autocomplete=${this.autocomplete}
					min=${this.min}
					max=${this.max}
					@input=${this.input}
					@keydown=${this.keydown}>

				${this.getErrorMessage()}
			</div>
		`
	}
}