import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { searchTextfieldStyles } from "./search-textfield.styles.js"

export const searchTextfieldTagName = "dav-search-textfield"

@customElement(searchTextfieldTagName)
export class SearchTextfield extends LitElement {
	static styles = [globalStyles, searchTextfieldStyles]

	render() {
		return html``
	}
}
