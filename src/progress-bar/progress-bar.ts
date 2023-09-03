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
		let value = this.value

		if (this.value < 0) {
			value = 0
		} else if (this.value > 100) {
			value = 100
		}

		this.indicatorStyles.width = `${value}%`

		return html`
			<div
				class="container"
				role="progressbar"
				aria-valuenow=${value}
				aria-valuemin="0"
				aria-valuemax="100"
			>
				<div class="track"></div>

				<div
					class="indicator"
					style=${styleMap(this.indicatorStyles)}
				></div>
			</div>
		`
	}
}
