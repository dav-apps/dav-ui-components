import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { globalStyles } from '../styles.js'
import { iconButtonStyles } from './icon-button.styles.js'

export const iconButtonTagName = "dav-icon-button"

@customElement(iconButtonTagName)
export class IconButton extends LitElement {
	static styles = [globalStyles, iconButtonStyles]

	render() {
		return html`
			<button>
				<slot></slot>
			</button>
      `
	}
}