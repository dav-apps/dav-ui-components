import { LitElement, html } from "lit"
import { customElement, state, property, query } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { chevronDownLightSvg } from "../../assets/svg/chevron-down-light.js"
import { globalStyles } from "../styles.js"
import { settingStyles } from "./setting.styles.js"
import { slideIn, slideOut } from "./setting.animations.js"

export const settingTagName = "dav-setting"

@customElement(settingTagName)
export class Setting extends LitElement {
	static styles = [globalStyles, settingStyles]

	@query(".expanded-container") expandedContainer: HTMLDivElement
	@query(".chevron-svg-container") chevronSvgContainer: HTMLDivElement

	@state() private settingContainerClasses = {
		"setting-container": true,
		expanded: false
	}
	@state() private expandedContainerStyles = {
		display: "none"
	}
	@state() private chevronSvgContainerStyles = {
		transform: ""
	}

	@property() header: string = ""
	@property({ type: Boolean }) expandable: boolean = false
	@property({ type: Boolean }) open: boolean = false

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

	async updated(changedProperties: Map<string, any>) {
		if (
			changedProperties.has("open") &&
			changedProperties.get("open") != null
		) {
			let newIsOpen = !changedProperties.get("open") as boolean
			let animations: Animation[]

			if (newIsOpen) {
				// Play slide in animation
				animations = slideIn(
					this.expandedContainer,
					this.chevronSvgContainer
				)
			} else {
				// Play slide out animation
				animations = slideOut(
					this.expandedContainer,
					this.chevronSvgContainer
				)
			}

			// Wait for all animations to end
			await Promise.all(animations.map(a => a.finished))

			this.expandedContainerStyles.display = newIsOpen ? "block" : "none"
			this.requestUpdate()
		}
	}

	settingContentContainerClick() {
		this.open = !this.open
	}

	render() {
		this.settingContainerClasses.expanded = this.open

		if (this.open) {
			this.expandedContainerStyles.display = "block"
			this.chevronSvgContainerStyles.transform = "rotate(180deg)"
		}

		if (this.expandable) {
			return html`
				<button
					class=${classMap(this.settingContainerClasses)}
					@click=${this.settingContentContainerClick}
				>
					<p class="setting-header">${this.header}</p>

					<div
						class="chevron-svg-container"
						style=${styleMap(this.chevronSvgContainerStyles)}
					>
						${chevronDownLightSvg}
					</div>
				</button>

				<div
					class="expanded-container"
					style=${styleMap(this.expandedContainerStyles)}
				>
					<slot></slot>
				</div>
			`
		} else {
			return html`
				<div class="setting-container">
					<p class="setting-header">${this.header}</p>

					<div>
						<slot></slot>
					</div>
				</div>
			`
		}
	}
}
