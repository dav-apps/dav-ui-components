import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { radioGroupStyles } from "./radio-group.styles.js"
import { RadioButton } from "../radio-button/radio-button.js"

export const radioGroupTagName = "dav-radio-group"

@customElement(radioGroupTagName)
export class RadioGroup extends LitElement {
	static styles = [globalStyles, radioGroupStyles]

	private radioButtons: RadioButton[] = []
	private onFocusBound = this.onFocus.bind(this)
	private onKeyDownBound = this.onKeyDown.bind(this)

	connectedCallback() {
		super.connectedCallback()
		this.addEventListener("focus", this.onFocusBound)
		this.addEventListener("keydown", this.onKeyDownBound)

		// Make the group tabbable so keyboard users can tab to the group
		// and then use arrows to change selection like native radios.
		this.tabIndex = 0
		this.updateRadioButtons()
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		this.removeEventListener("focus", this.onFocusBound)
		this.removeEventListener("keydown", this.onKeyDownBound)
	}

	/** Refresh internal list and subscribe to radio button change events */
	private updateRadioButtons() {
		this.radioButtons = []
		const radioButtons = this.querySelectorAll("dav-radio-button")

		for (const radioButton of radioButtons) {
			radioButton.addEventListener("change", () =>
				this.onRadioButtonChange(radioButton)
			)

			// Ensure only the checked radio is in tab order — RadioButton
			// will set the input's tabIndex when its `checked` property
			// changes, but set it here initially as well.
			if (radioButton.checked) {
				radioButton.focus()
			}

			this.radioButtons.push(radioButton)
		}
	}

	private move(offset: number) {
		const len = this.radioButtons.length
		if (!len) return

		const currentIndex = this.radioButtons.findIndex(rb => rb.checked)
		let nextIndex = 0

		if (currentIndex === -1) {
			nextIndex = 0
		} else {
			const current = this.radioButtons[currentIndex]
			current.checked = false

			nextIndex = (currentIndex + offset + len) % len
		}

		const next = this.radioButtons[nextIndex]
		next.checked = true
		next.focus()

		this.dispatchEvent(
			new CustomEvent("change", { detail: { checked: next.value } })
		)
	}

	private onFocus(e: FocusEvent) {
		// When the group receives keyboard focus, forward it to the
		// currently checked radio (or first if none) so the user can
		// immediately interact with options via arrow keys.
		const active =
			this.radioButtons.find(rb => rb.checked) || this.radioButtons[0]
		active?.focus()
	}

	private onKeyDown(e: KeyboardEvent) {
		if (!this.radioButtons.length) return

		switch (e.key) {
			case "ArrowRight":
			case "ArrowDown": {
				e.preventDefault()
				this.move(1)
				break
			}
			case "ArrowLeft":
			case "ArrowUp": {
				e.preventDefault()
				this.move(-1)
				break
			}
		}
	}

	private onRadioButtonChange(radioButton: RadioButton) {
		// Uncheck all other radio buttons
		for (const rb of this.radioButtons) {
			if (rb !== radioButton) {
				rb.checked = false
			}
		}

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { checked: radioButton.value }
			})
		)
	}

	render() {
		return html`
			<div class="container" aria-label="Select an option" role="radiogroup">
				<slot></slot>
			</div>
		`
	}
}
