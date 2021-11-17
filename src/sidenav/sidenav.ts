import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { getGlobalStyleHtml } from '../utils.js'
import { sidenavStyles } from './sidenav.styles.js'

export const sidenavTagName = "dav-sidenav"

@customElement(sidenavTagName)
export class Sidenav extends LitElement {
	static styles = [sidenavStyles]

	render() {
		return html`
			${getGlobalStyleHtml()}

			<div id="container" class="shadow">
				<slot></slot>
			</div>
		`
	}
}