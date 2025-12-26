import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { filterButtonStyles } from "./filter-button.styles.js"

export const filterButtonTagName = "dav-filter-button"

@customElement(filterButtonTagName)
export class FilterButton extends LitElement {
	static styles = [globalStyles, filterButtonStyles]

	@state() private filterButtonClasses = {
		"filter-button": true,
		selected: false
	}

	connectedCallback(): void {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback(): void {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	render() {
		return html`
			<button class=${classMap(this.filterButtonClasses)}>
				<slot></slot>
			</button>
		`
	}
}
