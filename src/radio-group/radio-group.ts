import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { radioGroupStyles } from "./radio-group.styles.js"
import { RadioButton } from "../radio-button/radio-button.js"

export const radioGroupTagName = "dav-radio-group"

@customElement(radioGroupTagName)
export class RadioGroup extends LitElement {
	static styles = [globalStyles, radioGroupStyles]

	private radioButtons: RadioButton[] = []

	connectedCallback() {
		super.connectedCallback()
		const radioButtons = this.querySelectorAll("dav-radio-button")

		for (const radioButton of radioButtons) {
			radioButton.addEventListener("change", () =>
				this.radioButtonChange(radioButton)
			)

			this.radioButtons.push(radioButton)
		}
	}

	radioButtonChange(radioButton: RadioButton) {
		// Uncheck all other radio buttons
		for (const rb of this.radioButtons) {
			if (rb !== radioButton) {
				rb.checked = false
			}
		}

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { checked: radioButton.value }
			})
		)
	}

	render() {
		return html`
			<slot></slot>
		`
	}
}
