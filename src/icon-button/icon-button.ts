import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings, ButtonSize, IconButtonShape } from "../types.js"
import {
	getPositionOfElement,
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToButtonSize,
	convertStringToIconButtonShape
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { iconButtonStyles } from "./icon-button.styles.js"

export const iconButtonTagName = "dav-icon-button"

@customElement(iconButtonTagName)
export class IconButton extends LitElement {
	static styles = [globalStyles, iconButtonStyles]

	@query(".icon-button") button: HTMLButtonElement

	@state() private iconButtonClasses = {
		"icon-button": true,
		selected: false,
		disabled: false,
		sm: false,
		xs: false,
		square: false
	}
	@state() private tooltipOverlayClasses = {
		"tooltip-overlay": true,
		show: false
	}

	@state() private tooltipStyles = {
		top: "0px",
		left: "0px",
		transform: "translate(-50%, 0)"
	}

	@state() private tooltipVisible: boolean = false
	private tooltipTimer: number | null = null

	@property({ type: Boolean }) selected: boolean = false
	@property({ type: Boolean }) disabled: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToButtonSize(value)
	})
	size: ButtonSize = ButtonSize.md
	@property({
		type: String,
		converter: value => convertStringToIconButtonShape(value)
	})
	shape: IconButtonShape = IconButtonShape.round
	@property({ type: String }) tooltip: string = ""
	@property({ type: String }) href: string = ""
	@property({ type: String }) target: string = ""

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)

		// cleanup tooltip timer if present
		this.clearTooltipTimer()
	}

	private startTooltipTimer() {
		if (this.disabled || !this.tooltip) return

		this.clearTooltipTimer()

		this.tooltipTimer = window.setTimeout(() => {
			// Calculate the position of the tooltip
			const rect = this.button.getBoundingClientRect()

			const tooltipPositionX = rect.left + rect.width / 2
			const tooltipPositionY = rect.top

			this.tooltipStyles.top = `${tooltipPositionY}px`
			this.tooltipStyles.left = `${tooltipPositionX}px`

			// position the tooltip centered above the element with a small gap
			this.tooltipStyles.transform = "translate(-50%, calc(-100% - 8px))"

			this.tooltipVisible = true
		}, 1000)
	}

	private clearTooltipTimer() {
		if (this.tooltipTimer !== null) {
			window.clearTimeout(this.tooltipTimer)
			this.tooltipTimer = null
		}
	}

	private hideTooltip() {
		this.clearTooltipTimer()
		this.tooltipVisible = false
	}

	private handleMouseEnter = () => {
		this.startTooltipTimer()
	}

	private handleMouseLeave = () => {
		this.hideTooltip()
	}

	private handleFocus = () => {
		// show tooltip after delay on focus as well
		this.startTooltipTimer()
	}

	private handleBlur = () => {
		this.hideTooltip()
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	buttonClick(event: PointerEvent) {
		event.stopPropagation()
		if (this.disabled) return

		let pos = getPositionOfElement(this.shadowRoot.host)

		this.dispatchEvent(
			new CustomEvent("click", {
				detail: {
					originalEvent: event,
					contextMenuPosition: {
						x: pos.x,
						y: pos.y + this.button.clientHeight + 4
					}
				}
			})
		)
	}

	render() {
		this.iconButtonClasses.selected = this.selected
		this.iconButtonClasses.disabled = this.disabled
		this.iconButtonClasses.sm = this.size == ButtonSize.sm
		this.iconButtonClasses.xs = this.size == ButtonSize.xs
		this.iconButtonClasses.square = this.shape == IconButtonShape.square
		this.tooltipOverlayClasses.show = this.tooltipVisible

		if (this.href.length > 0 && !this.disabled) {
			return html`
				<a
					class=${classMap(this.iconButtonClasses)}
					href=${this.href}
					target=${this.target}
					@mouseenter=${this.handleMouseEnter}
					@mouseleave=${this.handleMouseLeave}
					@focus=${this.handleFocus}
					@blur=${this.handleBlur}
				>
					<slot></slot>
				</a>
			`
		}

		return html`
			<button
				class=${classMap(this.iconButtonClasses)}
				?aria-disabled=${this.disabled}
				@click="${this.buttonClick}"
				@mouseenter=${this.handleMouseEnter}
				@mouseleave=${this.handleMouseLeave}
				@focus=${this.handleFocus}
				@blur=${this.handleBlur}
			>
				<slot></slot>
			</button>

			<div class=${classMap(this.tooltipOverlayClasses)}>
				<div class="tooltip" style=${styleMap(this.tooltipStyles)}>
					<p>${this.tooltip}</p>
				</div>
			</div>
		`
	}
}
