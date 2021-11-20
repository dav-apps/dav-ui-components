import { LitElement, html, css } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { getGlobalStyleHtml } from '../utils.js'

export const paginationTagName = "dav-pagination"

@customElement(paginationTagName)
export class Pagination extends LitElement {
	static styles = css`
		#container {
			display: flex;
			justify-content: center;
		}

		.pagination-button {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 38px;
			height: 38px;
			font-size: 16px;
			padding: 0;
			background-color: #f8f9fa;
			border-radius: 0.5rem;
			border: 1px solid #f8f9fa;
			transition: 0.2s;
		}

		.pagination-button:not(.selected):hover {
			background-color: #efefef;
			border-color: #efefef;
		}

		.selected {
			background-color: #d9d9d9;
		}
	`

	@property({ type: Number }) pages: number = 1
	@property({ type: Number }) currentPage: number = 1

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
		if (this.pages > 1) {
			return html`
				<button
					id="back-button"
					class="pagination-button"
					@click=${this.backButtonClick}>
					<i class="ms-Icon ms-Icon--Back" aria-hidden="true"></i>
				</button>
			`
		}
	}

	getForwardButton() {
		if (this.pages > 1) {
			return html`
				<button
					id="forward-button"
					class="pagination-button"
					@click=${this.forwardButtonClick}>
					<i class="ms-Icon ms-Icon--Forward" aria-hidden="true"></i>
				</button>
			`
		}
	}

	getPageButton(index: number) {
		if (this.pages > 1) {
			if (index == this.currentPage) {
				return html`
					<button
						class="pagination-button selected"
						@click=${() => this.pageButtonClick(index)}>
						${index}
					</button>
				`
			} else {
				return html`
					<button
						class="pagination-button"
						@click=${() => this.pageButtonClick(index)}>
						${index}
					</button>
				`
			}
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