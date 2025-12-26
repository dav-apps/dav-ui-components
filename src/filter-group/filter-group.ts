import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"

export const filterGroupTagName = "dav-filter-group"

@customElement(filterGroupTagName)
export class FilterGroup extends LitElement {
	static styles = [globalStyles]

	render() {
		return html`<slot></slot>`
	}
}
