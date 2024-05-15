import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { chevronDownLightSvg } from "../../assets/svg/chevron-down-light.js"
import { globalStyles } from "../styles.js"
import { timePickerStyles } from "./time-picker.styles.js"

export const timePickerTagName = "dav-time-picker"

@customElement(timePickerTagName)
export class TimePicker extends LitElement {
	static styles = [globalStyles, timePickerStyles]

	@state() private hourStr: string = "14"
	@state() private minuteStr: string = "00"

	@property({ type: Number }) hour: number = 14
	@property({ type: Number }) minute: number = 0

	connectedCallback() {
		super.connectedCallback()

		if (this.hour > 23) this.hour = 23
		if (this.hour < 0) this.hour = 0
		if (this.minute > 59) this.minute = 59
		if (this.minute < 0) this.minute = 0

		if (this.hour < 10 && this.hour >= 0) {
			this.hourStr = `0${this.hour}`
		} else {
			this.hourStr = this.hour.toString()
		}

		if (this.minute < 10 && this.minute >= 0) {
			this.minuteStr = `0${this.minute}`
		} else {
			this.minuteStr = this.minute.toString()
		}
	}

	hourInputChange(event: CustomEvent) {
		let hour = event.detail.value
		let numValue = Number(hour)

		if (numValue < 10 && numValue >= 0) {
			this.hourStr = `0${numValue}`
		} else {
			this.hourStr = hour
		}

		this.dispatchChangeEvent()
	}

	minuteInputChange(event: CustomEvent) {
		let minute = event.detail.value
		let numValue = Number(minute)

		if (numValue < 10 && numValue >= 0) {
			this.minuteStr = `0${numValue}`
		} else {
			this.minuteStr = minute
		}

		this.dispatchChangeEvent()
	}

	increaseHour() {
		let hour = Number(this.hourStr) + 1
		if (hour >= 24) return

		if (hour < 10 && hour >= 0) {
			this.hourStr = `0${hour}`
		} else {
			this.hourStr = hour.toString()
		}

		this.dispatchChangeEvent()
	}

	increaseMinute() {
		let minute = Number(this.minuteStr) + 5
		if (minute >= 60) return

		if (minute < 10 && minute >= 0) {
			this.minuteStr = `0${minute}`
		} else {
			this.minuteStr = minute.toString()
		}

		this.dispatchChangeEvent()
	}

	decreaseHour() {
		let hour = Number(this.hourStr) - 1
		if (hour < 0) return

		if (hour < 10 && hour >= 0) {
			this.hourStr = `0${hour}`
		} else {
			this.hourStr = hour.toString()
		}

		this.dispatchChangeEvent()
	}

	decreaseMinute() {
		let minute = Number(this.minuteStr) - 5
		if (minute < 0) return

		if (minute < 10 && minute >= 0) {
			this.minuteStr = `0${minute}`
		} else {
			this.minuteStr = minute.toString()
		}

		this.dispatchChangeEvent()
	}

	dispatchChangeEvent() {
		this.dispatchEvent(
			new CustomEvent("change", {
				detail: {
					hour: Number(this.hourStr),
					minute: Number(this.minuteStr)
				}
			})
		)
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
						value=${this.hourStr}
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
						value=${this.minuteStr}
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
