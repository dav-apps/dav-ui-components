import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { checkboxStyles } from "./checkbox.styles.js"
import { Settings } from "../types.js"
import {
	getGlobalStyleHtml,
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"

export const checkboxTagName = "dav-checkbox"

@customElement(checkboxTagName)
export class Checkbox extends LitElement {
	static styles = [globalStyles, checkboxStyles]

	@state() private checkboxClasses = {
		checked: false,
		disabled: false
	}
	@state() private checkboxLabelClasses = {
		disabled: false,
		empty: false,
		"visually-hidden": false
	}
	@state() private checkmarkPathStyles = {
		display: "none"
	}

	@property() label: string = ""
	@property({ type: Boolean }) checked: boolean = false
	@property({ type: Boolean }) disabled: boolean = false
	@property({ type: Boolean }) labelHidden: boolean = false

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

	checkboxClick(event: PointerEvent) {
		event.preventDefault()
		this.toggleCheckbox()
	}

	checkboxKeydown(event: KeyboardEvent) {
		if (event.code == "Space" || event.code == "Enter") {
			event.preventDefault()
			this.toggleCheckbox()
		}
	}

	toggleCheckbox() {
		if (this.disabled) return

		this.checked = !this.checked

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { checked: this.checked }
			})
		)
	}

	render() {
		this.checkboxClasses.checked = this.checked
		this.checkboxClasses.disabled = this.disabled
		this.checkboxLabelClasses.disabled = this.disabled
		this.checkboxLabelClasses.empty = this.label.length == 0
		this.checkboxLabelClasses["visually-hidden"] = this.labelHidden

		this.checkmarkPathStyles.display = this.checked ? "unset" : "none"

		return html`
			${getGlobalStyleHtml()}

			<div
				id="checkbox"
				class=${classMap(this.checkboxClasses)}
				tabindex="0"
				role="checkbox"
				?aria-checked=${this.checked}
				?aria-disabled=${this.disabled}
				aria-labelledby="checkbox-label"
				@click=${this.checkboxClick}
				@keydown=${this.checkboxKeydown}
			>
				<svg id="checkmark" viewBox="0,0,20,20" width="18" height="18">
					<path
						style=${styleMap(this.checkmarkPathStyles)}
						d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"
						fill-rule="evenodd"
						clip-rule="evenodd"
					></path>
				</svg>
			</div>

			<label
				id="checkbox-label"
				class=${classMap(this.checkboxLabelClasses)}
				@click=${this.checkboxClick}
			>
				${this.label}
			</label>
		`
	}
}
