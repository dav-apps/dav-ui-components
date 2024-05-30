import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { chevronDownLightSvg } from "../../assets/svg/chevron-down-light.js"
import { globalStyles } from "../styles.js"
import { timePickerStyles } from "./time-picker.styles.js"

export const timePickerTagName = "dav-time-picker"

@customElement(timePickerTagName)
export class TimePicker extends LitElement {
	static styles = [globalStyles, timePickerStyles]

	@property({ type: Number }) hour: number = 14
	@property({ type: Number }) minute: number = 0
	@property({ type: Boolean }) disabled: boolean = false

	hourInputChange(event: CustomEvent) {
		this.hour = Number(event.detail.value)
		this.dispatchChangeEvent()
	}

	minuteInputChange(event: CustomEvent) {
		this.minute = Number(event.detail.value)
		this.dispatchChangeEvent()
	}

	increaseHour() {
		let hour = Number(this.hour) + 1
		if (hour >= 24) return

		this.hour = hour
		this.dispatchChangeEvent()
	}

	increaseMinute() {
		let minute = Number(this.minute) + 5
		if (minute >= 60) return

		this.minute = minute
		this.dispatchChangeEvent()
	}

	decreaseHour() {
		let hour = Number(this.hour) - 1
		if (hour < 0) return

		this.hour = hour
		this.dispatchChangeEvent()
	}

	decreaseMinute() {
		let minute = Number(this.minute) - 5
		if (minute < 0) return

		this.minute = minute
		this.dispatchChangeEvent()
	}

	dispatchChangeEvent() {
		this.dispatchEvent(
			new CustomEvent("change", {
				detail: {
					hour: this.hour,
					minute: this.minute
				}
			})
		)
	}

	getHourUpButtonHtml() {
		return html`
			<div class="up-button-container">
				<dav-icon-button
					size="xs"
					?disabled=${this.disabled}
					@click=${this.increaseHour}
				>
					${chevronDownLightSvg}
				</dav-icon-button>
			</div>
		`
	}

	getMinuteUpButtonHtml() {
		return html`
			<div class="up-button-container" @click=${this.increaseMinute}>
				<dav-icon-button size="xs" ?disabled=${this.disabled}>
					${chevronDownLightSvg}
				</dav-icon-button>
			</div>
		`
	}

	getHourDownButtonHtml() {
		return html`
			<div class="down-button-container">
				<dav-icon-button
					size="xs"
					?disabled=${this.disabled}
					@click=${this.decreaseHour}
				>
					${chevronDownLightSvg}
				</dav-icon-button>
			</div>
		`
	}

	getMinuteDownButtonHtml() {
		return html`
			<div class="down-button-container">
				<dav-icon-button
					size="xs"
					?disabled=${this.disabled}
					@click=${this.decreaseMinute}
				>
					${chevronDownLightSvg}
				</dav-icon-button>
			</div>
		`
	}

	render() {
		if (this.hour > 23) this.hour = 23
		if (this.hour < 0) this.hour = 0
		if (this.minute > 59) this.minute = 59
		if (this.minute < 0) this.minute = 0

		let hourStr = ""
		let minuteStr = ""

		if (this.hour < 10 && this.hour >= 0) {
			hourStr = `0${this.hour}`
		} else {
			hourStr = this.hour.toString()
		}

		if (this.minute < 10 && this.minute >= 0) {
			minuteStr = `0${this.minute}`
		} else {
			minuteStr = this.minute.toString()
		}

		return html`
			<div class="container">
				<div class="hour-input-container">
					${this.getHourUpButtonHtml()}

					<dav-textfield
						value=${hourStr}
						type="number"
						min="0"
						max="23"
						noArrows
						?disabled=${this.disabled}
						@change=${this.hourInputChange}
					></dav-textfield>

					${this.getHourDownButtonHtml()}
				</div>
				<span>:</span>
				<div class="minute-input-container">
					${this.getMinuteUpButtonHtml()}

					<dav-textfield
						value=${minuteStr}
						type="number"
						min="0"
						max="59"
						noArrows
						?disabled=${this.disabled}
						@change=${this.minuteInputChange}
					></dav-textfield>

					${this.getMinuteDownButtonHtml()}
				</div>
			</div>
		`
	}
}
