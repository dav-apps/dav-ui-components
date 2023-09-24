import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
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
	@query(".overlay") overlay: HTMLDivElement
	@query(".handle-container") handleContainer: HTMLDivElement
	@query(".buttons-container") buttonsContainer: HTMLDivElement
	@query(".inner-content-container") innerContentContainer: HTMLDivElement

	@state() public position: number = 0

	@state() private overlayStyles = {
		display: "none"
	}
	@state() private bottomSheetContainerStyles = {
		visibility: "hidden"
	}
	@state() private innerContentContainerStyles = {
		"max-height": ""
	}

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
		if (this.mouseDown) {
			this.mouseDown = false
			this.snap()
		}
	}

	private overlayClick() {
		if (this.dismissable) {
			this.dispatchEvent(new CustomEvent("dismiss"))
		} else {
			this.snap("bottom")
		}
	}

	public async snap(position: BottomSheetPosition = "auto") {
		let newPosition = 0
		let overlayOpacity = 0

		if (position == "bottom") {
			newPosition = minBottomSheetPosition
		} else if (position == "top") {
			newPosition = this.bottomSheetContainer.clientHeight
			overlayOpacity = 1
		} else if (position == "auto") {
			if (
				this.position > window.innerHeight / 2 ||
				this.position > this.bottomSheetContainer.clientHeight / 2
			) {
				newPosition = this.bottomSheetContainer.clientHeight
				overlayOpacity = 1
			} else if (this.dismissable) {
				newPosition = 0
			} else {
				newPosition = minBottomSheetPosition
			}
		}

		this.position = newPosition

		let moveAnimations = move(
			this.bottomSheetContainer,
			this.overlay,
			this.bottomSheetContainer.clientHeight - newPosition,
			overlayOpacity
		)

		// Wait for all animations to end
		await Promise.all(moveAnimations.map(a => a.finished))

		if (this.position == minBottomSheetPosition) {
			this.dispatchEvent(new CustomEvent("snapBottom"))
		} else if (this.position == this.bottomSheetContainer.clientHeight) {
			this.dispatchEvent(new CustomEvent("snapTop"))
		}
	}

	public async hide() {
		if (this.position == 0) return
		this.position = 0

		let moveAnimations = move(
			this.bottomSheetContainer,
			this.overlay,
			this.bottomSheetContainer.clientHeight,
			0
		)

		// Wait for all animations to end
		await Promise.all(moveAnimations.map(a => a.finished))
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
				this.overlay,
				this.bottomSheetContainer.clientHeight,
				0,
				0
			)

			animate = true
			this.bottomSheetContainerStyles.visibility = "visible"
			this.requestUpdate()
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

		// Calculate the opacity
		let overlayOpacity =
			((100 /
				(this.bottomSheetContainer.clientHeight - minBottomSheetPosition)) *
				(this.position - minBottomSheetPosition)) /
			100

		move(
			this.bottomSheetContainer,
			this.overlay,
			this.bottomSheetContainer.clientHeight - this.position,
			overlayOpacity,
			animate ? 200 : 0
		)

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

		if (!this.dismissable && this.position <= minBottomSheetPosition) {
			this.overlayStyles.display = "none"
		} else {
			this.overlayStyles.display = this.position <= 0 ? "none" : "block"
		}

		return html`
			<div class="container">
				<div
					class="overlay"
					style=${styleMap(this.overlayStyles)}
					@click=${this.overlayClick}
				></div>

				<div
					class="bottom-sheet-container"
					style=${styleMap(this.bottomSheetContainerStyles)}
				>
					<div
						class="bottom-sheet-left-overlay"
						style=${styleMap(this.overlayStyles)}
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
						style=${styleMap(this.overlayStyles)}
						@click=${this.overlayClick}
					></div>
				</div>
			</div>
		`
	}
}
