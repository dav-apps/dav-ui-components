import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { Theme } from '../types.js'
import { getGlobalStyleHtml, convertStringToTheme } from '../utils.js'
import { contextMenuItemStyles } from './context-menu-item.styles.js'

export const contextMenuItemTagName = "dav-context-menu-item"

@customElement(contextMenuItemTagName)
export class ContextMenuItem extends LitElement {
	static styles = [contextMenuItemStyles]

	@state() private buttonClasses = {
		darkTheme: false
	}

	@property() value: string = ""
	@property() icon: string = "SingleColumn"
	@property({
		type: String,
		converter: (value: string) => convertStringToTheme(value)
	}) theme: Theme = Theme.light

	render() {
		this.buttonClasses.darkTheme = this.theme == Theme.dark

		return html`
			${getGlobalStyleHtml()}

			<button dir="ltr" class=${classMap(this.buttonClasses)}>
				<i class="ms-Icon ms-Icon--${this.icon}" aria-hidden="true"></i>
				<span>${this.value}</span>
			</button>
		`
	}
}