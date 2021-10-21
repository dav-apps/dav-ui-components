import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { styleMap } from 'lit/directives/style-map.js'
import { classMap } from 'lit/directives/class-map.js'
import autosize from 'autosize'
import { textareaStyles } from './textarea.styles.js'
import { Theme } from '../types.js'
import { getGlobalStyleHtml, convertStringToTheme } from '../utils.js'

export const textareaTagName = "dav-textarea"

@customElement(textareaTagName)
export class Textarea extends LitElement {
	static styles = [textareaStyles]

	@query("#textarea") textarea: HTMLTextAreaElement

	@state() private textareaClasses = {
		darkTheme: false
	}

	@state() private textareaStyles = {
		resize: "auto"
	}

	@property() value: string = ""
	@property() placeholder: string = ""
	@property() resize: string = ""
	@property({
		type: String,
		converter: (value: string) => convertStringToTheme(value)
	}) theme: Theme = Theme.light

	connectedCallback() {
		super.connectedCallback()

		setTimeout(() => {
			autosize(this.textarea)
		}, 1)
	}

	input() {
		autosize(this.textarea)

		this.dispatchEvent(new CustomEvent("change", {
			detail: { value: this.textarea.value }
		}))
	}

	render() {
		this.textareaClasses.darkTheme = this.theme == Theme.dark
		this.textareaStyles.resize = this.resize

		return html`
			<div id="textarea-container">
				<textarea
					id="textarea"
					style=${styleMap(this.textareaStyles)}
					class=${classMap(this.textareaClasses)}
					name="textarea"
					.value=${this.value}
					placeholder=${this.placeholder}
					@input=${this.input}>
				</textarea>
			</div>
		`
	}
}