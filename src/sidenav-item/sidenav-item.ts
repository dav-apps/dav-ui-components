import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { ifDefined } from "lit/directives/if-defined.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { sidenavItemStyles } from "./sidenav-item.styles.js"
import { chevronDownLightSvg } from "../../assets/svg/chevron-down-light.js"
import { slideIn, slideOut } from "../tree-item/tree-item.animations.js"

export const sidenavItemTagName = "dav-sidenav-item"

@customElement(sidenavItemTagName)
export class SidenavItem extends LitElement {
	static styles = [globalStyles, sidenavItemStyles]

	@query(".children-container") private childrenContainer: HTMLDivElement
	@query(".icon-container") private iconContainer: HTMLDivElement

	private animations: Animation[] = []

	@state() sidenavItemClasses = {
		"sidenav-item": true,
		active: false,
		disabled: false,
		node: false
	}

	@property() value: string = ""
	@property({ type: Boolean }) active: boolean = false
	@property({ type: Boolean }) disabled: boolean = false
	@property({ type: Boolean }) node: boolean = false
	@property({ type: Boolean }) open: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		this.animations.forEach(animation => animation.cancel())
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	buttonClick(event: PointerEvent) {
		if (this.disabled) {
			event.stopPropagation()
			return
		}

		this.dispatchEvent(
			new CustomEvent("sidenav-item-select", {
				bubbles: true,
				composed: true
			})
		)
	}

	async updated(changedProperties: Map<string, any>) {
		if (!changedProperties.has("open") && !changedProperties.has("node")) {
			return
		}

		this.animations.forEach(animation => animation.cancel())
		this.animations = []

		if (!this.node) return

		this.childrenContainer.hidden = !this.open
		this.iconContainer.style.transform = this.open
			? "rotate(0)"
			: "rotate(-90deg)"

		if (
			!changedProperties.has("open") ||
			changedProperties.get("open") == null ||
			changedProperties.has("node")
		)
			return

		this.childrenContainer.hidden = false
		const animations = this.open
			? slideIn(this.childrenContainer, this.iconContainer)
			: slideOut(this.childrenContainer, this.iconContainer)
		this.animations = animations

		try {
			await Promise.all(animations.map(animation => animation.finished))
			this.childrenContainer.hidden = !this.open
			animations.forEach(animation => animation.cancel())
		} catch {
			// A new toggle or disconnection can cancel an unfinished animation.
		}
	}

	iconContainerClick(event: Event) {
		event.stopPropagation()
		if (this.node && !this.disabled) this.open = !this.open
	}

	childrenContainerClick(event: Event) {
		event.stopPropagation()
	}

	buttonDblclick(event: Event) {
		event.stopPropagation()
		if (this.node && !this.disabled) this.open = !this.open
	}

	render() {
		this.sidenavItemClasses.active = this.active
		this.sidenavItemClasses.disabled = this.disabled
		this.sidenavItemClasses.node = this.node

		return html`
			<button
				class=${classMap(this.sidenavItemClasses)}
				@click="${this.buttonClick}"
				@dblclick=${this.buttonDblclick}
				aria-expanded=${ifDefined(
					this.node ? String(this.open) : undefined
				)}
			>
				${this.node
					? html`
							<div
								class="icon-container"
								@click=${this.iconContainerClick}
								@dblclick=${this.childrenContainerClick}
							>
								${chevronDownLightSvg}
							</div>
					  `
					: null}
				<span>${this.value}</span>
			</button>
			${this.node
				? html`
						<div
							class="children-container"
							?hidden=${!this.open}
							@click=${this.childrenContainerClick}
							@dblclick=${this.childrenContainerClick}
						>
							<slot></slot>
						</div>
				  `
				: null}
		`
	}
}
