import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { getGlobalStyleHtml } from '../utils'
import { panelStyles } from './panel.styles'

export const panelTagName = "dav-panel"

@customElement(panelTagName)
export class Panel extends LitElement {
	static styles = [panelStyles]

	@state()
	private containerStyles = {
		display: "block"
	}

	@property() header: string = ""
	@property({ type: Boolean }) isVisible: boolean = false

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		// Update the UI based on the properties
		this.containerStyles.display = this.isVisible ? "block" : "none"

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
					class="shadow-lg ms-motion-slideLeftIn">

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