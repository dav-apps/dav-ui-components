import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { getGlobalStyleHtml } from '../utils.js'
import { contextMenuStyles } from './context-menu.styles.js'

export const contextMenuTagName = "dav-context-menu"

@customElement(contextMenuTagName)
export class ContextMenu extends LitElement {
	static styles = [contextMenuStyles]

	@state() private containerClasses = {
		"ms-Fabric": true,
		"ms-motion-slideDownIn": true,
		"ms-depth-16": true,
		visible: false
	}

	@state() private containerStyles = {
		top: "0px",
		left: "0px"
	}

	@property({ type: Boolean }) isVisible: boolean = false
	@property({ type: Number }) posX: number = 0
	@property({ type: Number }) posY: number = 0

	connectedCallback() {
		super.connectedCallback()
		document.addEventListener("click", this.documentClick)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		document.removeEventListener("click", this.documentClick)
	}

	documentClick = (event: MouseEvent) => {
		if (event.target != this) {
			this.isVisible = false
		}
	}

	render() {
		this.containerClasses.visible = this.isVisible

		this.containerStyles.top = `${this.posX}px`
		this.containerStyles.left = `${this.posY}px`

		return html`
			${getGlobalStyleHtml()}

			<div
				id="container"
				class=${classMap(this.containerClasses)}
				style=${styleMap(this.containerStyles)}>
				<slot></slot>
			</div>
		`
	}
}