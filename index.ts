import '@fluentui/web-components'

import { setLocale } from './src/utils'
import { DropdownOption } from './src/types'

// Components
import { Dialog, dialogTagName } from './src/dialog/dialog'
import { Dropdown, dropdownTagName } from './src/dropdown/dropdown'
import { MessageBar, messageBarTagName } from './src/message-bar/message-bar'
import { Toggle, toggleTagName } from './src/toggle/toggle'

declare global {
	interface HTMLElementTagNameMap {
		[dialogTagName]: Dialog,
		[dropdownTagName]: Dropdown,
		[messageBarTagName]: MessageBar,
		[toggleTagName]: Toggle,
	}
}

export {
	setLocale,
	DropdownOption,
	Dialog,
	Dropdown,
	MessageBar,
	Toggle
}