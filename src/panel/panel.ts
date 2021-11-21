import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange
} from '../utils.js'
import { Theme } from '../types.js'
import { globalStyles } from '../styles.js'
import { panelStyles } from './panel.styles.js'
import { slideIn, slideOut } from './panel.animations.js'

export const panelTagName = "dav-panel"

@customElement(panelTagName)
export class Panel extends LitElement {
	static styles = [globalStyles, panelStyles]

	@query("#overlay") overlay: HTMLDivElement
	@query("#content") content: HTMLDivElement

	@state() private contentClasses = {
		"shadow-lg": true,
		darkTheme: false
	}
	@state() private headerClasses = {
		darkTheme: false
	}
	@state() private containerStyles = {
		display: "none"
	}

	@state() private theme: Theme = Theme.light

	@property() header: string = ""
	@property({ type: Boolean }) visible: boolean = false

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
		if (changedProperties.has("visible") && changedProperties.get("visible") != null) {
			let newIsVisible = !changedProperties.get("visible") as boolean
			let animation: Animation

			if (newIsVisible) {
				// Play slide in animation
				animation = slideIn(this.content, this.overlay)
			} else {
				// Play slide out animation
				animation = slideOut(this.content, this.overlay)
			}

			animation.onfinish = () => {
				this.containerStyles.display = newIsVisible ? "block" : "none"
				this.requestUpdate()
			}
		}
	}

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	private closeButtonClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		// Update the UI based on the properties
		this.contentClasses.darkTheme = this.theme == Theme.dark
		this.headerClasses.darkTheme = this.theme == Theme.dark

		if (this.visible) {
			this.containerStyles.display = "block"
		}

		return html`
			${getGlobalStyleHtml()}

			<div
				id="container"
				style=${styleMap(this.containerStyles)}>

				<div
					id="overlay"
					@click=${this.overlayClick}>
				</div>

				<div
					id="content"
					class=${classMap(this.contentClasses)}>

					<button
						id="close-button"
						@click=${this.closeButtonClick}>
						<i class="ms-Icon ms-Icon--Cancel" aria-hidden="true"></i>
					</button>

					<p id="header"
						class=${classMap(this.headerClasses)}>
						${this.header}
					</p>

					<div id="slot-container">
						<slot></slot>
					</div>
				</div>
			</div>
		`
	}
}