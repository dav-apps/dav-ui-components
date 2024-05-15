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
import { arrowLeftLightSvg } from "../../assets/svg/arrow-left-light.js"
import { penLightSvg } from "../../assets/svg/pen-light.js"
import { plusLightSvg } from "../../assets/svg/plus-light.js"
import { globalStyles } from "../styles.js"
import { headerStyles } from "./header.styles.js"

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
	size: HeaderSize = HeaderSize.md

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
					size="sm"
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
					size="sm"
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
					size="sm"
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
			case HeaderSize.lg:
				this.headerStyles.fontSize = "40px"
				break
			case HeaderSize.md:
				this.headerStyles.fontSize = "32px"
				break
			case HeaderSize.sm:
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
