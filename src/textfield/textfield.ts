import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { textfieldStyles } from './textfield.styles.js'
import { Theme } from '../types.js'
import { convertStringToTheme } from '../utils.js'

export const textfieldTagName = "dav-textfield"

@customElement(textfieldTagName)
export class Textfield extends LitElement {
	static styles = [textfieldStyles]

	@state() private textfieldLabelClasses = {
		darkTheme: false
	}
	@state() private textfieldInputClasses = {
		darkTheme: false
	}

	@property() label: string = ""
	@property() type: string = ""
	@property() placeholder: string = ""
	@property() autocomplete: string = "on"
	@property({
		type: String,
		converter: (value: string) => convertStringToTheme(value)
	}) theme: Theme = Theme.light

	render() {
		this.textfieldLabelClasses.darkTheme = this.theme == Theme.dark
		this.textfieldInputClasses.darkTheme = this.theme == Theme.dark

		return html`
			<div>
				<p id="textfield-label"
					class=${classMap(this.textfieldLabelClasses)}>
					${this.label}
				</p>

				<input
					id="textfield-input"
					class=${classMap(this.textfieldInputClasses)}
					type=${this.type}
					placeholder=${this.placeholder}
					autocomplete=${this.autocomplete}>
			</div>
		`
	}
}