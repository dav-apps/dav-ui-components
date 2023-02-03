import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { globalStyles } from '../styles.js'
import { linkButtonStyles } from './link-button.styles.js'

export const linkButtonTagName = "dav-link-button"

@customElement(linkButtonTagName)
export class LinkButton extends LitElement {
	static styles = [globalStyles, linkButtonStyles]

	@property() url: string = ""
	@property() target: string = "blank"

	render() {
		return html`
			<a href=${this.url} target=${this.target}>
				<slot></slot>
			</a>
		`
	}
}