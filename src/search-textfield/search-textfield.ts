import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { searchTextfieldStyles } from "./search-textfield.styles.js"

export const searchTextfieldTagName = "dav-search-textfield"

@customElement(searchTextfieldTagName)
export class SearchTextfield extends LitElement {
	static styles = [globalStyles, searchTextfieldStyles]

	@state() private showSearchResults: boolean = false

	@state() private searchResultsContainerClasses = {
		"search-results-container": true,
		"slide-down-in": false,
		visible: false
	}

	@property() value: string = ""
	@property() label: string = ""
	@property({ type: Array }) searchResults: string[] = []

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
		document.addEventListener("click", this.documentClick)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
		document.removeEventListener("click", this.documentClick)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	documentClick = (event: MouseEvent) => {
		if (event.target != this) {
			this.showSearchResults = false
		}
	}

	onTextfieldChange(event: CustomEvent) {
		const value = event.detail.value as string

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { value }
			})
		)

		if (this.searchResults.length > 0) {
			this.showSearchResults = true
		}
	}

	onTextfieldFocus() {
		if (this.searchResults.length > 0) {
			this.showSearchResults = true
		}
	}

	onSearchResultItemClick(result: string) {
		this.dispatchEvent(
			new CustomEvent("select", {
				detail: { result }
			})
		)
	}

	render() {
		this.searchResultsContainerClasses.visible =
			this.showSearchResults && this.searchResults.length > 0
		this.searchResultsContainerClasses["slide-down-in"] =
			this.showSearchResults && this.searchResults.length > 0

		return html`
			<div class="container">
				<dav-textfield
					.label=${this.label}
					.value=${this.value}
					@change=${this.onTextfieldChange}
					@focus=${this.onTextfieldFocus}
					@escape=${() => (this.showSearchResults = false)}
				></dav-textfield>

				<div class=${classMap(this.searchResultsContainerClasses)}>
					${this.searchResults.map(
						result =>
							html`
								<button
									class="search-result-item"
									@click=${() => this.onSearchResultItemClick(result)}
								>
									${result}
								</button>
							`
					)}
				</div>
			</div>
		`
	}
}
