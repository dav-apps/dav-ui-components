import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings, BottomSheetPosition } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { bottomSheetStyles } from "./bottom-sheet.styles.js"

export const bottomSheetTagName = "dav-bottom-sheet"
const minBottomSheetPosition = 24
const snapTopWindowHeightFactor = 0.8

@customElement(bottomSheetTagName)
export class BottomSheet extends LitElement {
	static styles = [globalStyles, bottomSheetStyles]

	private resizeObserverInitialized: boolean = false
	private draggingInitialized: boolean = false
	private animatePosition: boolean = true
	private mouseDown: boolean = false

	@query(".bottom-sheet-container") bottomSheetContainer: HTMLDivElement
	@query(".handle-container") handleContainer: HTMLDivElement
	@query(".buttons-container") buttonsContainer: HTMLDivElement
	@query(".inner-content-container") innerContentContainer: HTMLDivElement

	@state() private overlayOpacity: number = 0

	@state() private containerClasses = {
		container: true,
		visible: false
	}
	@state() private overlayClasses = {
		overlay: true,
		visible: false
	}
	@state() private bottomSheetContainerClasses = {
		"bottom-sheet-container": true,
		animate: false
	}
	@state() private overlayStyles = {
		"background-color": "rgb(var(--dav-color-scrim-rgb), 0)"
	}
	@state() private bottomSheetContainerStyles = {
		transform: "translateY(100%)"
	}
	@state() private innerContentContainerStyles = {
		"max-height": ""
	}

	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Boolean }) dismissable: boolean = true
	@property({ type: Number }) position: number = 0

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	onMouseDown = (event: MouseEvent) => {
		event.preventDefault()
		this.mouseDown = true
	}

	onMouseMove = (event: MouseEvent) => {
		if (this.mouseDown) {
			this.position -= event.movementY
			this.updateContentContainerTransform()
		}
	}

	onMouseUp = () => {
		this.mouseDown = false
		this.snap()
	}

	public snap(position: BottomSheetPosition = "auto") {
		this.animatePosition = true
		let newPosition: number = 0

		if (position == "bottom") {
			newPosition = minBottomSheetPosition
		} else if (position == "top") {
			newPosition = this.bottomSheetContainer.clientHeight
		} else if (position == "auto") {
			if (
				this.position > window.innerHeight / 2 ||
				this.position > this.bottomSheetContainer.clientHeight / 2
			) {
				newPosition = this.bottomSheetContainer.clientHeight
			} else {
				newPosition = minBottomSheetPosition
			}
		}

		this.position = newPosition
		this.updateContentContainerTransform()

		setTimeout(() => {
			this.animatePosition = false
		}, 200)
	}

	/**
	 * Updates the vertical position of the bottom sheet
	 * using transform: translateY, whenever the size of
	 * the bottom sheet content changes
	 */
	private updateContentContainerTransform() {
		if (this.bottomSheetContainer == null) {
			this.bottomSheetContainerStyles.transform = "translateY(100%)"
			return
		}

		if (!this.visible) {
			this.bottomSheetContainerStyles.transform = `translateY(${this.bottomSheetContainer.clientHeight}px)`
			return
		}

		this.innerContentContainerStyles["max-height"] = `${
			window.innerHeight * snapTopWindowHeightFactor -
			this.buttonsContainer.clientHeight
		}px`

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

		this.bottomSheetContainerStyles.transform = `translateY(
			${this.bottomSheetContainer.clientHeight - this.position}px)`

		if (!this.dismissable) {
			// Calculate the opacity
			this.overlayOpacity =
				((100 /
					(this.bottomSheetContainer.clientHeight -
						minBottomSheetPosition)) *
					(this.position - minBottomSheetPosition)) /
				200

			if (this.position == minBottomSheetPosition) {
				// Hide the overlay
				this.overlayClasses.visible = false
			}
		}

		this.requestUpdate()
	}

	private overlayClick() {
		if (this.dismissable) {
			this.dispatchEvent(new CustomEvent("dismiss"))
		} else {
			this.snap("bottom")
		}
	}

	render() {
		if (
			!this.resizeObserverInitialized &&
			this.bottomSheetContainer != null
		) {
			const resizeObserver = new ResizeObserver(entries => {
				if (
					entries.length == 0 ||
					entries[0].target != this.bottomSheetContainer
				) {
					return
				}

				this.updateContentContainerTransform()
				this.requestUpdate()
			})

			resizeObserver.observe(this.bottomSheetContainer)
			this.resizeObserverInitialized = true
		}

		if (!this.draggingInitialized && this.handleContainer != null) {
			this.handleContainer.addEventListener("mousedown", this.onMouseDown)
			document.addEventListener("mousemove", this.onMouseMove)
			document.addEventListener("mouseup", this.onMouseUp)

			this.draggingInitialized = true
		}

		this.containerClasses.visible = this.visible
		this.overlayClasses.visible = this.visible
		this.bottomSheetContainerClasses.animate = this.animatePosition

		if (this.dismissable) {
			this.overlayOpacity = this.visible ? 0.5 : 0
		}

		this.overlayStyles[
			"background-color"
		] = `rgb(var(--dav-color-scrim-rgb), ${this.overlayOpacity
			.toPrecision(3)
			.toString()})`

		if (
			this.innerContentContainer &&
			this.innerContentContainer.scrollTop == 0
		) {
			this.updateContentContainerTransform()
		}

		return html`
			<div class=${classMap(this.containerClasses)}>
				<div
					class=${classMap(this.overlayClasses)}
					style=${styleMap(this.overlayStyles)}
					@click=${this.overlayClick}
				></div>

				<div
					class=${classMap(this.bottomSheetContainerClasses)}
					style=${styleMap(this.bottomSheetContainerStyles)}
				>
					<div
						class="bottom-sheet-left-overlay"
						@click=${this.overlayClick}
					></div>

					<div class="bottom-sheet">
						<div class="handle-container">
							<div class="handle"></div>
						</div>

						<div class="content-container">
							<div class="buttons-container">
								<slot name="buttons"></slot>
							</div>

							<div
								class="inner-content-container"
								style=${styleMap(this.innerContentContainerStyles)}
							>
								<slot></slot>
							</div>
						</div>
					</div>

					<div
						class="bottom-sheet-right-overlay"
						@click=${this.overlayClick}
					></div>
				</div>
			</div>
		`
	}
}
