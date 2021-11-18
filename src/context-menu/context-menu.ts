import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { Theme } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange
} from '../utils.js'
import { contextMenuStyles } from './context-menu.styles.js'

export const contextMenuTagName = "dav-context-menu"

@customElement(contextMenuTagName)
export class ContextMenu extends LitElement {
	static styles = [contextMenuStyles]

	@state() private containerClasses = {
		"ms-Fabric": true,
		"ms-motion-slideDownIn": true,
		"ms-depth-16": true,
		visible: false,
		darkTheme: false
	}
	@state() private containerStyles = {
		top: "0px",
		left: "0px"
	}

	@state() private theme: Theme = Theme.light

	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Number }) posX: number = 0
	@property({ type: Number }) posY: number = 0

	connectedCallback() {
		super.connectedCallback()
		subscribeThemeChange(this.themeChange)
		document.addEventListener("click", this.documentClick)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeThemeChange(this.themeChange)
		document.removeEventListener("click", this.documentClick)
	}

	themeChange = (theme: Theme) => this.theme = theme

	documentClick = (event: MouseEvent) => {
		if (event.target != this) {
			this.visible = false
		}
	}

	render() {
		this.containerClasses.visible = this.visible
		this.containerClasses.darkTheme = this.theme == Theme.dark

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