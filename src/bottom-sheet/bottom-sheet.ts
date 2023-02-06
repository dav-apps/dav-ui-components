import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { globalStyles } from '../styles.js'
import { bottomSheetStyles } from './bottom-sheet.styles.js'

export const bottomSheetTagName = "dav-bottom-sheet"

@customElement(bottomSheetTagName)
export class BottomSheet extends LitElement {
	static styles = [globalStyles, bottomSheetStyles]

	@state() private containerClasses = {
		visible: false
	}

	@property({ type: Boolean }) visible: boolean = false

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		this.containerClasses.visible = this.visible

		return html`
			<div id="container" class=${classMap(this.containerClasses)}>
				<div
					id="overlay"
					@click=${this.overlayClick}>
				</div>

				<div id="content-container">
					<div
						id="content-left-overlay"
						@click=${this.overlayClick}>
					</div>

					<div id="content">
						<div id="handle"></div>

						<slot></slot>
					</div>

					<div
						id="content-right-overlay"
						@click=${this.overlayClick}>
					</div>
				</div>
			</div>
		`
	}
}