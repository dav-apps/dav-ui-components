import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { Theme } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange
} from '../utils.js'
import { sidenavItemStyles } from './sidenav-item-styles.js'

export const sidenavItemTagName = "dav-sidenav-item"

@customElement(sidenavItemTagName)
export class SidenavItem extends LitElement {
	static styles = [sidenavItemStyles]

	@state() private spanStyles = {
		marginLeft: "0px"
	}

	@state() private buttonClasses = {
		darkTheme: false
	}

	@state() private theme: Theme = Theme.light

	@property() value: string = ""
	@property() icon: string = ""
	@property({ type: Boolean }) indent: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeThemeChange(this.themeChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeThemeChange(this.themeChange)
	}

	themeChange = (theme: Theme) => this.theme = theme

	getIcon() {
		if (this.icon.length > 0) {
			return html`
				<i class="ms-Icon ms-Icon--${this.icon}" aria-hidden="true"></i>
			`
		}

		return html``
	}

	render() {
		this.buttonClasses.darkTheme = this.theme == Theme.dark

		if (this.icon.length == 0 && this.indent) {
			this.spanStyles.marginLeft = "12px"
		} else {
			this.spanStyles.marginLeft = "0px"
		}

		return html`
			${getGlobalStyleHtml()}

			<button class=${classMap(this.buttonClasses)} dir="ltr" role="link">
				${this.getIcon()}
				<span style=${styleMap(this.spanStyles)}>${this.value}</span>
			</button>
		`
	}
}