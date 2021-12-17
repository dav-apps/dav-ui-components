import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { progressRingStyles } from './progress-ring.styles.js'

export const progressRingTagName = "dav-progress-ring"

@customElement(progressRingTagName)
export class ProgressRing extends LitElement {
	static styles = [progressRingStyles]

	render() {
		return html`
			<svg viewBox="0 0 16 16">
				<circle
					style="transform-origin: 50% 50%; animation: spin 2s linear infinite;"
					stroke="#036ac4"
					stroke-width="2px"
					stroke-linecap="round"
					fill="transparent"
					cx="8px"
					cy="8px"
					r="7px">
				</circle>
			</svg>
		`
	}
}