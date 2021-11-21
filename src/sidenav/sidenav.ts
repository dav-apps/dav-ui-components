import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { Theme, SidenavMode } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange,
	convertStringToSidenavMode
} from '../utils.js'
import { globalStyles } from '../styles.js'
import { sidenavStyles } from './sidenav.styles.js'
import { showOverlay, hideOverlay } from './sidenav.animations.js'

export const sidenavTagName = "dav-sidenav"

@customElement(sidenavTagName)
export class Sidenav extends LitElement {
	static styles = [globalStyles, sidenavStyles]

	@query("#overlay") overlay: HTMLDivElement
	@query("#container") container: HTMLDivElement

	@state() private containerClasses = {
		shadow: true,
		over: false,
		darkTheme: false
	}
	@state() private overlayStyles = {
		display: "none"
	}
	@state() private containerStyles = {
		display: "none",
		left: "-300px"
	}

	@state() private theme: Theme = Theme.light
	@state() private initialized: boolean = false

	@property({ type: Boolean }) open: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToSidenavMode(value)
	}) mode: SidenavMode = SidenavMode.side

	connectedCallback() {
		super.connectedCallback()
		subscribeThemeChange(this.themeChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeThemeChange(this.themeChange)
	}

	themeChange = (theme: Theme) => this.theme = theme

	updated(changedProperties: Map<string, any>) {
		if (
			this.mode == SidenavMode.over
			&& changedProperties.has("open")
			&& changedProperties.get("open") != null
		) {
			let newOpen = !changedProperties.get("open") as boolean

			if (newOpen) {
				// Show the overlay
				showOverlay(this.overlay)
			} else {
				// Hide the overlay
				hideOverlay(this.overlay).onfinish = () => {
					this.overlayStyles.display = "none"
					this.requestUpdate()
				}
			}
		}
	}

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		this.containerClasses.over = this.mode == SidenavMode.over
		this.containerClasses.darkTheme = this.theme == Theme.dark
		this.containerStyles.display = this.hidden ? "none" : "block"

		if (this.container != null) {
			if (this.open && this.mode == SidenavMode.over) {
				// Show the container
				this.containerStyles.left = "0"
				this.overlayStyles.display = "block"
			} else {
				if (this.initialized) {
					// Hide the container
					this.containerStyles.left = `-${this.container.clientWidth}px`
				} else {
					this.initialized = true
				}
			}
		}

		return html`
			${getGlobalStyleHtml()}

			<div
				id="overlay"
				style=${styleMap(this.overlayStyles)}
				@click=${this.overlayClick}>
			</div>

			<div
				id="container"
				class=${classMap(this.containerClasses)}
				style=${styleMap(this.containerStyles)}>

				<slot></slot>
			</div>
		`
	}
}