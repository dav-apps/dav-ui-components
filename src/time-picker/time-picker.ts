import { LitElement, html } from "lit"
import { customElement, state } from "lit/decorators.js"
import { chevronDownLightSvg } from "../../assets/svg/chevron-down-light.js"
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

	increaseHour() {
		let hour = Number(this.hour) + 1
		if (hour >= 24) return

		if (hour < 10 && hour >= 0) {
			this.hour = `0${hour}`
		} else {
			this.hour = hour.toString()
		}
	}

	increaseMinute() {
		let minute = Number(this.minute) + 5
		if (minute >= 60) return

		if (minute < 10 && minute >= 0) {
			this.minute = `0${minute}`
		} else {
			this.minute = minute.toString()
		}
	}

	decreaseHour() {
		let hour = Number(this.hour) - 1
		if (hour < 0) return

		if (hour < 10 && hour >= 0) {
			this.hour = `0${hour}`
		} else {
			this.hour = hour.toString()
		}
	}

	decreaseMinute() {
		let minute = Number(this.minute) - 5
		if (minute < 0) return

		if (minute < 10 && minute >= 0) {
			this.minute = `0${minute}`
		} else {
			this.minute = minute.toString()
		}
	}

	getHourUpButtonHtml() {
		return html`
			<div class="up-button-container">
				<dav-icon-button size="xs" @click=${this.increaseHour}>
					${chevronDownLightSvg}
				</dav-icon-button>
			</div>
		`
	}

	getMinuteUpButtonHtml() {
		return html`
			<div class="up-button-container" @click=${this.increaseMinute}>
				<dav-icon-button size="xs">
					${chevronDownLightSvg}
				</dav-icon-button>
			</div>
		`
	}

	getHourDownButtonHtml() {
		return html`
			<div class="down-button-container">
				<dav-icon-button size="xs" @click=${this.decreaseHour}>
					${chevronDownLightSvg}
				</dav-icon-button>
			</div>
		`
	}

	getMinuteDownButtonHtml() {
		return html`
			<div class="down-button-container">
				<dav-icon-button size="xs" @click=${this.decreaseMinute}>
					${chevronDownLightSvg}
				</dav-icon-button>
			</div>
		`
	}

	render() {
		return html`
			<div class="container">
				<div class="hour-input-container">
					${this.getHourUpButtonHtml()}

					<dav-textfield
						value=${this.hour}
						type="number"
						min="0"
						max="23"
						noArrows
						@change=${this.hourInputChange}
					></dav-textfield>

					${this.getHourDownButtonHtml()}
				</div>
				<span>:</span>
				<div class="minute-input-container">
					${this.getMinuteUpButtonHtml()}

					<dav-textfield
						value=${this.minute}
						type="number"
						min="0"
						max="59"
						noArrows
						@change=${this.minuteInputChange}
					></dav-textfield>

					${this.getMinuteDownButtonHtml()}
				</div>
			</div>
		`
	}
}
