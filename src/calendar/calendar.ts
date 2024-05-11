import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { DateTime } from "luxon"
import { arrowLeftLightSvg } from "../../assets/svg/arrow-left-light.js"
import { globalStyles } from "../styles.js"
import { calendarStyles } from "./calendar.styles.js"

export const calendarTagName = "dav-calendar"

@customElement(calendarTagName)
export class Calendar extends LitElement {
	static styles = [globalStyles, calendarStyles]

	getWeekdays() {
		let currentWeekDay = DateTime.now().startOf("week")
		let weekDays: string[] = []

		for (let i = 0; i < 7; i++) {
			weekDays.push(currentWeekDay.weekdayShort)
			currentWeekDay = currentWeekDay.plus({ days: 1 })
		}

		return weekDays
	}

	getWeekdaysHtml() {
		let weekdayHtml = []

		for (let day of this.getWeekdays()) {
			weekdayHtml.push(
				html`
					<div>${day}</div>
				`
			)
		}

		return weekdayHtml
	}

	getDays() {
		let weeks: number[][] = []

		let currentMonth = DateTime.now().month
		let currentDate = DateTime.now()
			.startOf("month")
			.startOf("week")

		while (currentDate.month <= currentMonth) {
			let row: number[] = []

			for (let i = 0; i < 7; i++) {
				row.push(currentDate.day)
				currentDate = currentDate.plus({ days: 1 })
			}

			weeks.push(row)
		}

		return weeks
	}

	getDaysHtml() {
		let weeks = this.getDays()
		let weeksHtml = []

		for (let week of weeks) {
			let weekHtml = []

			for (let day of week) {
				weekHtml.push(
					html`
						<div class="day-container">${day}</div>
					`
				)
			}

			weeksHtml.push(
				html`
					<div class="week-container">
						${weekHtml}
					</div>
				`
			)
		}

		return weeksHtml
	}

	render() {
		return html`
			<div class="container">
				<div class="top-container">
					<div class="arrow-left">
						<dav-icon-button size="small">
							${arrowLeftLightSvg}
						</dav-icon-button>
					</div>

					<div class="date-container">May 2024</div>

					<div class="arrow-right">
						<dav-icon-button size="small">
							${arrowLeftLightSvg}
						</dav-icon-button>
					</div>
				</div>
				<div class="bottom-container">
					<div class="weekdays-container">
						${this.getWeekdaysHtml()}
					</div>
					<div class="month-container">
						${this.getDaysHtml()}
					</div>
				</div>
			</div>
		`
	}
}
