import '@fluentui/web-components'

import { Dialog, dialogTagName } from './src/dialog/dialog'
import { MessageBar, messageBarTagName } from './src/message-bar/message-bar'
import { Toggle, toggleTagName } from './src/toggle/toggle'

declare global {
	interface HTMLElementTagNameMap {
		[dialogTagName]: Dialog,
		[messageBarTagName]: MessageBar,
		[toggleTagName]: Toggle,
	}
}

export {
	Dialog,
	Toggle
}