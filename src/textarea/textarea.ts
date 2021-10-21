import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'

export const textareaTagName = "dav-textarea"

@customElement(textareaTagName)
export class Textarea extends LitElement {
	@query("#textarea") textarea: HTMLTextAreaElement

	@property() value: string = ""
	@property() placeholder: string = ""

	input() {
		this.dispatchEvent(new CustomEvent("change", {
			detail: { value: this.textarea.value }
		}))
	}

	render() {
		return html`
			<div>
				<textarea
					id="textarea"
					name="textarea"
					.value=${this.value}
					placeholder=${this.placeholder}
					@input=${this.input}>
				</textarea>
			</div>
		`
	}
}