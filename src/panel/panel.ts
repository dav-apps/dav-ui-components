import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { styleMap } from 'lit/directives/style-map.js'
import { getGlobalStyleHtml } from '../utils.js'
import { panelStyles } from './panel.styles.js'
import { slideIn, slideOut } from './panel.animations.js'

export const panelTagName = "dav-panel"

@customElement(panelTagName)
export class Panel extends LitElement {
	static styles = [panelStyles]

	@state()
	private containerStyles = {
		display: "none"
	}

	@property() header: string = ""
	@property({ type: Boolean }) isVisible: boolean = false

	@query("#overlay") overlay: HTMLDivElement
	@query("#content") content: HTMLDivElement

	updated(changedProperties: Map<string, any>) {
		if (changedProperties.has("isVisible") && changedProperties.get("isVisible") != null) {
			let newIsVisible = !changedProperties.get("isVisible") as boolean
			let animation: Animation

			if (newIsVisible) {
				// Play slide in animation
				animation = slideIn(this.content, this.overlay)
			} else {
				// Play slide out animation
				animation = slideOut(this.content, this.overlay)
			}

			animation.onfinish = () => {
				this.containerStyles.display = newIsVisible ? "block" : "none"
				this.requestUpdate()
			}
		}
	}

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	private closeButtonClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		// Update the UI based on the properties
		if (this.isVisible) {
			this.containerStyles.display = "block"
		}

		return html`
			${getGlobalStyleHtml()}

			<div
				id="container"
				style=${styleMap(this.containerStyles)}>

				<div
					id="overlay"
					@click=${this.overlayClick}>
				</div>

				<div
					id="content"
					class="shadow-lg">

					<button
						id="close-button"
						@click=${this.closeButtonClick}>
						<i class="ms-Icon ms-Icon--Cancel" aria-hidden="true"></i>
					</button>

					<p id="header">
						${this.header}
					</p>

					<div id="slot-container">
						<slot></slot>
					</div>
				</div>
			</div>
		`
	}
}