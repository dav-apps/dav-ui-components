import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { getGlobalStyleHtml } from '../utils'

export const dialogTagName = "dav-dialog"

@customElement(dialogTagName)
export class Dialog extends LitElement {
	@state()
	private contentStyles = {
		margin: "2ex",
		padding: "2ex",
		borderRadius: "5pt",
		backgroundColor: "white",
		zIndex: "4",
		minWidth: "280px",
		maxWidth: "600px"
	}

	@property() title: string = ""
	@property() primaryButtonText: string = ""
	@property() defaultButtonText: string = ""
	@property({ type: Boolean }) isLoading: boolean = false
	@property({ type: Number }) maxWidth: number = 600

	private overlayClick() {
		if (!this.isLoading) {
			this.dispatchEvent(new CustomEvent("dismiss"))
		}
	}

	primaryButtonClick() {
		this.dispatchEvent(new CustomEvent("primaryButtonClick"))
	}

	defaultButtonClick() {
		this.dispatchEvent(new CustomEvent("defaultButtonClick"))
	}

	getProgressRing() {
		if (this.isLoading) {
			return html`
				<fluent-progress-ring
					style="width: 16px; height: 16px; margin: 8px 14px 0px 0px;"
					indeterminate="true">
				</fluent-progress-ring>
			`
		} else {
			return html``
		}
	}

	render() {
		// Update the UI based on the properties
		this.contentStyles.maxWidth = `${this.maxWidth}px`

		return html`
			${getGlobalStyleHtml()}

			<div
				class="d-flex justify-content-center align-items-center"
				style="display: flex; justify-content: center; align-items: center; position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 3">

				<div
					style="position: fixed; top: 0; bottom: 0; left: 0; right: 0; background-color: #3b3b3b67;"
					@click=${this.overlayClick}>
				</div>

				<div
					class="shadow ms-motion-slideUpIn"
					style=${styleMap(this.contentStyles)}
					role="dialog">

					<h4 style="margin-bottom: 20px; font-weight: 100; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
						${this.title}
					</h4>

					<slot></slot>

					<div
						class="d-flex"
						style="float: right">

						${this.getProgressRing()}

						<fluent-button
							?disabled=${this.isLoading}
							@click=${this.defaultButtonClick}>
							${this.defaultButtonText}
						</fluent-button>

						<fluent-button
							style="margin-left: 10px"
							appearance="accent"
							?disabled=${this.isLoading}
							@click=${this.primaryButtonClick}>
							${this.primaryButtonText}
						</fluent-button>
					</div>
				</div>
			</div>
		`
	}
}