import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { checkboxStyles } from "./checkbox.styles.js"
import { Settings } from "../types.js"
import {
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
		checkbox: true,
		checked: false,
		indeterminate: false,
		disabled: false
	}
	@state() private checkboxLabelClasses = {
		"checkbox-label": true,
		disabled: false,
		empty: false,
		"strike-through": false,
		"visually-hidden": false
	}

	@property() label: string = ""
	@property({ type: Boolean }) checked: boolean = false
	// Shown instead of checked, e.g. when only some items of a group are chosen
	@property({ type: Boolean }) indeterminate: boolean = false
	@property({ type: Boolean }) disabled: boolean = false
	@property({ type: Boolean }) labelHidden: boolean = false
	@property({ type: Boolean }) strikeThrough: boolean = false

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

		this.indeterminate = false
		this.checked = !this.checked

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { checked: this.checked }
			})
		)
	}

	render() {
		this.checkboxClasses.checked = this.checked
		this.checkboxClasses.indeterminate = this.indeterminate
		this.checkboxClasses.disabled = this.disabled
		this.checkboxLabelClasses.disabled = this.disabled
		this.checkboxLabelClasses.empty = this.label.length == 0
		this.checkboxLabelClasses["strike-through"] =
			this.strikeThrough && this.checked
		this.checkboxLabelClasses["visually-hidden"] = this.labelHidden

		return html`
			<div
				class=${classMap(this.checkboxClasses)}
				tabindex="0"
				role="checkbox"
				aria-checked=${this.indeterminate
					? "mixed"
					: this.checked
					? "true"
					: "false"}
				aria-disabled=${this.disabled ? "true" : "false"}
				aria-labelledby="checkbox-label"
				@click=${this.checkboxClick}
				@keydown=${this.checkboxKeydown}
			>
				<svg viewBox="0 0 24 24" width="18" height="18">
					<path
						class="check"
						d="M4 12.6111L8.92308 17.5L20 6.5"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						class="dash"
						d="M6 12H18"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</div>

			<label
				class=${classMap(this.checkboxLabelClasses)}
				@click=${this.checkboxClick}
			>
				${this.label}
			</label>
		`
	}
}
