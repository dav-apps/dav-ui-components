import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

export const sidenavContainerTagName = "dav-sidenav-container"

@customElement(sidenavContainerTagName)
export class SidenavContainer extends LitElement {
	static styles = css`
		:host {
			display: flex;
		}
	`

	render() {
		return html`
			<slot></slot>
		`
	}
}