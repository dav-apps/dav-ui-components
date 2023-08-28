import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { styleMap } from "lit/directives/style-map.js"
import { classMap } from "lit/directives/class-map.js"
import autosize from "autosize"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { textareaStyles } from "./textarea.styles.js"

export const textareaTagName = "dav-textarea"

@customElement(textareaTagName)
export class Textarea extends LitElement {
	static styles = [globalStyles, textareaStyles]

	@query("#textarea") textarea: HTMLTextAreaElement

	@state() private textareaLabelClasses = {
		"textarea-label": true,
		disabled: false
	}
	@state() private textareaClasses = {
		disabled: false
	}
	@state() private textareaStyles = {
		resize: ""
	}

	@property() value: string = ""
	@property() label: string = ""
	@property() placeholder: string = ""
	@property({ type: Boolean }) disabled: boolean = false
	@property() resize: string = "auto"
	@property() errorMessage: string = ""

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)

		if (this.resize == "auto") {
			setTimeout(() => {
				autosize(this.textarea)
			}, 1)
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

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
					class=${classMap(this.textareaLabelClasses)}
					for="textarea-input"
				>
					${this.label}
				</label>
			`
		}
	}

	getErrorMessage() {
		if (this.errorMessage != null && this.errorMessage.length > 0) {
			return html`
				<p class="textarea-error-message">${this.errorMessage}</p>
			`
		}
	}

	render() {
		this.textareaLabelClasses.disabled = this.disabled
		this.textareaClasses.disabled = this.disabled
		this.textareaStyles.resize = this.resize || "none"

		return html`
			<div class="textarea-container">
				${this.getLabel()}

				<textarea
					id="textarea"
					style=${styleMap(this.textareaStyles)}
					class=${classMap(this.textareaClasses)}
					name="textarea-input"
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
