import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { toastStyles } from "./toast.styles.js"

export const toastTagName = "dav-toast"

@customElement(toastTagName)
export class Toast extends LitElement {
	static styles = [globalStyles, toastStyles]

	@property() text: string = ""

	render() {
		return html`
			<div class="container">
				${this.text}
			</div>
		`
	}
}
