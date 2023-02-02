import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { Theme, Settings } from '../types.js'
import {
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from '../utils.js'
import { globalStyles } from '../styles.js'
import { toggleStyles } from './toggle.styles.js'

export const toggleTagName = "dav-toggle"

@customElement(toggleTagName)
export class Toggle extends LitElement {
	static styles = [globalStyles, toggleStyles]

	@state() private inputClasses = {
		checked: false
	}
	@state() private sliderClasses = {
		darkTheme: false
	}
	@state() private theme: Theme = getSettings().theme

	@property({ type: Boolean }) checked: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => this.theme = settings.theme

	private checkboxClicked(event: PointerEvent) {
		event.preventDefault()

		this.dispatchEvent(new CustomEvent("change", {
			detail: {
				checked: this.checked
			}
		}))
	}

	render() {
		// Update the UI based on the properties
		this.inputClasses.checked = this.checked
		this.sliderClasses.darkTheme = this.theme == Theme.dark

		return html`
			<label id="switch" class=${classMap(this.inputClasses)}>
				<input
					type="checkbox"
					?checked=${this.checked}
					@click=${this.checkboxClicked}>
				<span
					id="slider"
					class=${classMap(this.sliderClasses)}>
				</span>
			</label>
		`
	}
}