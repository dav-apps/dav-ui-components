import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { styleMap } from "lit/directives/style-map.js"
import { classMap } from "lit/directives/class-map.js"
import autosize from "autosize"
import { Settings, Theme } from "../types.js"
import {
	getGlobalStyleHtml,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { textareaStyles } from "./textarea.styles.js"

export const textareaTagName = "dav-textarea"

@customElement(textareaTagName)
export class Textarea extends LitElement {
	static styles = [globalStyles, textareaStyles]

	@query("#textarea") textarea: HTMLTextAreaElement

	@state() private textareaLabelClasses = {
		disabled: false,
		darkTheme: false
	}
	@state() private textareaClasses = {
		disabled: false,
		darkTheme: false
	}
	@state() private textareaStyles = {
		resize: "auto"
	}

	@state() private theme: Theme = getSettings().theme

	@property() value: string = ""
	@property() label: string = ""
	@property() placeholder: string = ""
	@property({ type: Boolean }) disabled: boolean = false
	@property() resize: string = ""
	@property() errorMessage: string = ""

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)

		setTimeout(() => {
			autosize(this.textarea)
		}, 1)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => (this.theme = settings.theme)

	input() {
		this.value = this.textarea.value

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { value: this.value }
			})
		)
	}

	getLabel() {
		if (this.label != null && this.label.length > 0) {
			return html`
				<label
					id="textarea-label"
					class=${classMap(this.textareaLabelClasses)}
					for="textarea"
				>
					${this.label}
				</label>
			`
		}

		return html``
	}

	getErrorMessage() {
		if (this.errorMessage != null && this.errorMessage.length > 0) {
			return html`
				<p id="textarea-error-message" class="ms-motion-slideDownIn">
					${this.errorMessage}
				</p>
			`
		}

		return html``
	}

	render() {
		this.textareaLabelClasses.disabled = this.disabled
		this.textareaLabelClasses.darkTheme = this.theme == Theme.dark
		this.textareaClasses.disabled = this.disabled
		this.textareaClasses.darkTheme = this.theme == Theme.dark
		this.textareaStyles.resize = this.resize

		return html`
			${getGlobalStyleHtml()}

			<div id="textarea-container">
				${this.getLabel()}

				<textarea
					id="textarea"
					style=${styleMap(this.textareaStyles)}
					class=${classMap(this.textareaClasses)}
					name="textarea"
					.value=${this.value}
					?aria-disabled=${this.disabled}
					?readonly=${this.disabled}
					placeholder=${this.placeholder}
					@input=${this.input}
				></textarea>

				${this.getErrorMessage()}
			</div>
		`
	}
}
