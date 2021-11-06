import '@fluentui/web-components'

import { setLocale } from './src/utils.js'
import { DropdownOption, DropdownOptionType } from './src/types.js'

// Components
import { Button, buttonTagName } from './src/button/button.js'
import { Checkbox, checkboxTagName } from './src/checkbox/checkbox.js'
import { ContextMenu, contextMenuTagName } from './src/context-menu/context-menu.js'
import { ContextMenuItem, contextMenuItemTagName } from './src/context-menu-item/context-menu-item.js'
import { Dialog, dialogTagName } from './src/dialog/dialog.js'
import { Dropdown, dropdownTagName } from './src/dropdown/dropdown.js'
import { MessageBar, messageBarTagName } from './src/message-bar/message-bar.js'
import { Panel, panelTagName } from './src/panel/panel.js'
import { Textarea, textareaTagName } from './src/textarea/textarea.js'
import { Textfield, textfieldTagName } from './src/textfield/textfield.js'
import { Toggle, toggleTagName } from './src/toggle/toggle.js'

declare global {
	interface HTMLElementTagNameMap {
		[buttonTagName]: Button,
		[checkboxTagName]: Checkbox,
		[contextMenuTagName]: ContextMenu,
		[contextMenuItemTagName]: ContextMenuItem,
		[dialogTagName]: Dialog,
		[dropdownTagName]: Dropdown,
		[messageBarTagName]: MessageBar,
		[panelTagName]: Panel,
		[textareaTagName]: Textarea,
		[textfieldTagName]: Textfield,
		[toggleTagName]: Toggle,
	}
}

export {
	setLocale,
	DropdownOption,
	DropdownOptionType,
	Button,
	Checkbox,
	ContextMenu,
	ContextMenuItem,
	Dialog,
	Dropdown,
	MessageBar,
	Panel,
	Textarea,
	Textfield,
	Toggle
}