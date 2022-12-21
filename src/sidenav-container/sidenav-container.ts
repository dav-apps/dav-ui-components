import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { globalStyles } from '../styles.js'
import { sidenavContainerStyles } from './sidenav-container.styles.js'

export const sidenavContainerTagName = "dav-sidenav-container"

@customElement(sidenavContainerTagName)
export class SidenavContainer extends LitElement {
	static styles = [globalStyles, sidenavContainerStyles]

	render() {
		return html`
			<slot></slot>
		`
	}
}