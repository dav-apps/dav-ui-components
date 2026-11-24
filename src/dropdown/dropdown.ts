import { LitElement, html, isServer } from "lit"
import { customElement, property, state, query } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { StyleInfo, styleMap } from "lit/directives/style-map.js"
import {
	DropdownOption,
	DropdownOptionType,
	DropdownPosition,
	Settings
} from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings,
	convertStringToDropdownPosition
} from "../utils.js"
import { chevronDownLightSvg } from "../../assets/svg/chevron-down-light.js"
import { globalStyles } from "../styles.js"
import { dropdownStyles } from "./dropdown.styles.js"

export const dropdownTagName = "dav-dropdown"
// In the top layer the list is not clipped by a card, dialog or other overflow
const supportsPopover =
	!isServer && typeof HTMLElement.prototype.showPopover === "function"

@customElement(dropdownTagName)
export class Dropdown extends LitElement {
	static styles = [globalStyles, dropdownStyles]

	@query(".dropdown-button") private dropdownButton: HTMLButtonElement
	@query(".dropdown-content") private dropdownContent: HTMLDivElement

	@state() private locale = getSettings().locale.dropdown
	@state() private showItems: boolean = false

	@state() private dropdownLabelClasses = {
		"dropdown-label": true,
		disabled: false
	}
	@state() private dropdownButtonClasses = {
		"dropdown-button": true,
		disabled: false,
		active: false
	}
	@state() private chevronSvgContainerClasses = {
		"chevron-svg-container": true,
		top: false
	}
	@state() private dropdownOptionClasses = {
		"dropdown-option": true,
		selected: false
	}
	@state() private dropdownDividerClasses = {
		"dropdown-divider": true
	}
	@state() private dropdownContentClasses = {
		"dropdown-content": true,
		"slide-down-in": false,
		"slide-up-in": false,
		top: false,
		visible: false
	}
	@state() private dropdownButtonStyles: StyleInfo = {
		width: "160px",
		"justify-content": null
	}
	@state() private chevronSvgContainerStyles = {
		display: "block"
	}
	@state() private dropdownContentStyles: StyleInfo = {
		width: "160px",
		"max-height": null
	}

