import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { progressBarStyles } from "./progress-bar.styles.js"

export const progressBarTagName = "dav-progress-bar"

@customElement(progressBarTagName)
export class ProgressBar extends LitElement {
	static styles = [globalStyles, progressBarStyles]

	render() {
		return html``
	}
}
