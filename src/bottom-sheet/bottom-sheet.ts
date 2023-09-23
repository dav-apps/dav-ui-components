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
import { move } from "./bottom-sheet.animations.js"

export const bottomSheetTagName = "dav-bottom-sheet"
const minBottomSheetPosition = 24
const snapTopWindowHeightFactor = 0.8

@customElement(bottomSheetTagName)
export class BottomSheet extends LitElement {
	static styles = [globalStyles, bottomSheetStyles]

	private resizeObserverInitialized: boolean = false
	private draggingInitialized: boolean = false
	private mouseDown: boolean = false

	@query(".bottom-sheet-container") bottomSheetContainer: HTMLDivElement
	@query(".handle-container") handleContainer: HTMLDivElement
	@query(".buttons-container") buttonsContainer: HTMLDivElement
	@query(".inner-content-container") innerContentContainer: HTMLDivElement

	@state() public position: number = 0
	@state() private overlayOpacity: number = 0

	@state() private containerClasses = {
		container: true,
		visible: false
	}
	@state() private overlayClasses = {
		overlay: true,
		visible: false
	}
	@state() private overlayStyles = {
		"background-color": "rgb(var(--dav-color-scrim-rgb), 0)"
	}
	@state() private bottomSheetContainerStyles = {
		visibility: "hidden"
	}
	@state() private innerContentContainerStyles = {
		"max-height": ""
	}

	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Boolean }) dismissable: boolean = true

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)

		document.addEventListener("mousemove", this.onMouseMove)
		document.addEventListener("mouseup", this.onMouseUp)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)

		document.removeEventListener("mousemove", this.onMouseMove)
		document.removeEventListener("mouseup", this.onMouseUp)
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
			this.updatePosition()
		}
	}

	onMouseUp = () => {
		this.mouseDown = false
		this.snap()
	}

	private overlayClick() {
		if (this.dismissable) {
			this.dispatchEvent(new CustomEvent("dismiss"))
		} else {
			this.snap("bottom")
		}
	}

	public async snap(position: BottomSheetPosition = "auto") {
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

		await move(
			this.bottomSheetContainer,
			this.bottomSheetContainer.clientHeight - newPosition
		).finished

		if (this.position == minBottomSheetPosition) {
			this.dispatchEvent(new CustomEvent("snapBottom"))
		} else if (this.position == this.bottomSheetContainer.clientHeight) {
			this.dispatchEvent(new CustomEvent("snapTop"))
		}
	}

	public setPosition(position: number) {
		if (
			position == this.position ||
			this.innerContentContainer.scrollTop != 0
		) {
			return
		}

		this.position = position
		this.updatePosition()
	}

	private updatePosition() {
		if (this.bottomSheetContainer == null) {
			return
		}

		let animate = false

		if (this.bottomSheetContainerStyles.visibility == "hidden") {
			move(
				this.bottomSheetContainer,
				this.bottomSheetContainer.clientHeight,
				0
			)

			animate = true
			this.bottomSheetContainerStyles.visibility = "visible"
			this.requestUpdate()
		}

		if (!this.visible) {
			move(
				this.bottomSheetContainer,
				this.bottomSheetContainer.clientHeight,
				0
			)

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

		move(
			this.bottomSheetContainer,
			this.bottomSheetContainer.clientHeight - this.position,
			animate ? 200 : 0
		)

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

				this.updatePosition()
			})

			resizeObserver.observe(this.bottomSheetContainer)
			this.resizeObserverInitialized = true
		}

		if (!this.draggingInitialized && this.handleContainer != null) {
			this.handleContainer.addEventListener("mousedown", this.onMouseDown)
			this.draggingInitialized = true
		}

		this.containerClasses.visible = this.visible
		this.overlayClasses.visible = this.visible

		if (this.dismissable) {
			this.overlayOpacity = this.visible ? 0.5 : 0
		}

		this.overlayStyles[
			"background-color"
		] = `rgb(var(--dav-color-scrim-rgb), ${this.overlayOpacity
			.toPrecision(3)
			.toString()})`

		return html`
			<div class=${classMap(this.containerClasses)}>
				<div
					class=${classMap(this.overlayClasses)}
					style=${styleMap(this.overlayStyles)}
					@click=${this.overlayClick}
				></div>

				<div
					class="bottom-sheet-container"
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
