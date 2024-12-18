import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings as LuxonSettings, DateTime } from "luxon"
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

	@state() private visibleDate: DateTime = DateTime.now()
	@state() private dateContainerClasses = {
		"date-container": true,
		disabled: false
	}
	@state() private weekdaysContainerClasses = {
		"weekdays-container": true,
		disabled: false
	}

	@property({
		type: String,
		converter: value => DateTime.fromISO(value)
	})
	date: DateTime = DateTime.now()
	@property({ type: Boolean }) disabled: boolean = false

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)

		LuxonSettings.defaultLocale = navigator.language
		this.visibleDate = this.date
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	updated(changedProperties: Map<string, any>) {
		if (changedProperties.has("date")) {
			this.visibleDate = this.date
		}
	}

	previousMonthButtonClick() {
		this.visibleDate = this.visibleDate.minus({ months: 1 })
	}

	nextMonthButtonClick() {
		this.visibleDate = this.visibleDate.plus({ months: 1 })
	}

	dayButtonClick(date: DateTime) {
		if (this.disabled) return

		this.date = date

		this.dispatchEvent(
			new CustomEvent("change", {
				detail: { date: this.date }
			})
		)
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
				let date = currentDate
				let isCurrentMonth = currentDate.month == currentMonth
				let isCurrentDay = currentDate.hasSame(DateTime.now(), "day")

				let dayButtonClasses = {
					"day-button": true,
					"current-month": isCurrentMonth,
					"current-day": isCurrentDay,
					selected: this.date.hasSame(date, "day"),
					disabled: this.disabled
				}

				weekHtml.push(html`
					<button
						class=${classMap(dayButtonClasses)}
						?disabled=${!isCurrentMonth}
						@click=${() => this.dayButtonClick(date)}
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
		this.weekdaysContainerClasses.disabled = this.disabled
		this.dateContainerClasses.disabled = this.disabled

		return html`
			<div class="container">
				<div class="top-container">
					<div class="arrow-left">
						<dav-icon-button
							size="sm"
							?disabled=${this.disabled}
							@click=${this.previousMonthButtonClick}
						>
							${arrowLeftLightSvg}
						</dav-icon-button>
					</div>

					<div class=${classMap(this.dateContainerClasses)}>
						${this.visibleDate.toFormat("MMMM")}
						${this.visibleDate.toFormat("y")}
					</div>

					<div class="arrow-right">
						<dav-icon-button
							size="sm"
							?disabled=${this.disabled}
							@click=${this.nextMonthButtonClick}
						>
							${arrowLeftLightSvg}
						</dav-icon-button>
					</div>
				</div>
				<div class="bottom-container">
					<div class=${classMap(this.weekdaysContainerClasses)}>
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
