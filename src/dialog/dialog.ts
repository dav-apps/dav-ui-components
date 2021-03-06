import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { ButtonType } from '../types.js'
import {
	getGlobalStyleHtml,
	subscribeThemeChange,
	unsubscribeThemeChange,
	convertStringToButtonType
} from '../utils.js'
import { Theme } from '../types.js'
import { globalStyles } from '../styles.js'
import { dialogStyles } from './dialog.styles.js'

export const dialogTagName = "dav-dialog"

@customElement(dialogTagName)
export class Dialog extends LitElement {
	static styles = [globalStyles, dialogStyles]

	@state() private dialogClasses = {
		shadow: true,
		"ms-motion-slideUpIn": true,
		darkTheme: false
	}
	@state() private headerClasses = {
		darkTheme: false
	}
	@state() private containerStyles = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "fixed",
		top: "0",
		bottom: "0",
		left: "0",
		right: "0",
		zIndex: "100"
	}
	@state() private dialogStyles = {
		maxWidth: "600px"
	}

	@state() private theme: Theme = Theme.light
	@state() private dualScreenLayout: boolean = false

	@property() header: string = ""
	@property() primaryButtonText: string = ""
	@property() defaultButtonText: string = ""
	@property({ type: Boolean }) visible: boolean = false
	@property({ type: Boolean }) loading: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToButtonType(value)
	}) primaryButtonType: ButtonType = ButtonType.accent
	@property({ type: Number }) maxWidth: number = 600

	connectedCallback() {
		super.connectedCallback()
		subscribeThemeChange(this.themeChange)

		let screenSegments: any

		if (window["getWindowSegments"]) {
			screenSegments = window["getWindowSegments"]()
		} else if (window.visualViewport["segments"]) {
			screenSegments = window.visualViewport["segments"]
		}

		if (screenSegments != null) {
			this.dualScreenLayout = screenSegments.length > 1 && screenSegments[0].width == screenSegments[1].width
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeThemeChange(this.themeChange)
	}

	themeChange = (theme: Theme) => this.theme = theme

	private overlayClick() {
		if (!this.loading) {
			this.dispatchEvent(new CustomEvent("dismiss"))
		}
	}

	primaryButtonClick() {
		this.dispatchEvent(new CustomEvent("primaryButtonClick"))
	}

	defaultButtonClick() {
		this.dispatchEvent(new CustomEvent("defaultButtonClick"))
	}

	getProgressRing() {
		if (this.loading) {
			return html`
				<dav-progress-ring
					style="width: 16px; height: 16px; margin: 8px 14px 0px 0px;"
					indeterminate="true">
				</dav-progress-ring>
			`
		} else {
			return html``
		}
	}

	getDefaultButton() {
		if (this.defaultButtonText.length > 0) {
			return html`
				<dav-button
					?disabled=${this.loading}
					@click=${this.defaultButtonClick}>
					${this.defaultButtonText}
				</dav-button>
			`
		} else {
			return html``
		}
	}

	getPrimaryButton() {
		if (this.primaryButtonText.length > 0) {
			return html`
				<dav-button
					style="margin-left: 10px"
					type=${this.primaryButtonType}
					?disabled=${this.loading}
					@click=${this.primaryButtonClick}>
					${this.primaryButtonText}
				</dav-button>
			`
		} else {
			return html``
		}
	}

	render() {
		// Update the UI based on the properties
		this.containerStyles.display = this.visible ? "flex" : "none"
		this.containerStyles.left = this.dualScreenLayout ? "50%" : "0"
		this.dialogStyles.maxWidth = `${this.maxWidth}px`

		this.dialogClasses.darkTheme = this.theme == Theme.dark
		this.headerClasses.darkTheme = this.theme == Theme.dark

		return html`
			${getGlobalStyleHtml()}

			<div style=${styleMap(this.containerStyles)}>
				<div
					id="overlay"
					@click=${this.overlayClick}>
				</div>

				<div
					id="dialog"
					class=${classMap(this.dialogClasses)}
					style=${styleMap(this.dialogStyles)}
					role="dialog"
					aria-modal="true"
					aria-live="assertive"
					aria-labelledby="header">

					<h4
						id="header"
						class=${classMap(this.headerClasses)}>
						${this.header}
					</h4>

					<slot></slot>

					<div
						class="d-flex"
						style="float: right">

						${this.getProgressRing()}

						${this.getDefaultButton()}

						${this.getPrimaryButton()}
					</div>
				</div>
			</div>
		`
	}
}