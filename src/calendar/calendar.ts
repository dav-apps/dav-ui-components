import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
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
		let weeksHtml = []
		let currentMonth = DateTime.now().month
		let currentDay = DateTime.now().day
		let currentDate = DateTime.now()
			.startOf("month")
			.startOf("week")

		while (currentDate.month <= currentMonth) {
			let weekHtml = []

			for (let i = 0; i < 7; i++) {
				let isCurrentMonth = currentDate.month == currentMonth
				let isCurrentDay = isCurrentMonth && currentDate.day == currentDay

				let dayButtonClasses = {
					"day-button": true,
					"current-month": isCurrentMonth,
					"current-day": isCurrentDay
				}

				weekHtml.push(html`
					<button
						class=${classMap(dayButtonClasses)}
						?disabled=${!isCurrentMonth}
					>
						${currentDate.day}
					</button>
				`)

				currentDate = currentDate.plus({ days: 1 })
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
