import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { contextMenuDividerStyles } from "./context-menu-divider.styles.js"

export const contextMenuDividerTagName = "dav-context-menu-divider"

@customElement(contextMenuDividerTagName)
export class ContextMenuDivider extends LitElement {
	static styles = [globalStyles, contextMenuDividerStyles]

	render() {
		return html`
			<div class="divider"></div>
		`
	}
}
