import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { globalStyles } from '../styles.js'
import { settingStyles } from './setting.styles.js'

export const settingTagName = "dav-setting"

@customElement(settingTagName)
export class Setting extends LitElement {
	static styles = [globalStyles, settingStyles]

	render() {
		return html`
			<div>
				
			</div>
		`
	}
}