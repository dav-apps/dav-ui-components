import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { circleCheckLightSvg } from "../svg/circle-check-light.js"
import { circleExclamationLightSvg } from "../svg/circle-exclamation-light.js"
import { circleInfoLightSvg } from "../svg/circle-info-light.js"
import { Settings, ThemeColor, MessageBarType } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToThemeColor,
	convertStringToMessageBarType
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { messageBarStyles } from "./message-bar.styles.js"

export const messageBarTagName = "dav-message-bar"

@customElement(messageBarTagName)
export class MessageBar extends LitElement {
	static styles = [globalStyles, messageBarStyles]

	@state() private messageBarClasses = {
		"message-bar": true,
		primary: false,
		secondary: false,
		tertiary: false,
		error: false
	}

	@property({
		type: String,
		converter: (value: string) => convertStringToMessageBarType(value)
	})
	type: MessageBarType = MessageBarType.info
	@property({
		type: String,
		converter: (value: string) => convertStringToThemeColor(value)
	})
	color: ThemeColor = ThemeColor.primary

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

	getIcon() {
		switch (this.type) {
			case MessageBarType.success:
				return html`<div class="svg-container">${circleCheckLightSvg}</div>`
			case MessageBarType.error:
				return html`<div class="svg-container">
					${circleExclamationLightSvg}
				</div>`
			default:
				return html`<div class="svg-container">${circleInfoLightSvg}</div>`
		}
	}

	render() {
		this.messageBarClasses.primary = false
		this.messageBarClasses.secondary = false
		this.messageBarClasses.tertiary = false
		this.messageBarClasses.error = false

		switch (this.color) {
			case ThemeColor.secondary:
				this.messageBarClasses.secondary = true
				break
			case ThemeColor.tertiary:
				this.messageBarClasses.tertiary = true
				break
			case ThemeColor.error:
				this.messageBarClasses.error = true
				break
			default:
				this.messageBarClasses.primary = true
		}

		return html`
			<div
				class=${classMap(this.messageBarClasses)}
				role=${this.type == MessageBarType.error ? "alert" : ""}
			>
				${this.getIcon()}

				<span>
					<slot></slot>
				</span>
			</div>
		`
	}
}
