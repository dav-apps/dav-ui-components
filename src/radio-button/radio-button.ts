import { LitElement, PropertyValues, html } from "lit"
import { customElement, property, query } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { radioButtonStyles } from "./radio-button.styles.js"

export const radioButtonTagName = "dav-radio-button"

@customElement(radioButtonTagName)
export class RadioButton extends LitElement {
	static styles = [globalStyles, radioButtonStyles]

	@query("input") inputElement: HTMLInputElement

	@property() label: string = ""
	@property() name: string = "radio-group"
	@property() value: string = crypto.randomUUID()
	@property({ type: Boolean }) checked: boolean = false

	private inputId = `input-${crypto.randomUUID()}`

	inputClick() {
		this.checked = true

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { checked: this.checked }
			})
		)
	}

	protected updated(_changedProperties: PropertyValues): void {
		if (_changedProperties.has("checked") && this.inputElement) {
			this.inputElement.checked = this.checked
		}
	}

	render() {
		return html`
			<div>
				<input
					id=${this.inputId}
					type="radio"
					.name=${this.name}
					.value=${this.value}
					@click=${this.inputClick}
				/>

				<label for=${this.inputId}>${this.label}</label>
			</div>
		`
	}
}
