import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { treeItemStyles } from "./tree-item.styles.js"

export const treeItemTagName = "dav-tree-item"

@customElement(treeItemTagName)
export class TreeItem extends LitElement {
	static styles = [globalStyles, treeItemStyles]

	render() {
		return html`<span>Hello World</span>`
	}
}
