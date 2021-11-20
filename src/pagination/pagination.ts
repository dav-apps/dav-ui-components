import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { Theme } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange
} from '../utils.js'
import { paginationStyles } from './pagination.styles.js'

export const paginationTagName = "dav-pagination"

@customElement(paginationTagName)
export class Pagination extends LitElement {
	static styles = [paginationStyles]

	@state() private backButtonClasses = {
		"pagination-button": true,
		darkTheme: false
	}
	@state() private forwardButtonClasses = {
		"pagination-button": true,
		darkTheme: false
	}

	@state() private theme: Theme = Theme.light

	@property({ type: Number }) pages: number = 1
	@property({ type: Number }) currentPage: number = 1

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
		if (this.currentPage > 1) {
			this.dispatchEvent(new CustomEvent("pageChange", {
				detail: { page: this.currentPage - 1 }
			}))
		}
	}

	forwardButtonClick() {
		if (this.currentPage < this.pages) {
			this.dispatchEvent(new CustomEvent("pageChange", {
				detail: { page: this.currentPage + 1 }
			}))
		}
	}

	pageButtonClick(index: number) {
		this.dispatchEvent(new CustomEvent("pageChange", {
			detail: { page: index }
		}))
	}

	getBackButton() {
		this.backButtonClasses.darkTheme = this.theme == Theme.dark

		if (this.pages > 1) {
			return html`
				<button
					id="back-button"
					class=${classMap(this.backButtonClasses)}
					@click=${this.backButtonClick}>
					<i class="ms-Icon ms-Icon--Back" aria-hidden="true"></i>
				</button>
			`
		}
	}

	getForwardButton() {
		this.forwardButtonClasses.darkTheme = this.theme == Theme.dark

		if (this.pages > 1) {
			return html`
				<button
					id="forward-button"
					class=${classMap(this.forwardButtonClasses)}
					@click=${this.forwardButtonClick}>
					<i class="ms-Icon ms-Icon--Forward" aria-hidden="true"></i>
				</button>
			`
		}
	}

	getPageButton(index: number) {
		if (this.pages > 1) {
			let pageButtonClasses = {
				"pagination-button": true,
				selected: index == this.currentPage,
				darkTheme: this.theme == Theme.dark
			}

			return html`
				<button
					class=${classMap(pageButtonClasses)}
					@click=${() => this.pageButtonClick(index)}>
					${index}
				</button>
			`
		}
	}

	getPageButtons() {
		let buttons = []

		for (let i = 0; i < this.pages; i++) {
			buttons.push(this.getPageButton(i + 1))
		}

		return buttons
	}

	render() {
		return html`
			${getGlobalStyleHtml()}

			<div id="container" dir="ltr">
				${this.getBackButton()}

				${this.getPageButtons()}

				${this.getForwardButton()}
			</div>
		`
	}
}