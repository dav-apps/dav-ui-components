import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { listStyles } from "./list.styles.js"

export const listTagName = "dav-list"

@customElement(listTagName)
export class List extends LitElement {
	static styles = [globalStyles, listStyles]

	render() {
		return html`
			<slot></slot>
		`
	}
}
