import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { globalStyles } from "../styles.js"
import { progressBarStyles } from "./progress-bar.styles.js"

export const progressBarTagName = "dav-progress-bar"

@customElement(progressBarTagName)
export class ProgressBar extends LitElement {
	static styles = [globalStyles, progressBarStyles]

	@state() private indicatorStyles = {
		width: "0"
	}

	@property({ type: Number }) value: number = 0

	render() {
		this.indicatorStyles.width = `${this.value}%`

		return html`
			<div class="container">
				<div class="track"></div>

				<div
					class="indicator"
					style=${styleMap(this.indicatorStyles)}
				></div>
			</div>
		`
	}
}
