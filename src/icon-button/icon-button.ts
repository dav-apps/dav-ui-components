import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { classMap } from "lit/directives/class-map.js"
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

	@query(".icon-button") button: HTMLElement

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

	// overlay appended to document.body so the tooltip can appear over the whole page
	private overlay: HTMLDivElement | null = null
	private tooltipEl: HTMLDivElement | null = null

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

		// create overlay in the document body so the tooltip isn't clipped by parent stacking contexts
		this.createTooltipOverlay()
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)

		// cleanup tooltip timer if present
		this.clearTooltipTimer()

		// remove overlay from document.body
		this.removeTooltipOverlay()
	}

	protected updated(changedProps: Map<string, any>) {
		if ((changedProps as any).has("tooltip") && this.tooltipEl) {
			const p = this.tooltipEl.querySelector("p")
			if (p) p.textContent = this.tooltip || ""
		}
	}

	private settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
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

	private startTooltipTimer() {
		if (this.disabled || !this.tooltip) return

		this.clearTooltipTimer()

		this.tooltipTimer = window.setTimeout(() => {
			// Calculate the position of the tooltip relative to the viewport
			const rect = this.button.getBoundingClientRect()

			const tooltipPositionX = rect.left + rect.width / 2
			const tooltipPositionY = rect.top

			// ensure overlay and tooltip element exist
			if (!this.overlay || !this.tooltipEl) {
				this.createTooltipOverlay()
			}

			if (this.tooltipEl && this.overlay) {
				// set position centered above the element with a small gap
				this.tooltipEl.style.left = `${tooltipPositionX}px`
				this.tooltipEl.style.top = `${tooltipPositionY}px`
				this.tooltipEl.style.transform =
					"translate(-50%, calc(-100% - 8px))"
				this.overlay.style.opacity = "1"
				this.overlay.style.visibility = "visible"
				this.tooltipVisible = true
			}
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

		if (this.overlay) {
			this.overlay.style.opacity = "0"
			this.overlay.style.visibility = "hidden"
		}
	}

	// create an overlay appended to document.body that hosts the tooltip element
	private createTooltipOverlay() {
		if (typeof document === "undefined" || this.overlay) return

		const overlay = document.createElement("div")
		// base styles similar to the ones in the component CSS but applied to the body-level overlay
		overlay.style.position = "fixed"
		overlay.style.top = "0"
		overlay.style.left = "0"
		overlay.style.right = "0"
		overlay.style.bottom = "0"
		overlay.style.pointerEvents = "none"
		overlay.style.backgroundColor = "transparent"
		overlay.style.zIndex = "100"
		overlay.style.opacity = "0"
		overlay.style.visibility = "hidden"
		overlay.style.transition =
			"opacity 160ms ease-in-out, visibility 160ms ease-in-out"

		// tooltip element
		const tooltip = document.createElement("div")
		tooltip.style.position = "absolute"
		tooltip.style.transform = "translateX(-50%)"
		tooltip.style.background =
			this.getHostElementComputedStyle()?.getPropertyValue(
				"--dav-color-inverse-surface"
			) ?? "#303034"
		tooltip.style.color =
			this.getHostElementComputedStyle()?.getPropertyValue(
				"--dav-color-inverse-on-surface"
			) ?? "#f2f0f4"
		tooltip.style.padding = "6px 10px"
		tooltip.style.borderRadius = "4px"
		tooltip.style.whiteSpace = "nowrap"
		tooltip.style.pointerEvents = "none"

		const p = document.createElement("p")
		p.style.margin = "0"
		p.style.fontSize = "12px"
		p.textContent = this.tooltip || ""

		tooltip.appendChild(p)
		overlay.appendChild(tooltip)

		document.body.appendChild(overlay)

		this.overlay = overlay
		this.tooltipEl = tooltip
	}

	private getHostElementComputedStyle(): CSSStyleDeclaration | null {
		if (!this.shadowRoot || !this.shadowRoot.host) return null
		return getComputedStyle(this.shadowRoot.host)
	}

	private removeTooltipOverlay() {
		if (this.overlay && this.overlay.parentElement) {
			this.overlay.parentElement.removeChild(this.overlay)
		}

		this.overlay = null
		this.tooltipEl = null
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
		`
	}
}
