import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { filterGroupStyles } from "./filter-group.styles.js"
import { FilterButton } from "../filter-button/filter-button.js"

export const filterGroupTagName = "dav-filter-group"

@customElement(filterGroupTagName)
export class FilterGroup extends LitElement {
	static styles = [globalStyles, filterGroupStyles]

	private filterButtons: FilterButton[] = []
	private selectedFilterButtonIndex: number = 0

	@state() private activeIndicatorStyles = {
		transform: "translateX(0)"
	}

	connectedCallback(): void {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
		this.updateFilterButtons()
	}

	disconnectedCallback(): void {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	updateFilterButtons() {
		this.filterButtons = []
		const filterButtons = this.querySelectorAll("dav-filter-button")

		for (const filterButton of filterButtons) {
			filterButton.removeEventListener("click", this.onFilterButtonClick)
			filterButton.addEventListener("click", this.onFilterButtonClick)
			this.filterButtons.push(filterButton)
		}

		this.selectFilterButton()
	}

	onFilterButtonClick = (event: Event) => {
		const filterButton = event.currentTarget as FilterButton
		this.selectedFilterButtonIndex = this.filterButtons.findIndex(
			fb => fb === filterButton
		)

		if (this.selectedFilterButtonIndex === -1) return

		this.selectFilterButton()
		this.requestUpdate()
	}

	selectFilterButton() {
		for (let i = 0; i < this.filterButtons.length; i++) {
			this.filterButtons[i].selected = i === this.selectedFilterButtonIndex
		}
	}

	render() {
		this.activeIndicatorStyles.transform = `translateX(${this
			.selectedFilterButtonIndex * 34}px)`

		return html`
			<div class="filter-group-container">
				<div
					class="active-indicator"
					style=${styleMap(this.activeIndicatorStyles)}
				></div>

				<slot></slot>
			</div>
		`
	}
}
