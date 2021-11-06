import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { getGlobalStyleHtml } from '../utils.js'
import { contextMenuStyles } from './context-menu.styles.js'

export const contextMenuTagName = "dav-context-menu"

@customElement(contextMenuTagName)
export class ContextMenu extends LitElement {
	static styles = [contextMenuStyles]

	render() {
		return html`
			${getGlobalStyleHtml()}

			<div id="container" class="ms-motion-slideDownIn shadow-sm">
				<slot></slot>
			</div>
		`
	}
}