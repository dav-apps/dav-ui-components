import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { contextMenuStyles } from "./context-menu.styles.js"

export const contextMenuTagName = "dav-context-menu"

@customElement(contextMenuTagName)
export class ContextMenu extends LitElement {
	static styles = [globalStyles, contextMenuStyles]

	@state() private containerClasses = {
		"slide-down-in": false,
		visible: false
	}
	@state() private containerStyles = {
		top: "0px",
		left: "0px"
	}

	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Number }) posX: number = 0
	@property({ type: Number }) posY: number = 0

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
		document.addEventListener("click", this.documentClick)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
		document.removeEventListener("click", this.documentClick)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	documentClick = (event: MouseEvent) => {
		if (event.target != this) {
			this.visible = false
		}
	}

	render() {
		this.containerClasses["slide-down-in"] = this.visible
		this.containerClasses.visible = this.visible

		this.containerStyles.top = `${this.posY}px`
		this.containerStyles.left = `${this.posX}px`

		return html`
			<div
				id="container"
				class=${classMap(this.containerClasses)}
				style=${styleMap(this.containerStyles)}
			>
				<slot></slot>
			</div>
		`
	}
}
