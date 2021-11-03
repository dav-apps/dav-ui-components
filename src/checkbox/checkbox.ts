import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { checkboxStyles } from './checkbox.styles.js'
import { Theme } from '../types.js'
import { convertStringToTheme } from '../utils.js'

export const checkboxTagName = "dav-checkbox"

@customElement(checkboxTagName)
export class Checkbox extends LitElement {
	static styles = [checkboxStyles]

	@state() private checkboxClasses = {
		checked: false,
		disabled: false
	}
	@state() private checkmarkClasses = {
		darkTheme: false
	}
	@state() private checkboxLabelClasses = {
		disabled: false,
		darkTheme: false,
		empty: false
	}

	@state() private checkmarkPathStyles = {
		display: "none"
	}

	@property() label: string = ""
	@property({ type: Boolean }) checked: boolean = false
	@property({ type: Boolean }) disabled: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToTheme(value)
	}) theme: Theme = Theme.light

	checkboxClick() {
		this.toggleCheckbox()
	}

	checkboxKeydown(event: KeyboardEvent) {
		if (event.code == "Space" || event.code == "Enter") {
			event.preventDefault()
			this.toggleCheckbox()
		}
	}

	toggleCheckbox() {
		if (!this.disabled) {
			this.checked = !this.checked
			this.dispatchEvent(new CustomEvent("change", {
				detail: { checked: this.checked }
			}))
		}
	}

	render() {
		this.checkboxClasses.checked = this.checked
		this.checkboxClasses.disabled = this.disabled
		this.checkmarkClasses.darkTheme = this.theme == Theme.dark
		this.checkboxLabelClasses.disabled = this.disabled
		this.checkboxLabelClasses.darkTheme = this.theme == Theme.dark
		this.checkboxLabelClasses.empty = this.label.length == 0

		this.checkmarkPathStyles.display = this.checked ? "unset" : "none"

		return html`
			<div
				id="checkbox"
				class=${classMap(this.checkboxClasses)}
				tabindex="0"
				role="checkbox"
				?aria-checked=${this.checked}
				?aria-disabled=${this.disabled}
				aria-labelledby="checkbox-label"
				@click=${this.checkboxClick}
				@keydown=${this.checkboxKeydown}>

				<svg
					id="checkmark"
					class=${classMap(this.checkmarkClasses)}
					viewBox="0,0,20,20"
					width="18"
					height="18">

					<path
						style=${styleMap(this.checkmarkPathStyles)}
						d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
						fill-rule="evenodd"
						clip-rule="evenodd">
					</path>
				</svg>
			</div>

			<label
				id="checkbox-label"
				class=${classMap(this.checkboxLabelClasses)}
				@click=${this.checkboxClick}>
				${this.label}
			</label>
		`
	}
}