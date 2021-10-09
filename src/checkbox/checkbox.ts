import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { checkboxStyles } from './checkbox.styles'

export const checkboxTagName = "dav-checkbox"

@customElement(checkboxTagName)
export class Checkbox extends LitElement {
	static styles = [checkboxStyles]

	@state()
	private checkboxIndicatorClasses = {
		checked: false
	}
	@state()
	private checkmarkSvgPathStyles = {
		display: "none"
	}

	@property() label: string = ""
	@property({ type: Boolean }) checked: boolean = false

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
		this.checked = !this.checked
	}

	render() {
		this.checkboxIndicatorClasses.checked = this.checked
		this.checkmarkSvgPathStyles.display = this.checked ? "unset" : "none"

		return html`
			<div
				id="checkbox"
				class=${classMap(this.checkboxIndicatorClasses)}
				tabindex="0"
				role="checkbox"
				?aria-checked=${this.checked}
				aria-labelledby="checkbox-label"
				@click=${this.checkboxClick}
				@keydown=${this.checkboxKeydown}>

				<svg viewBox="0,0,20,20" width="18" height="18">
					<path
						style=${styleMap(this.checkmarkSvgPathStyles)}
						d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
						fill-rule="evenodd"
						clip-rule="evenodd">
					</path>
				</svg>
			</div>

			<label
				id="checkbox-label"
				@click=${this.checkboxClick}>
				${this.label}
			</label>
		`
	}
}