	@property() label: string = ""
	@property({ type: Array }) options: DropdownOption[] = []
	@property() selectedKey: string = ""
	@property({
		type: String,
		converter: (value: string) => convertStringToDropdownPosition(value)
	})
	position: DropdownPosition = DropdownPosition.bottom
	@property({ type: Number }) width: number = 160
	@property({ type: Boolean, reflect: true }) fullWidth: boolean = false
	@property({ type: Number }) maxListHeight: number = 0
	@property({ type: Boolean }) disabled: boolean = false
	@property({ type: Boolean }) compact: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
		if (!isServer) document.addEventListener("click", this.documentClick)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
		if (!isServer) document.removeEventListener("click", this.documentClick)
		this.followButton(false)
	}

	// Set here and not in the template, a server rendered list hydrates without it
	firstUpdated() {
		if (supportsPopover)
			this.dropdownContent.setAttribute("popover", "manual")
	}

	updated(changedProperties: Map<string, any>) {
		if (!supportsPopover || !changedProperties.has("showItems")) return

		if (this.showItems) {
			this.dropdownContent.showPopover()
			this.positionList()
		} else if (this.dropdownContent.matches(":popover-open")) {
			this.dropdownContent.hidePopover()
		}

		this.followButton(this.showItems)
	}

	private followButton(follow: boolean) {
		if (isServer) return

		if (follow) {
			window.addEventListener("scroll", this.positionList, true)
			window.addEventListener("resize", this.positionList)
		} else {
			window.removeEventListener("scroll", this.positionList, true)
			window.removeEventListener("resize", this.positionList)
		}
	}

	// The list sits fixed at the button, above it for position top
	private positionList = () => {
		const rect = this.dropdownButton.getBoundingClientRect()
		const style = this.dropdownContent.style
		style.left = `${rect.left}px`
		style.width = `${rect.width}px`

		if (this.position == DropdownPosition.top) {
			style.top = "auto"
			style.bottom = `${window.innerHeight - rect.top}px`
		} else {
			style.top = `${rect.bottom}px`
			style.bottom = "auto"
		}
	}

	settingsChange = (settings: Settings) => {
		this.locale = settings.locale.dropdown
		setThemeColorVariables(this.style, settings.theme)
	}

	documentClick = (event: MouseEvent) => {
		if (event.target != this) {
			this.showItems = false
		}
	}

	dropdownButtonClick() {
		if (!this.disabled) {
			this.showItems = !this.showItems
		}
	}

	dropdownOptionClick(event: PointerEvent) {
		let key = (event.target as Element).getAttribute("key")
		if (key == null) return

		this.selectedKey = key
		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { key }
			})
		)

		this.showItems = false
	}

	isCompact(): boolean {
		return (
			this.compact &&
			this.options.every(
				option => option.type == "divider" || option.type == "color"
			)
		)
	}

	getLabel() {
		if (this.label.length > 0) {
			return html`
				<label
					class=${classMap(this.dropdownLabelClasses)}
					for="dropdown-button"
				>
					${this.label}
				</label>
			`
		}
	}

	getDropdownOption(option: DropdownOption, selected: boolean) {
		if (option.type == DropdownOptionType.divider) {
			return html`
				<div class=${classMap(this.dropdownDividerClasses)}>
					<hr />
				</div>
			`
		} else if (option.type == DropdownOptionType.color) {
			let classes = {
				...this.dropdownOptionClasses,
				selected: selected
			}

			let styles = {
				backgroundColor: option.value
			}

			return html`
				<button
					class=${classMap(classes)}
					key=${option.key}
					@click=${this.dropdownOptionClick}
				>
					<div
						class="dropdown-color"
						style=${styleMap(styles)}
						key=${option.key}
					></div>
				</button>
			`
		} else {
			let classes = {
				...this.dropdownOptionClasses,
				selected: selected
			}

			return html`
				<button
					class=${classMap(classes)}
					key=${option.key}
					@click=${this.dropdownOptionClick}
				>
					${option.value}
				</button>
			`
		}
	}

	getButtonContent() {
		// Get the selected item to set the button content
		let i = this.options.findIndex(option => option.key == this.selectedKey)

		if (i == -1) {
			return html`
				<span>${this.locale.defaultDropdownButtonText}</span>
			`
		} else if (this.options[i].type == "color") {
			let styles = {
				backgroundColor: this.options[i].value
			}

			return html`
				<div class="dropdown-color" style=${styleMap(styles)}></div>
			`
		} else {
			return html`
				<span>${this.options[i].value}</span>
			`
		}
	}

	render() {
		this.dropdownLabelClasses.disabled = this.disabled
		this.dropdownButtonClasses.disabled = this.disabled
		this.dropdownButtonClasses.active = this.showItems
		this.dropdownContentClasses["slide-down-in"] =
			this.position == DropdownPosition.bottom && this.showItems
		this.dropdownContentClasses["slide-up-in"] =
			this.position == DropdownPosition.top && this.showItems
		this.dropdownContentClasses.visible = this.showItems
		this.dropdownContentClasses.top = this.position == DropdownPosition.top
		this.chevronSvgContainerClasses.top =
			this.position == DropdownPosition.top

		if (this.isCompact()) {
			this.dropdownButtonStyles.width = "50px"
			this.dropdownContentStyles.width = supportsPopover ? null : "50px"
			this.dropdownButtonStyles["justify-content"] = "center"
			this.chevronSvgContainerStyles.display = "none"
		} else {
			const width = this.fullWidth ? "100%" : `${this.width}px`
			this.dropdownButtonStyles.width = width
			this.dropdownContentStyles.width = supportsPopover ? null : width
			this.dropdownButtonStyles["justify-content"] = null
			this.chevronSvgContainerStyles.display = "block"
		}

		this.dropdownContentStyles["max-height"] =
			this.maxListHeight > 0 ? `${this.maxListHeight}px` : null

		return html`
			<div class="dropdown">
				${this.getLabel()}

				<div>
					<button
						class=${classMap(this.dropdownButtonClasses)}
						style=${styleMap(this.dropdownButtonStyles)}
						name="dropdown-button"
						?aria-disabled=${this.disabled}
						@click=${this.dropdownButtonClick}
					>
						${this.getButtonContent()}

						<div
							class=${classMap(this.chevronSvgContainerClasses)}
							style=${styleMap(this.chevronSvgContainerStyles)}
						>
							${chevronDownLightSvg}
						</div>
					</button>

					<div
						class=${classMap(this.dropdownContentClasses)}
						style=${styleMap(this.dropdownContentStyles)}
					>
						${this.options.map(option =>
							this.getDropdownOption(
								option,
								option.key == this.selectedKey
							)
						)}
					</div>
				</div>
			</div>
		`
	}
}
