import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { globalStyles } from '../styles.js'
import { bottomSheetStyles } from './bottom-sheet.styles.js'

export const bottomSheetTagName = "dav-bottom-sheet"

@customElement(bottomSheetTagName)
export class BottomSheet extends LitElement {
	static styles = [globalStyles, bottomSheetStyles]

	private overlayClick() {
		this.dispatchEvent(new CustomEvent("dismiss"))
	}

	render() {
		return html`
			<div id="container">
				<div
					id="overlay"
					@click=${this.overlayClick}>
				</div>
			</div>
		`
	}
}