import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { styleMap } from 'lit/directives/style-map.js'
import { dropdownStyles } from './dropdown.styles'
import { getGlobalStyleHtml, getLocale } from '../utils'
import { DropdownOption, DropdownOptionType } from '../types'

export const dropdownTagName = "dav-dropdown"

@customElement(dropdownTagName)
export class Dropdown extends LitElement {
	static styles = [dropdownStyles]

	@state() locale = getLocale().dropdown
	@state()
	private dropdownButtonStyles = {
		width: "160px"
	}
	@state()
	private dropdownContentStyles = {
		width: "160px",
		display: "none"
	}

	@state() private showItems: boolean = false
	@state() private buttonText: string = this.locale.defaultDropdownButtonText
	@property({ type: Array }) options: DropdownOption[] = []
	@property() selectedKey: string = ""
	@property({ type: Number }) width: number = 160

	connectedCallback() {
		super.connectedCallback()

		document.onclick = (event: PointerEvent) => {
			if (event.target != this) {
				this.showItems = false
			}
		}
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		document.onclick = null
	}

	dropdownButtonClick() {
		this.showItems = !this.showItems
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

	getDropdownOption(option: DropdownOption) {
		if (option.type == DropdownOptionType.divider) {
			return html`
				<div class="dropdown-divider-container">
					<hr class="dropdown-divider">
				</div>
			`
		} else {
			return html`
				<button
					class="dropdown-option"
					key=${option.key}
					@click=${this.dropdownOptionClick}>
					${option.value}
				</button>
			`
		}
	}

	render() {
		// Update the UI based on the properties
		this.dropdownButtonStyles.width = `${this.width}px`
		this.dropdownContentStyles.width = `${this.width}px`
		this.dropdownContentStyles.display = this.showItems ? "block" : "none"

		this.updateDropdownButtonText()

		return html`
			${getGlobalStyleHtml()}

			<div class="dropdown">
				<button
					class="dropdown-button"
					style=${styleMap(this.dropdownButtonStyles)}
					@click=${this.dropdownButtonClick}>

					<span>${this.buttonText}</span>

					<i class="ms-Icon ms-Icon--ChevronDown ms-auto" aria-hidden="true"></i>
				</button>

				<div
					class="dropdown-content ms-motion-slideDownIn"
					style=${styleMap(this.dropdownContentStyles)}>

					${this.options.map((option) => this.getDropdownOption(option))}
				</div>
			</div>
		`
	}
}