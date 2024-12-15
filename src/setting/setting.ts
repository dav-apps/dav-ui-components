import { LitElement, html } from "lit"
import { customElement, state, property } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { settingStyles } from "./setting.styles.js"
import { chevronDownLightSvg } from "../../assets/svg/chevron-down-light.js"

export const settingTagName = "dav-setting"

@customElement(settingTagName)
export class Setting extends LitElement {
	static styles = [globalStyles, settingStyles]

	@state() private expandedContainerStyles = {
		display: "none"
	}
	@state() private chevronSvgContainerStyles = {
		transform: ""
	}
	@state() private open = false

	@property() header: string = ""
	@property({ type: Boolean }) expandable: boolean = false

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

	settingContentContainerClick() {
		this.open = !this.open
	}

	render() {
		if (this.open) {
			this.expandedContainerStyles.display = "block"
			this.chevronSvgContainerStyles.transform = "rotate(180deg)"
		} else {
			this.expandedContainerStyles.display = "none"
			this.chevronSvgContainerStyles.transform = ""
		}

		if (this.expandable) {
			return html`
				<div class="setting-container expandable">
					<button
						class="setting-content-container"
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
