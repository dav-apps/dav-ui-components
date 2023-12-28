import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { searchStyles } from "./search.styles.js"

export const searchTagName = "dav-search"

@customElement(searchTagName)
export class Search extends LitElement {
	static styles = [globalStyles, searchStyles]

	@state() private containerStyles = {
		display: "none",
		position: "fixed",
		top: "0",
		bottom: "0",
		left: "0",
		right: "0",
		zIndex: "100"
	}

	@property({ type: Boolean }) visible: boolean = false
	@property() placeholder: string = ""

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

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		if (this.visible) {
			this.containerStyles.display = "block"
		} else {
			this.containerStyles.display = "none"
		}

		return html`
			<div style=${styleMap(this.containerStyles)}>
				<div class="overlay" @click=${this.overlayClick}></div>

				<div class="content-container">
					<input
						class="search-input"
						type="search"
						placeholder=${this.placeholder}
					/>
				</div>
			</div>
		`
	}
}
