import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { globalStyles } from '../styles.js'
import { iconButtonStyles } from './icon-button.styles.js'

export const iconButtonTagName = "dav-icon-button"

@customElement(iconButtonTagName)
export class IconButton extends LitElement {
	static styles = [globalStyles, iconButtonStyles]

	@state() private iconButtonClasses = {
		selected: false
	}

	@property({ type: Boolean }) selected: boolean = false

	render() {
		this.iconButtonClasses.selected = this.selected

		return html`
			<button
				class=${classMap(this.iconButtonClasses)}>
				<slot></slot>
			</button>
      `
	}
}