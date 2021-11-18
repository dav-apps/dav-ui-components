import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { SidenavMode } from '../types.js'
import { getGlobalStyleHtml, convertStringToSidenavMode } from '../utils.js'
import { sidenavStyles } from './sidenav.styles.js'

export const sidenavTagName = "dav-sidenav"

@customElement(sidenavTagName)
export class Sidenav extends LitElement {
	static styles = [sidenavStyles]

	@query("#container") container: HTMLDivElement

	@state() private containerClasses = {
		shadow: true,
		over: false
	}
	@state() private containerStyles = {
		display: "none",
		left: "-300px"
	}

	@state() private initialized: boolean = false

	@property({ type: Boolean }) open: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToSidenavMode(value)
	}) mode: SidenavMode = SidenavMode.side

	render() {
		this.containerClasses.over = this.mode == SidenavMode.over
		this.containerStyles.display = this.hidden ? "none" : "block"

		if (this.container != null) {
			if (this.open && this.mode == SidenavMode.over) {
				this.containerStyles.left = "0"
			} else {
				if (this.initialized) {
					this.containerStyles.left = `-${this.container.clientWidth}px`
				} else {
					this.initialized = true
				}
			}
		}

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