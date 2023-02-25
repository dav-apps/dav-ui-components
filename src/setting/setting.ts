import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { settingStyles } from "./setting.styles.js"

export const settingTagName = "dav-setting"

@customElement(settingTagName)
export class Setting extends LitElement {
	static styles = [globalStyles, settingStyles]

	@property() header: string = ""

	render() {
		return html`
			<div id="setting-container">
				<p id="setting-header">
					${this.header}
				</p>

				<div>
					<slot></slot>
				</div>
			</div>
		`
	}
}
