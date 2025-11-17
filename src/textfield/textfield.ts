import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { textfieldStyles } from "./textfield.styles.js"

export const textfieldTagName = "dav-textfield"

@customElement(textfieldTagName)
export class Textfield extends LitElement {
	static styles = [globalStyles, textfieldStyles]

	@query("#textfield") textfieldInput: HTMLInputElement

	@state() private textfieldLabelClasses = {
		"textfield-label": true,
		disabled: false
	}
	@state() private textfieldInputClasses = {
		disabled: false,
		"no-arrows": false
	}

	@property() value: string = ""
	@property() label: string = ""
	@property() placeholder: string = ""
	@property({ type: Boolean }) disabled: boolean = false
	@property() type: string = "text"
	@property() autocomplete: string = "on"
	@property({ type: Boolean }) autofocus: boolean = false
	@property({ type: Boolean }) noArrows: boolean = false
	@property({ type: Number }) min: number = 0
	@property({ type: Number }) max: number = 100
	@property() errorMessage: string = ""

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

	onInput() {
		this.value = this.textfieldInput.value

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { value: this.value }
			})
		)
	}

	onKeydown(event: KeyboardEvent) {
		if (event.key === "Enter") {
			this.dispatchEvent(new CustomEvent("enter"))
		} else if (event.key === "Escape") {
			this.dispatchEvent(new CustomEvent("escape"))
		}
	}

	onFocus(event: FocusEvent) {
		this.dispatchEvent(new FocusEvent("focus", event))
	}

	getLabel() {
		if (this.label != null && this.label.length > 0) {
			return html`
				<label
					class=${classMap(this.textfieldLabelClasses)}
					for="textfield"
				>
					${this.label}
				</label>
			`
		}
	}

	getErrorMessage() {
		if (this.errorMessage != null && this.errorMessage.length > 0) {
			return html`
				<p class="textfield-error-message">${this.errorMessage}</p>
			`
		}
	}

	render() {
		this.textfieldLabelClasses.disabled = this.disabled
		this.textfieldInputClasses.disabled = this.disabled
		this.textfieldInputClasses["no-arrows"] = this.noArrows

		return html`
			<div class="container">
				${this.getLabel()}

				<input
					id="textfield"
					class=${classMap(this.textfieldInputClasses)}
					name="textfield"
					.value=${this.value}
					?aria-disabled=${this.disabled}
					?readonly=${this.disabled}
					?autofocus=${this.autofocus}
					type=${this.type}
					placeholder=${this.placeholder}
					autocomplete=${this.autocomplete}
					min=${this.min}
					max=${this.max}
					@input=${this.onInput}
					@keydown=${this.onKeydown}
					@focus=${this.onFocus}
				/>

				${this.getErrorMessage()}
			</div>
		`
	}
}
