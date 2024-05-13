import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { timePickerStyles } from "./time-picker.styles.js"

export const timePickerTagName = "dav-time-picker"

@customElement(timePickerTagName)
export class TimePicker extends LitElement {
	static styles = [globalStyles, timePickerStyles]

	render() {
		return html`
			<p>Hello World</p>
		`
	}
}
