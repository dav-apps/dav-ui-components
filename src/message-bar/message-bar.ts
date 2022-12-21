import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getGlobalStyleHtml } from '../utils.js'
import { globalStyles } from '../styles.js'
import { messageBarStyles } from './message-bar.styles.js'

export const messageBarTagName = "dav-message-bar"

@customElement(messageBarTagName)
export class MessageBar extends LitElement {
	static styles = [globalStyles, messageBarStyles]

	@property() type: string = "danger"

	getIcon() {
		let iconName = "ErrorBadge"

		if (this.type == "success") {
			iconName = "Completed"
		} else if (this.type == "warning") {
			iconName = "Info"
		}

		return html`
			<i class="ms-Icon ms-Icon--${iconName}" aria-hidden="true"></i>
		`
	}

	render() {
		return html`
			${getGlobalStyleHtml()}

			<div
				class="alert alert-${this.type}"
				style="display: flex; align-items: center; margin-bottom: 0px; font-size: 13px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
				role="alert">

				${this.getIcon()}

				<span style="margin-left: 0.75rem">
					<slot></slot>
				</span>
			</div>
		`
	}
}