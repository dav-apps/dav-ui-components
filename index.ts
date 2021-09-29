import '@fluentui/web-components'

import { Dialog, dialogTagName } from './src/dialog/dialog'
import { Toggle, toggleTagName } from './src/toggle/toggle'

declare global {
	interface HTMLElementTagNameMap {
		[dialogTagName]: Dialog,
		[toggleTagName]: Toggle,
	}
}

export {
	Dialog,
	Toggle
}