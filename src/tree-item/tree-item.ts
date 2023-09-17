import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { chevronDownLightSvg } from "../svg/chevron-down-light.js"
import { globalStyles } from "../styles.js"
import { treeItemStyles } from "./tree-item.styles.js"
import { slideIn, slideOut } from "./tree-item.animations.js"

export const treeItemTagName = "dav-tree-item"

@customElement(treeItemTagName)
export class TreeItem extends LitElement {
	static styles = [globalStyles, treeItemStyles]

	@query(".children-container") childrenContainer: HTMLDivElement
	@query(".icon-container") iconContainer: HTMLDivElement

	@state() private childrenContainerStyles = {
		display: "none"
	}
	@state() private iconContainerStyles = {
		transform: "rotate(-90deg)"
	}

	@property() headline: string = ""
	@property({ type: Boolean }) node: boolean = false
	@property({ type: Boolean }) open: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)

		this.addEventListener("click", (event: Event) => {
			event.stopPropagation()
		})
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	async updated(changedProperties: Map<string, any>) {
		if (
			changedProperties.has("open") &&
			changedProperties.get("open") != null
		) {
			let newIsOpen = !changedProperties.get("open") as boolean
			let animations: Animation[]

			if (newIsOpen) {
				// Play slide in animation
				animations = slideIn(this.childrenContainer, this.iconContainer)
			} else {
				// Play slide out animation
				animations = slideOut(this.childrenContainer, this.iconContainer)
			}

			// Wait for all animations to end
			await Promise.all(animations.map(a => a.finished))

			this.childrenContainerStyles.display = newIsOpen ? "block" : "none"
			this.requestUpdate()
		}
	}

	getIconContainer() {
		if (this.node) {
			return html`
				<div
					class="icon-container"
					style=${styleMap(this.iconContainerStyles)}
				>
					${chevronDownLightSvg}
				</div>
			`
		}
	}

	getChildrenContainer() {
		if (this.node) {
			return html`
				<div
					class="children-container"
					style=${styleMap(this.childrenContainerStyles)}
				>
					<dav-tree>
						<slot></slot>
					</dav-tree>
				</div>
			`
		}
	}

	buttonClick() {
		if (this.node) {
			this.open = !this.open
		}
	}

	render() {
		if (this.open) {
			this.childrenContainerStyles.display = "block"
			this.iconContainerStyles.transform = "rotate(0)"
		}

		return html`
			<button class="container" @click=${this.buttonClick}>
				${this.getIconContainer()} ${this.headline}
			</button>

			${this.getChildrenContainer()}
		`
	}
}
