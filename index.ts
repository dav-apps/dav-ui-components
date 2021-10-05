import '@fluentui/web-components'

import { setLocale } from './src/utils'
import { DropdownOption, DropdownOptionType } from './src/types'

// Components
import { Button, buttonTagName } from './src/button/button'
import { Dialog, dialogTagName } from './src/dialog/dialog'
import { Dropdown, dropdownTagName } from './src/dropdown/dropdown'
import { MessageBar, messageBarTagName } from './src/message-bar/message-bar'
import { Toggle, toggleTagName } from './src/toggle/toggle'

declare global {
	interface HTMLElementTagNameMap {
		[buttonTagName]: Button,
		[dialogTagName]: Dialog,
		[dropdownTagName]: Dropdown,
		[messageBarTagName]: MessageBar,
		[toggleTagName]: Toggle,
	}
}

export {
	setLocale,
	DropdownOption,
	DropdownOptionType,
	Button,
	Dialog,
	Dropdown,
	MessageBar,
	Toggle
}