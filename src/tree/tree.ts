import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { treeStyles } from "./tree.styles.js"

export const treeTagName = "dav-tree"

@customElement(treeTagName)
export class Tree extends LitElement {
	static styles = [globalStyles, treeStyles]

	render() {
		return html`<slot></slot>`
	}
}
