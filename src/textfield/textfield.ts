import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { textfieldStyles } from './textfield.styles.js'

export const textfieldTagName = "dav-textfield"

@customElement(textfieldTagName)
export class Textfield extends LitElement {
	static styles = [textfieldStyles]

	render() {
		return html`
			<div>
				<p id="textfield-label">
					Hello world
				</p>

				<input id="textfield-input">
			</div>
		`
	}
}