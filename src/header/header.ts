import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { Alignment, HeaderSize, Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings,
	convertStringToAlignment,
	convertStringToHeaderSize
} from "../utils.js"
import { arrowLeftLightSvg } from "../../assets/svg/arrow-left-light.js"
import { penLightSvg } from "../../assets/svg/pen-light.js"
import { plusLightSvg } from "../../assets/svg/plus-light.js"
import { trashLightSvg } from "../../assets/svg/trash-light.js"
import { globalStyles } from "../styles.js"
import { headerStyles } from "./header.styles.js"

export const headerTagName = "dav-header"

@customElement(headerTagName)
export class Header extends LitElement {
	static styles = [globalStyles, headerStyles]

	@query(".add-button") addButton: HTMLButtonElement

	@state() private locale = getSettings().locale.header

	@state()
	private containerClasses = {
		container: true,
		start: false,
		end: false
	}

	@state() private headerStyles = {
		fontSize: "40px"
	}
	@state() private skeletonStyles = {
		height: "34px",
		width: "200px"
	}

	@property({
		type: String,
		converter: (value: string) => convertStringToAlignment(value)
	})
	alignment: Alignment = Alignment.center
	@property({ type: Boolean }) backButtonVisible: boolean = false
	@property({ type: Boolean }) addButtonVisible: boolean = false
	@property({ type: Boolean }) editButtonVisible: boolean = false
	@property({ type: Boolean }) deleteButtonVisible: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToHeaderSize(value)
	})
	size: HeaderSize = HeaderSize.md
	@property({ type: Boolean }) loading: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		this.locale = settings.locale.header
		setThemeColorVariables(this.style, settings.theme)
	}

	backButtonClick(event: CustomEvent) {
		this.dispatchEvent(
			new CustomEvent("backButtonClick", {
				detail: event.detail
			})
		)
	}

	addButtonClick(event: CustomEvent) {
		this.dispatchEvent(
			new CustomEvent("addButtonClick", {
				detail: event.detail
			})
		)
	}

	editButtonClick(event: CustomEvent) {
		this.dispatchEvent(
			new CustomEvent("editButtonClick", {
				detail: event.detail
			})
		)
	}

	deleteButtonClick(event: CustomEvent) {
		this.dispatchEvent(
			new CustomEvent("deleteButtonClick", {
				detail: event.detail
			})
		)
	}

	getBackButton() {
		if (this.backButtonVisible) {
			return html`
				<dav-icon-button
					class="back-button"
					size="sm"
					tooltip=${this.locale.back}
					?loading=${this.loading}
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
					tooltip=${this.locale.add}
					?loading=${this.loading}
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
					tooltip=${this.locale.edit}
					?loading=${this.loading}
					@click=${this.editButtonClick}
				>
					${penLightSvg}
				</dav-icon-button>
			`
		}
	}

	getDeleteButton() {
		if (this.deleteButtonVisible) {
			return html`
				<dav-icon-button
					class="delete-button"
					size="sm"
					tooltip=${this.locale.delete}
					?loading=${this.loading}
					@click=${this.deleteButtonClick}
				>
					${trashLightSvg}
				</dav-icon-button>
			`
		}
	}

	getHeader() {
		if (this.loading) {
			return html`
				<dav-skeleton style=${styleMap(this.skeletonStyles)}></dav-skeleton>
			`
		}

		return html`
			<h1 class="header" style=${styleMap(this.headerStyles)}>
				<slot></slot>
			</h1>
		`
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
				this.skeletonStyles.height = "49px"
				this.skeletonStyles.width = "300px"
				break
			case HeaderSize.md:
				this.headerStyles.fontSize = "32px"
				this.skeletonStyles.height = "39px"
				this.skeletonStyles.width = "250px"
				break
			case HeaderSize.sm:
				this.headerStyles.fontSize = "28px"
				this.skeletonStyles.height = "34px"
				this.skeletonStyles.width = "200px"
				break
		}

		return html`
			<div class=${classMap(this.containerClasses)}>
				${this.getBackButton()} ${this.getHeader()}

				<div class="right-button-container">
					${this.getAddButton()} ${this.getEditButton()}
					${this.getDeleteButton()}
					<slot name="icons"></slot>
				</div>
			</div>
		`
	}
}
