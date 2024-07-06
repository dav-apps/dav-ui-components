import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { toggleStyles } from "./toggle.styles.js"

export const toggleTagName = "dav-toggle"

@customElement(toggleTagName)
export class Toggle extends LitElement {
	static styles = [globalStyles, toggleStyles]

	@state() private inputClasses = {
		switch: true,
		checked: false
	}

	@property({ type: String }) label: string = ""
	@property({ type: Boolean }) checked: boolean = false

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

	private checkboxClicked(event: PointerEvent) {
		event.preventDefault()

		this.checked = !this.checked

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { checked: this.checked }
			})
		)
	}

	render() {
		this.inputClasses.checked = this.checked

		return html`
			<div class="container" @click=${this.checkboxClicked}>
				<label class=${classMap(this.inputClasses)}>
					<input type="checkbox" ?checked=${this.checked} />
					<span class="slider"></span>
				</label>

				<span class="label">${this.label}</span>
			</div>
		`
	}
}
