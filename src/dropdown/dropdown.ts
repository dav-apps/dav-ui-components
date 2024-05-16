import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { DropdownOption, DropdownOptionType, Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from "../utils.js"
import { chevronDownLightSvg } from "../../assets/svg/chevron-down-light.js"
import { globalStyles } from "../styles.js"
import { dropdownStyles } from "./dropdown.styles.js"

export const dropdownTagName = "dav-dropdown"

@customElement(dropdownTagName)
export class Dropdown extends LitElement {
	static styles = [globalStyles, dropdownStyles]

	@state() private locale = getSettings().locale.dropdown
	@state() private showItems: boolean = false
	@state() private buttonText: string = this.locale.defaultDropdownButtonText

	@state() private dropdownLabelClasses = {
		"dropdown-label": true,
		disabled: false
	}
	@state() private dropdownButtonClasses = {
		"dropdown-button": true,
		disabled: false,
		active: false
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
		visible: false
	}
	@state() private dropdownButtonStyles = {
		width: "160px"
	}
	@state() private dropdownContentStyles = {
		width: "160px"
	}

	@property() label: string = ""
	@property({ type: Array }) options: DropdownOption[] = []
	@property() selectedKey: string = ""
	@property({ type: Number }) width: number = 160
	@property({ type: Boolean }) disabled: boolean = false

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
		this.updateDropdownButtonText()
	}

	updateDropdownButtonText() {
		// Get the selected item and set the button text
		let i = this.options.findIndex(option => option.key == this.selectedKey)
		if (i != -1) this.buttonText = this.options[i].value
		else this.buttonText = this.locale.defaultDropdownButtonText
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
					<div class="dropdown-color" style=${styleMap(styles)}></div>
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

	render() {
		this.dropdownLabelClasses.disabled = this.disabled
		this.dropdownButtonClasses.disabled = this.disabled
		this.dropdownButtonClasses.active = this.showItems
		this.dropdownContentClasses["slide-down-in"] = this.showItems
		this.dropdownContentClasses.visible = this.showItems

		this.dropdownButtonStyles.width = `${this.width}px`
		this.dropdownContentStyles.width = `${this.width}px`

		this.updateDropdownButtonText()

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
						<span>${this.buttonText}</span>

						<div class="chevron-svg-container">
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
