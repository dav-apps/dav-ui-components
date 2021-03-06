import { setLocale, setTheme } from './src/utils.js'
import { DropdownOption, DropdownOptionType } from './src/types.js'

// Components
import { Button, buttonTagName } from './src/button/button.js'
import { Checkbox, checkboxTagName } from './src/checkbox/checkbox.js'
import { ContextMenu, contextMenuTagName } from './src/context-menu/context-menu.js'
import { ContextMenuDivider, contextMenuDividerTagName } from './src/context-menu-divider/context-menu-divider.js'
import { ContextMenuItem, contextMenuItemTagName } from './src/context-menu-item/context-menu-item.js'
import { Dialog, dialogTagName } from './src/dialog/dialog.js'
import { Dropdown, dropdownTagName } from './src/dropdown/dropdown.js'
import { Header, headerTagName } from './src/header/header.js'
import { MessageBar, messageBarTagName } from './src/message-bar/message-bar.js'
import { Pagination, paginationTagName } from './src/pagination/pagination.js'
import { Panel, panelTagName } from './src/panel/panel.js'
import { ProgressRing, progressRingTagName } from './src/progress-ring/progress-ring.js'
import { Sidenav, sidenavTagName } from './src/sidenav/sidenav.js'
import { SidenavContainer, sidenavContainerTagName } from './src/sidenav-container/sidenav-container.js'
import { SidenavItem, sidenavItemTagName } from './src/sidenav-item/sidenav-item.js'
import { Textarea, textareaTagName } from './src/textarea/textarea.js'
import { Textfield, textfieldTagName } from './src/textfield/textfield.js'
import { Toggle, toggleTagName } from './src/toggle/toggle.js'

declare global {
	interface HTMLElementTagNameMap {
		[buttonTagName]: Button,
		[checkboxTagName]: Checkbox,
		[contextMenuTagName]: ContextMenu,
		[contextMenuDividerTagName]: ContextMenuDivider,
		[contextMenuItemTagName]: ContextMenuItem,
		[dialogTagName]: Dialog,
		[dropdownTagName]: Dropdown,
		[headerTagName]: Header,
		[messageBarTagName]: MessageBar,
		[paginationTagName]: Pagination,
		[panelTagName]: Panel,
		[progressRingTagName]: ProgressRing,
		[sidenavTagName]: Sidenav,
		[sidenavContainerTagName]: SidenavContainer,
		[sidenavItemTagName]: SidenavItem,
		[textareaTagName]: Textarea,
		[textfieldTagName]: Textfield,
		[toggleTagName]: Toggle,
	}
}

export {
	setLocale,
	setTheme,
	DropdownOption,
	DropdownOptionType,
	Button,
	Checkbox,
	ContextMenu,
	ContextMenuDivider,
	ContextMenuItem,
	Dialog,
	Dropdown,
	Header,
	MessageBar,
	Pagination,
	Panel,
	ProgressRing,
	Sidenav,
	SidenavContainer,
	SidenavItem,
	Textarea,
	Textfield,
	Toggle
}