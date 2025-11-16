import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { radioButtonStyles } from "./radio-button.styles.js"

export const radioButtonTagName = "dav-radio-button"

@customElement(radioButtonTagName)
export class RadioButton extends LitElement {
	static styles = [globalStyles, radioButtonStyles]

	render() {
		return html`<p>Hello World</p>`
	}
}
