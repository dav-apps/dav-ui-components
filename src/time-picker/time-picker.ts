import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { timePickerStyles } from "./time-picker.styles.js"

export const timePickerTagName = "dav-time-picker"

@customElement(timePickerTagName)
export class TimePicker extends LitElement {
	static styles = [globalStyles, timePickerStyles]

	@state() private hour: string = "14"
	@state() private minute: string = "00"

	hourInputChange(event: CustomEvent) {
		let hour = event.detail.value
		let numValue = Number(hour)

		if (numValue < 10 && numValue >= 0) {
			this.hour = `0${numValue}`
		} else {
			this.hour = hour
		}
	}

	minuteInputChange(event: CustomEvent) {
		let minute = event.detail.value
		let numValue = Number(minute)

		if (numValue < 10 && numValue >= 0) {
			this.minute = `0${numValue}`
		} else {
			this.minute = minute
		}
	}

	render() {
		return html`
			<div class="container">
				<div class="hour-input-container">
					<dav-textfield
						value=${this.hour}
						type="number"
						min="0"
						max="23"
						noArrows
						@change=${this.hourInputChange}
					></dav-textfield>
				</div>
				:
				<div class="minute-input-container">
					<dav-textfield
						value=${this.minute}
						type="number"
						min="0"
						max="59"
						noArrows
						@change=${this.minuteInputChange}
					></dav-textfield>
				</div>
			</div>
		`
	}
}
