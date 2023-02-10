import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { globalStyles } from '../styles.js'
import { iconTextButtonStyles } from './icon-text-button.styles.js'

export const iconTextButtonTagName = "dav-icon-text-button"

@customElement(iconTextButtonTagName)
export class IconTextButton extends LitElement {
	static styles = [globalStyles, iconTextButtonStyles]

	render() {
		return html`
			<h1>Hello World</h1>
		`
	}
}