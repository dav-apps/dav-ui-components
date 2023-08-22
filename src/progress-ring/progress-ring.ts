import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { styleMap } from "lit/directives/style-map.js"
import { globalStyles } from "../styles.js"
import { progressRingStyles } from "./progress-ring.styles.js"

export const progressRingTagName = "dav-progress-ring"

@customElement(progressRingTagName)
export class ProgressRing extends LitElement {
	static styles = [globalStyles, progressRingStyles]

	@state() private svgStyles = {
		width: "24px",
		height: "24px"
	}
	@state() private circleStyles = {
		stroke: null
	}

	@property({ type: Number }) size: number = 24
	@property() color: string = null

	render() {
		this.svgStyles.width = `${this.size}px`
		this.svgStyles.height = `${this.size}px`
		this.circleStyles.stroke = this.color

		return html`
			<svg viewBox="0 0 16 16" style=${styleMap(this.svgStyles)}>
				<circle
					style=${styleMap(this.circleStyles)}
					stroke-width="2px"
					stroke-linecap="round"
					fill="transparent"
					cx="8px"
					cy="8px"
					r="7px"
				></circle>
			</svg>
		`
	}
}
