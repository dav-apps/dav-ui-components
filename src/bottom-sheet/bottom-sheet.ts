import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { BottomSheetPosition } from '../types.js'
import { globalStyles } from '../styles.js'
import { bottomSheetStyles } from './bottom-sheet.styles.js'

export const bottomSheetTagName = "dav-bottom-sheet"
const minBottomSheetPosition = 24
const snapTopWindowHeightFactor = 0.8

@customElement(bottomSheetTagName)
export class BottomSheet extends LitElement {
	static styles = [globalStyles, bottomSheetStyles]

	@query("#content-container") contentContainer: HTMLDivElement
	@query("#bottom-sheet-container") bottomSheetContainer: HTMLDivElement

	@state() private containerClasses = {
		visible: false
	}
	@state() private overlayClasses = {
		visible: false
	}
	@state() private bottomSheetContainerClasses = {
		animate: false
	}
	@state() private overlayStyles = {
		opacity: "1"
	}
	@state() private contentContainerStyles = {
		transform: ""
	}

	private resizeObserverInitialized: boolean = false
	private animatePosition: boolean = true

	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Boolean }) dismissable: boolean = true
	@property({ type: Number }) position: number = 0

	public snap(position: BottomSheetPosition = "auto") {
		if (this.position > window.innerHeight * snapTopWindowHeightFactor) {
			return
		}

		this.animatePosition = true
		let newPosition: number = 0

		if (position == "bottom") {
			newPosition = minBottomSheetPosition
		} else if (position == "top") {
			if (this.bottomSheetContainer.clientHeight > window.innerHeight) {
				newPosition = window.innerHeight * snapTopWindowHeightFactor
			} else {
				newPosition = this.bottomSheetContainer.clientHeight
			}
		} else if (position == "auto") {
			if (this.bottomSheetContainer.clientHeight > window.innerHeight) {
				if (this.position > window.innerHeight / 2) {
					newPosition = window.innerHeight * snapTopWindowHeightFactor
				} else {
					newPosition = minBottomSheetPosition
				}
			} else {
				if (this.position > this.bottomSheetContainer.clientHeight / 2) {
					newPosition = this.bottomSheetContainer.clientHeight
				} else {
					newPosition = minBottomSheetPosition
				}
			}
		}

		this.position = newPosition

		setTimeout(() => {
			this.animatePosition = false
		}, 200)
	}

	private updateContentContainerTransform() {
		if (this.bottomSheetContainer) {
			if (this.visible) {
				if (this.position > this.bottomSheetContainer.clientHeight) {
					this.position = this.bottomSheetContainer.clientHeight
				} else if (this.position < minBottomSheetPosition) {
					this.position = minBottomSheetPosition
				}

				if (this.position == minBottomSheetPosition) {
					this.dispatchEvent(new CustomEvent("snapBottom"))
				} else if (this.position == this.bottomSheetContainer.clientHeight) {
					this.dispatchEvent(new CustomEvent("snapTop"))
				}

				this.contentContainerStyles.transform = `translateY(${this.bottomSheetContainer.clientHeight - this.position}px)`

				if (!this.dismissable) {
					// Calculate the opacity
					this.overlayStyles.opacity = (
						(100 / (this.bottomSheetContainer.clientHeight - minBottomSheetPosition)) * (this.position - minBottomSheetPosition) / 100
					).toPrecision(3).toString()

					if (this.position == minBottomSheetPosition) {
						// Hide the overlay
						this.overlayClasses.visible = false
					}
				}
			} else {
				this.contentContainerStyles.transform = `translateY(${this.bottomSheetContainer.clientHeight}px)`
			}
		} else {
			this.contentContainerStyles.transform = "translateY(100%)"
		}
	}

	private overlayClick() {
		if (this.dismissable) {
			this.dispatchEvent(new CustomEvent("dismiss"))
		} else {
			this.position = minBottomSheetPosition
		}
	}

	render() {
		if (!this.resizeObserverInitialized && this.bottomSheetContainer != null) {
			const resizeObserver = new ResizeObserver((entries) => {
				if (
					entries.length == 0
					|| entries[0].target != this.bottomSheetContainer
				) return

				this.updateContentContainerTransform()
				this.requestUpdate()
			})

			resizeObserver.observe(this.bottomSheetContainer)
			this.resizeObserverInitialized = true
		}

		this.containerClasses.visible = this.visible
		this.overlayClasses.visible = this.visible
		this.bottomSheetContainerClasses.animate = this.animatePosition
		this.overlayStyles.opacity = this.visible ? "1" : "0"

		this.updateContentContainerTransform()

		return html`
			<div id="container" class=${classMap(this.containerClasses)}>
				<div
					id="overlay"
					class=${classMap(this.overlayClasses)}
					style=${styleMap(this.overlayStyles)}
					@click=${this.overlayClick}>
				</div>

				<div
					id="bottom-sheet-container"
					class=${classMap(this.bottomSheetContainerClasses)}
					style=${styleMap(this.contentContainerStyles)}
				>
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