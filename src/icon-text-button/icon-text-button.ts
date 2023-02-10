import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { globalStyles } from '../styles.js'
import { iconTextButtonStyles } from './icon-text-button.styles.js'

export const iconTextButtonTagName = "dav-icon-text-button"

@customElement(iconTextButtonTagName)
export class IconTextButton extends LitElement {
	static styles = [globalStyles, iconTextButtonStyles]

	@property({ type: String }) label: string = ""

	render() {
		return html`
			<button>
				<div id="icon-container">
					<slot></slot>
				</div>

				<span id="label">${this.label}</span>
			</button>
		`
	}
}