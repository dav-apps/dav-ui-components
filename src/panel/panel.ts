import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { query } from 'lit/decorators/query.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import {
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from '../utils.js'
import { Settings, Theme } from '../types.js'
import { xmarkLightSvg } from '../svg/xmark-light.js'
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
		"shadow-lg modern-vertical-scrollbar": true,
		darkTheme: false
	}
	@state() private closeButtonClasses = {
		darkTheme: false
	}
	@state() private headerClasses = {
		darkTheme: false
	}
	@state() private containerStyles = {
		display: "none"
	}

	@state() private theme: Theme = getSettings().theme

	@property() header: string = ""
	@property({ type: Boolean }) visible: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => this.theme = settings.theme

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
		this.closeButtonClasses.darkTheme = this.theme == Theme.dark
		this.headerClasses.darkTheme = this.theme == Theme.dark

		if (this.visible) {
			this.containerStyles.display = "block"
		}

		return html`
			<div
				id="container"
				style=${styleMap(this.containerStyles)}
			>
				<div
					id="overlay"
					@click=${this.overlayClick}>
				</div>

				<div
					id="content"
					class=${classMap(this.contentClasses)}
				>
					<div id="header-container">
						<h1 id="header" class=${classMap(this.headerClasses)}>
							${this.header}
						</h1>

						<dav-icon-button
							id="close-button"
							class=${classMap(this.closeButtonClasses)}
							@click=${this.closeButtonClick}
						>
							${xmarkLightSvg}
						</dav-icon-button>
					</div>

					<div id="slot-container">
						<slot></slot>
					</div>
				</div>
			</div>
		`
	}
}