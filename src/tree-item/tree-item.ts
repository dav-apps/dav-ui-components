import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { globalStyles } from "../styles.js"
import { treeItemStyles } from "./tree-item.styles.js"
import { slideIn, slideOut } from "./tree-item.animations.js"

export const treeItemTagName = "dav-tree-item"

@customElement(treeItemTagName)
export class TreeItem extends LitElement {
	static styles = [globalStyles, treeItemStyles]

	@query(".children-container") childrenContainer: HTMLDivElement

	@state() private childrenContainerStyles = {
		display: "none"
	}

	@property() headline: string = ""
	@property({ type: Boolean }) node: boolean = false
	@property({ type: Boolean }) open: boolean = false

	connectedCallback() {
		super.connectedCallback()

		this.addEventListener("click", (event: Event) => {
			event.stopPropagation()
		})
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
				animations = slideIn(this.childrenContainer)
			} else {
				// Play slide out animation
				animations = slideOut(this.childrenContainer)
			}

			// Wait for all animations to end
			await Promise.all(animations.map(a => a.finished))

			this.childrenContainerStyles.display = newIsOpen ? "block" : "none"
			this.requestUpdate()
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
		}

		return html`
			<button @click=${this.buttonClick}>${this.headline}</button>

			${this.getChildrenContainer()}
		`
	}
}
