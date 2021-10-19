import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { toggleStyles } from './toggle.styles.js'
import { Theme } from '../types.js'
import { convertStringToTheme } from '../utils.js'

export const toggleTagName = "dav-toggle"

@customElement(toggleTagName)
export class Toggle extends LitElement {
	static styles = [toggleStyles]

	@state()
	private inputClasses = {
		checked: false
	}
	@state()
	private sliderClasses = {
		darkTheme: false
	}

	@property({ type: Boolean }) checked: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToTheme(value)
	}) theme: Theme = Theme.light

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
			<label id="switch">
				<input
					class=${classMap(this.inputClasses)}
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