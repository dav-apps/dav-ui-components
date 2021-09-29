import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { getGlobalStyleHtml } from '../utils'

export const messageBarTagName = "dav-message-bar"

@customElement(messageBarTagName)
export class MessageBar extends LitElement {
	static styles = css`
		i {
			font-size: 16px
		}
	`

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
				style="display: flex; align-items: center; font-size: 13px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
				role="alert">

				${this.getIcon()}

				<span style="margin-left: 0.75rem">
					<slot></slot>
				</span>
			</div>
		`
	}
}