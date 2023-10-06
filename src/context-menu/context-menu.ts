import { LitElement, html } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { contextMenuStyles } from "./context-menu.styles.js"
import { slideIn, slideOut } from "./context-menu.animations.js"

export const contextMenuTagName = "dav-context-menu"

@customElement(contextMenuTagName)
export class ContextMenu extends LitElement {
	static styles = [globalStyles, contextMenuStyles]

	@query(".container") container: HTMLDivElement

	@state() private containerStyles = {
		display: "none",
		top: "0px",
		left: "0px"
	}

	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Number }) posX: number = 0
	@property({ type: Number }) posY: number = 0

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

	updated(changedProperties: Map<string, any>) {
		if (
			changedProperties.has("visible") &&
			changedProperties.get("visible") != null
		) {
			let newIsVisible = !changedProperties.get("visible") as boolean
			let animation: Animation

			if (newIsVisible) {
				// Play slide in animation
				animation = slideIn(this.container)
			} else {
				// Play slide out animation
				animation = slideOut(this.container)
			}

			animation.onfinish = () => {
				this.containerStyles.display = newIsVisible
					? "inline-block"
					: "none"
				this.requestUpdate()
			}
		}
	}

	render() {
		if (this.visible) {
			this.containerStyles.display = "inline-block"
		}

		this.containerStyles.top = `${this.posY}px`
		this.containerStyles.left = `${this.posX}px`

		return html`
			<div class="container" style=${styleMap(this.containerStyles)}>
				<slot></slot>
			</div>
		`
	}
}
