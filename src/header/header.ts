import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { Theme, HeaderSize } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange,
	convertStringToHeaderSize
} from '../utils.js'
import { globalStyles } from '../styles.js'
import { headerStyles } from './header.styles.js'

export const headerTagName = "dav-header"

@customElement(headerTagName)
export class Header extends LitElement {
	static styles = [globalStyles, headerStyles]

	@state() private headerClasses = {
		"mt-3 mb-2 fw-light text-center": true,
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
	@state() private headerStyles = {
		fontSize: "40px"
	}
	@state() private backButtonStyles = {
		marginTop: "2px"
	}
	@state() private editButtonStyles = {
		marginTop: "2px"
	}

	@state() private theme: Theme = Theme.light

	@property() header: string = ""
	@property({ type: Boolean }) backButtonVisible: boolean = false
	@property({ type: Boolean }) editButtonVisible: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToHeaderSize(value)
	}) size: HeaderSize = HeaderSize.normal

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
					style=${styleMap(this.backButtonStyles)}
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
					style=${styleMap(this.editButtonStyles)}
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

		switch (this.size) {
			case HeaderSize.big:
				this.headerStyles.fontSize = "40px"
				this.backButtonStyles.marginTop = "6px"
				this.editButtonStyles.marginTop = "6px"
				break
			case HeaderSize.normal:
				this.headerStyles.fontSize = "32px"
				this.backButtonStyles.marginTop = "2px"
				this.editButtonStyles.marginTop = "2px"
				break
			case HeaderSize.small:
				this.headerStyles.fontSize = "28px"
				this.backButtonStyles.marginTop = "-1px"
				this.editButtonStyles.marginTop = "-1px"
				break
		}

		return html`
			${getGlobalStyleHtml()}

			<h1
				id="header"
				class=${classMap(this.headerClasses)}
				style=${styleMap(this.headerStyles)}
				dir="ltr">
				${this.getBackButton()}
				${this.header}
				${this.getEditButton()}
			</h1>
		`
	}
}