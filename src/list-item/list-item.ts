import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { listItemStyles } from "./list-item.styles.js"

export const listItemTagName = "dav-list-item"

@customElement(listItemTagName)
export class ListItem extends LitElement {
	static styles = [globalStyles, listItemStyles]

	render() {
		return html`
			<h1>Hello World</h1>
		`
	}
}
