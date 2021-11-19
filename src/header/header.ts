import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { Theme } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange
} from '../utils.js'
import { headerStyles } from './header.styles.js'

export const headerTagName = "dav-header"

@customElement(headerTagName)
export class Header extends LitElement {
	static styles = [headerStyles]

	@state() private headerClasses = {
		"mt-3 mb-2 fw-light": true,
		darkTheme: false
	}
	@state() private backButtonClasses = {
		"btn icon-button me-3": true,
		darkTheme: false
	}
	@state() private editButtonClasses = {
		"btn icon-button ms-3": true,
		darkTheme: false
	}

	@state() private theme: Theme = Theme.light

	@property() header: string = ""
	@property({ type: Boolean }) backButtonVisible: boolean = false
	@property({ type: Boolean }) editButtonVisible: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeThemeChange(this.themeChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeThemeChange(this.themeChange)
	}

	themeChange = (theme: Theme) => this.theme = theme

	backButtonClick() {
		this.dispatchEvent(new CustomEvent("backButtonClick"))
	}

	editButtonClick() {
		this.dispatchEvent(new CustomEvent("editButtonClick"))
	}

	getBackButton() {
		if (this.backButtonVisible && this.header.length > 0) {
			return html`
				<button
					id="back-button"
					class=${classMap(this.backButtonClasses)}
					type="button"
					@click=${this.backButtonClick}>
					<i class="ms-Icon ms-Icon--Back" aria-hidden="true"></i>
				</button>
			`
		}

		return html``
	}

	getEditButton() {
		if (this.editButtonVisible && this.header.length > 0) {
			return html`
				<button
					id="edit-button"
					class=${classMap(this.editButtonClasses)}
					type="button"
					@click=${this.editButtonClick}>
					<i class="ms-Icon ms-Icon--Edit" aria-hidden="true"></i>
				</button>
			`
		}

		return html``
	}

	render() {
		this.headerClasses.darkTheme = this.theme == Theme.dark
		this.backButtonClasses.darkTheme = this.theme == Theme.dark
		this.editButtonClasses.darkTheme = this.theme == Theme.dark

		return html`
			${getGlobalStyleHtml()}

			<h1 id="header" class=${classMap(this.headerClasses)} dir="ltr">
				${this.getBackButton()}
				${this.header}
				${this.getEditButton()}
			</h1>
		`
	}
}