import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"

export const listTagName = "dav-list"

@customElement(listTagName)
export class List extends LitElement {
	render() {
		return html`
			<slot></slot>
		`
	}
}
