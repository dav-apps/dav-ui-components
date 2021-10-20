import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { dropdownStyles } from './dropdown.styles.js'
import { getGlobalStyleHtml, getLocale, convertStringToTheme } from '../utils.js'
import { DropdownOption, Theme, DropdownOptionType } from '../types.js'

export const dropdownTagName = "dav-dropdown"

@customElement(dropdownTagName)
export class Dropdown extends LitElement {
	static styles = [dropdownStyles]

	@state() private locale = getLocale().dropdown

	@state() private dropdownLabelClasses = {
		darkTheme: false
	}
	@state() private dropdownButtonClasses = {
		disabled: false,
		darkTheme: false
	}
	@state() private dropdownOptionClasses = {
		"dropdown-option": true,
		darkTheme: false
	}
	@state() private dropdownDividerClasses = {
		"dropdown-divider": true,
		darkTheme: false
	}

	@state() private dropdownButtonStyles = {
		width: "160px"
	}
	@state() private dropdownContentStyles = {
		width: "160px",
		display: "none"
	}

	@state() private showItems: boolean = false
	@state() private buttonText: string = this.locale.defaultDropdownButtonText
	@property() label: string = ""
	@property({ type: Array }) options: DropdownOption[] = []
	@property() selectedKey: string = ""
	@property({ type: Number }) width: number = 160
	@property({ type: Boolean }) disabled: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToTheme(value)
	}) theme: Theme = Theme.light

	connectedCallback() {
		super.connectedCallback()
		document.addEventListener("click", this.documentClick)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		document.removeEventListener("click", this.documentClick)
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
		this.dispatchEvent(new CustomEvent("change", {
			detail: { key }
		}))

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
		if (this.label.length == 0) {
			return html``
		}

		return html`
			<label
				id="dropdown-label"
				class=${classMap(this.dropdownLabelClasses)}
				for="dropdown-button">
				${this.label}
			</label>
		`
	}

	getDropdownOption(option: DropdownOption) {
		if (option.type == DropdownOptionType.divider) {
			return html`
				<div class=${classMap(this.dropdownDividerClasses)}>
					<hr>
				</div>
			`
		} else {
			return html`
				<button
					class=${classMap(this.dropdownOptionClasses)}
					key=${option.key}
					@click=${this.dropdownOptionClick}>
					${option.value}
				</button>
			`
		}
	}

	render() {
		// Update the UI based on the properties
		this.dropdownLabelClasses.darkTheme = this.theme == Theme.dark
		this.dropdownButtonClasses.disabled = this.disabled
		this.dropdownButtonClasses.darkTheme = this.theme == Theme.dark
		this.dropdownOptionClasses.darkTheme = this.theme == Theme.dark
		this.dropdownDividerClasses.darkTheme = this.theme == Theme.dark

		this.dropdownButtonStyles.width = `${this.width}px`
		this.dropdownContentStyles.width = `${this.width}px`
		this.dropdownContentStyles.display = this.showItems ? "block" : "none"

		this.updateDropdownButtonText()

		return html`
			${getGlobalStyleHtml()}

			<div id="dropdown">
				${this.getLabel()}

				<button
					id="dropdown-button"
					class=${classMap(this.dropdownButtonClasses)}
					style=${styleMap(this.dropdownButtonStyles)}
					name="dropdown-button"
					?aria-disabled=${this.disabled}
					@click=${this.dropdownButtonClick}>

					<span>${this.buttonText}</span>

					<i class="ms-Icon ms-Icon--ChevronDown ms-auto" aria-hidden="true"></i>
				</button>

				<div
					id="dropdown-content"
					class="ms-motion-slideDownIn"
					style=${styleMap(this.dropdownContentStyles)}>

					${this.options.map((option) => this.getDropdownOption(option))}
				</div>
			</div>
		`
	}
}