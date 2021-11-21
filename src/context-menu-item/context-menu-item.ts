import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { Theme } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange
} from '../utils.js'
import { globalStyles } from '../styles.js'
import { contextMenuItemStyles } from './context-menu-item.styles.js'

export const contextMenuItemTagName = "dav-context-menu-item"

@customElement(contextMenuItemTagName)
export class ContextMenuItem extends LitElement {
	static styles = [globalStyles, contextMenuItemStyles]

	@state() private buttonClasses = {
		darkTheme: false
	}

	@state() private theme: Theme = Theme.light

	@property() value: string = ""
	@property() icon: string = "SingleColumn"

	connectedCallback() {
		super.connectedCallback()
		subscribeThemeChange(this.themeChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeThemeChange(this.themeChange)
	}

	themeChange = (theme: Theme) => this.theme = theme

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