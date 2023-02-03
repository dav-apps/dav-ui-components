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
import { IconButton, iconButtonTagName } from './src/icon-button/icon-button.js'
import { LinkButton, linkButtonTagName } from './src/link-button/link-button.js'
import { MessageBar, messageBarTagName } from './src/message-bar/message-bar.js'
import { NavigationBar, navigationBarTagName } from './src/navigation-bar/navigation-bar.js'
import { NavigationBarItem, navigationBarItemTagName } from './src/navigation-bar-item/navigation-bar-item.js'
import { Pagination, paginationTagName } from './src/pagination/pagination.js'
import { Panel, panelTagName } from './src/panel/panel.js'
import { ProgressRing, progressRingTagName } from './src/progress-ring/progress-ring.js'
import { Setting, settingTagName } from './src/setting/setting.js'
import { Sidenav, sidenavTagName } from './src/sidenav/sidenav.js'
import { SidenavContainer, sidenavContainerTagName } from './src/sidenav-container/sidenav-container.js'
import { SidenavItem, sidenavItemTagName } from './src/sidenav-item/sidenav-item.js'
import { TabBar, tabBarTagName } from './src/tab-bar/tab-bar.js'
import { TabBarItem, tabBarItemTagName } from './src/tab-bar-item/tab-bar-item.js'
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
		[iconButtonTagName]: IconButton,
		[linkButtonTagName]: LinkButton,
		[messageBarTagName]: MessageBar,
		[navigationBarTagName]: NavigationBar,
		[navigationBarItemTagName]: NavigationBarItem,
		[paginationTagName]: Pagination,
		[panelTagName]: Panel,
		[progressRingTagName]: ProgressRing,
		[settingTagName]: Setting,
		[sidenavTagName]: Sidenav,
		[sidenavContainerTagName]: SidenavContainer,
		[sidenavItemTagName]: SidenavItem,
		[tabBarTagName]: TabBar,
		[tabBarItemTagName]: TabBarItem,
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
	IconButton,
	LinkButton,
	MessageBar,
	NavigationBar,
	NavigationBarItem,
	Pagination,
	Panel,
	ProgressRing,
	Setting,
	Sidenav,
	SidenavContainer,
	SidenavItem,
	TabBar,
	TabBarItem,
	Textarea,
	Textfield,
	Toggle
}