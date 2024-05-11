import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { calendarStyles } from "./calendar.styles.js"

export const calendarTagName = "dav-calendar"

@customElement(calendarTagName)
export class Calendar extends LitElement {
	static styles = [globalStyles, calendarStyles]

	render() {
		return html`
			<p>Hello World</p>
		`
	}
}
