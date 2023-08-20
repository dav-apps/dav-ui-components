import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { Alignment, HeaderSize, Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToAlignment,
	convertStringToHeaderSize
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { headerStyles } from "./header.styles.js"
import { arrowLeftLightSvg } from "../svg/arrow-left-light.js"
import { penLightSvg } from "../svg/pen-light.js"
import { plusLightSvg } from "../svg/plus-light.js"

export const headerTagName = "dav-header"

@customElement(headerTagName)
export class Header extends LitElement {
	static styles = [globalStyles, headerStyles]

	@state() private containerClasses = {
		container: true,
		start: false,
		end: false
	}
	@state() private headerStyles = {
		fontSize: "40px"
	}

	@property({
		type: String,
		converter: (value: string) => convertStringToAlignment(value)
	})
	alignment: Alignment = Alignment.center
	@property({ type: Boolean }) backButtonVisible: boolean = false
	@property({ type: Boolean }) addButtonVisible: boolean = false
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

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	backButtonClick() {
		this.dispatchEvent(new CustomEvent("backButtonClick"))
	}

	addButtonClick() {
		this.dispatchEvent(new CustomEvent("addButtonClick"))
	}

	editButtonClick() {
		this.dispatchEvent(new CustomEvent("editButtonClick"))
	}

	getBackButton() {
		if (this.backButtonVisible) {
			return html`
				<dav-icon-button
					class="back-button"
					size="small"
					@click=${this.backButtonClick}
				>
					${arrowLeftLightSvg}
				</dav-icon-button>
			`
		}
	}

	getAddButton() {
		if (this.addButtonVisible) {
			return html`
				<dav-icon-button
					class="add-button"
					size="small"
					@click=${this.addButtonClick}
				>
					${plusLightSvg}
				</dav-icon-button>
			`
		}
	}

	getEditButton() {
		if (this.editButtonVisible) {
			return html`
				<dav-icon-button
					class="edit-button"
					size="small"
					@click=${this.editButtonClick}
				>
					${penLightSvg}
				</dav-icon-button>
			`
		}
	}

	render() {
		switch (this.alignment) {
			case Alignment.start:
				this.containerClasses.start = true
				this.containerClasses.end = false
				break
			case Alignment.end:
				this.containerClasses.start = false
				this.containerClasses.end = true
				break
			default:
				this.containerClasses.start = false
				this.containerClasses.end = false
				break
		}

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
			<div class=${classMap(this.containerClasses)}>
				${this.getBackButton()}

				<h1 class="header" style=${styleMap(this.headerStyles)}>
					<slot></slot>
				</h1>

				<div class="right-button-container">
					${this.getAddButton()} ${this.getEditButton()}
				</div>
			</div>
		`
	}
}
