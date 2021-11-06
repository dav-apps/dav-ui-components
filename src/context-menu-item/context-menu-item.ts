import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getGlobalStyleHtml } from '../utils.js'
import { contextMenuItemStyles } from './context-menu-item.styles.js'

export const contextMenuItemTagName = "dav-context-menu-item"

@customElement(contextMenuItemTagName)
export class ContextMenuItem extends LitElement {
	static styles = [contextMenuItemStyles]

	@property() value: string = ""
	@property() icon: string = "SingleColumn"

	render() {
		return html`
			${getGlobalStyleHtml()}

			<button dir="ltr">
				<i class="ms-Icon ms-Icon--${this.icon}" aria-hidden="true"></i>
				<span>${this.value}</span>
			</button>
		`
	}
}