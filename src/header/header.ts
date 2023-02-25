import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { Theme, HeaderSize, Settings } from "../types.js"
import {
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings,
	convertStringToHeaderSize
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { headerStyles } from "./header.styles.js"
import { arrowLeftLightSvg } from "../svg/arrow-left-light.js"
import { penLightSvg } from "../svg/pen-light.js"

export const headerTagName = "dav-header"

@customElement(headerTagName)
export class Header extends LitElement {
	static styles = [globalStyles, headerStyles]

	@state() private headerClasses = {
		darkTheme: false
	}
	@state() private headerStyles = {
		fontSize: "40px"
	}

	@state() private theme: Theme = getSettings().theme

	@property() header: string = ""
	@property({ type: Boolean }) backButtonVisible: boolean = false
	@property({ type: Boolean }) editButtonVisible: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToHeaderSize(value)
	})
	size: HeaderSize = HeaderSize.normal

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => (this.theme = settings.theme)

	backButtonClick() {
		this.dispatchEvent(new CustomEvent("backButtonClick"))
	}

	editButtonClick() {
		this.dispatchEvent(new CustomEvent("editButtonClick"))
	}

	getBackButton() {
		if (this.backButtonVisible && this.header.length > 0) {
			return html`
				<dav-icon-button id="back-button" @click=${this.backButtonClick}>
					${arrowLeftLightSvg}
				</dav-icon-button>
			`
		}

		return html``
	}

	getEditButton() {
		if (this.editButtonVisible && this.header.length > 0) {
			return html`
				<dav-icon-button id="edit-button" @click=${this.editButtonClick}>
					${penLightSvg}
				</dav-icon-button>
			`
		}

		return html``
	}

	render() {
		this.headerClasses.darkTheme = this.theme == Theme.dark

		switch (this.size) {
			case HeaderSize.large:
				this.headerStyles.fontSize = "40px"
				break
			case HeaderSize.normal:
				this.headerStyles.fontSize = "32px"
				break
			case HeaderSize.small:
				this.headerStyles.fontSize = "28px"
				break
		}

		return html`
			<div id="container">
				${this.getBackButton()}

				<h1
					id="header"
					class=${classMap(this.headerClasses)}
					style=${styleMap(this.headerStyles)}
				>
					${this.header}
				</h1>

				${this.getEditButton()}
			</div>
		`
	}
}
