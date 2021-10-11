import '@fluentui/web-components'

import { setLocale } from './src/utils'
import { DropdownOption, DropdownOptionType } from './src/types'

// Components
import { Button, buttonTagName } from './src/button/button'
import { Checkbox, checkboxTagName } from './src/checkbox/checkbox'
import { Dialog, dialogTagName } from './src/dialog/dialog'
import { Dropdown, dropdownTagName } from './src/dropdown/dropdown'
import { MessageBar, messageBarTagName } from './src/message-bar/message-bar'
import { Panel, panelTagName } from './src/panel/panel'
import { Toggle, toggleTagName } from './src/toggle/toggle'

declare global {
	interface HTMLElementTagNameMap {
		[buttonTagName]: Button,
		[checkboxTagName]: Checkbox,
		[dialogTagName]: Dialog,
		[dropdownTagName]: Dropdown,
		[messageBarTagName]: MessageBar,
		[panelTagName]: Panel,
		[toggleTagName]: Toggle,
	}
}

export {
	setLocale,
	DropdownOption,
	DropdownOptionType,
	Button,
	Checkbox,
	Dialog,
	Dropdown,
	MessageBar,
	Panel,
	Toggle
}