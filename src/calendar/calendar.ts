import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { DateTime } from "luxon"
import { arrowLeftLightSvg } from "../../assets/svg/arrow-left-light.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { calendarStyles } from "./calendar.styles.js"

export const calendarTagName = "dav-calendar"

@customElement(calendarTagName)
export class Calendar extends LitElement {
	static styles = [globalStyles, calendarStyles]

	@state() private visibleDate: DateTime = DateTime.now().plus({ months: 5 })

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

	getWeekdaysHtml() {
		let currentWeekDay = DateTime.now().startOf("week")
		let weekDayHtml = []

		for (let i = 0; i < 7; i++) {
			weekDayHtml.push(
				html`
					<div>${currentWeekDay.weekdayShort}</div>
				`
			)

			currentWeekDay = currentWeekDay.plus({ days: 1 })
		}

		return weekDayHtml
	}

	getDaysHtml() {
		let weeksHtml = []
		let currentMonth = this.visibleDate.month
		let currentDate = this.visibleDate.startOf("month").startOf("week")
		let endOfMonth = this.visibleDate.endOf("month").endOf("week")

		while (currentDate < endOfMonth) {
			let weekHtml = []

			for (let i = 0; i < 7; i++) {
				let isCurrentMonth = currentDate.month == currentMonth
				let isCurrentDay =
					DateTime.now().month == currentMonth &&
					currentDate.day == DateTime.now().day

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

	previousMonthButtonClick() {
		this.visibleDate = this.visibleDate.minus({ months: 1 })
	}

	nextMonthButtonClick() {
		this.visibleDate = this.visibleDate.plus({ months: 1 })
	}

	render() {
		return html`
			<div class="container">
				<div class="top-container">
					<div class="arrow-left">
						<dav-icon-button
							size="small"
							@click=${this.previousMonthButtonClick}
						>
							${arrowLeftLightSvg}
						</dav-icon-button>
					</div>

					<div class="date-container">
						${this.visibleDate.toFormat("MMMM")}
						${this.visibleDate.toFormat("y")}
					</div>

					<div class="arrow-right">
						<dav-icon-button
							size="small"
							@click=${this.nextMonthButtonClick}
						>
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
