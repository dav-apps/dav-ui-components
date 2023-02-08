import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { globalStyles } from '../styles.js'
import { bottomSheetStyles } from './bottom-sheet.styles.js'

export const bottomSheetTagName = "dav-bottom-sheet"

@customElement(bottomSheetTagName)
export class BottomSheet extends LitElement {
	static styles = [globalStyles, bottomSheetStyles]

	@query("#content-container") contentContainer: HTMLDivElement
	@query("#bottom-sheet-container") bottomSheetContainer: HTMLDivElement

	@state() private containerClasses = {
		visible: false
	}
	@state() private contentContainerStyles = {
		transform: ""
	}

	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Number }) position: number = 0

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		this.containerClasses.visible = this.visible

		if (this.bottomSheetContainer) {
			if (this.visible && this.position >= 0) {
				this.contentContainerStyles.transform = `translateY(${this.bottomSheetContainer.clientHeight - this.position}px)`
			} else {
				this.contentContainerStyles.transform = `translateY(${this.bottomSheetContainer.clientHeight}px)`
			}
		} else {
			this.contentContainerStyles.transform = "translateY(100%)"
		}

		return html`
			<div id="container" class=${classMap(this.containerClasses)}>
				<div
					id="overlay"
					@click=${this.overlayClick}>
				</div>

				<div id="bottom-sheet-container" style=${styleMap(this.contentContainerStyles)}>
					<div
						id="bottom-sheet-left-overlay"
						@click=${this.overlayClick}>
					</div>

					<div id="content-container">
						<div id="handle"></div>

						<div id="content">
							<slot></slot>
						</div>
					</div>

					<div
						id="bottom-sheet-right-overlay"
						@click=${this.overlayClick}>
					</div>
				</div>
			</div>
		`
	}
}