import { setLocale, setTheme } from "./src/utils.js"
import { Theme, DropdownOption, DropdownOptionType } from "./src/types.js"

// Components
import {
	BlurhashImage,
	blurhashImageTagName
} from "./src/blurhash-image/blurhash-image.js"
import {
	BottomSheet,
	bottomSheetTagName
} from "./src/bottom-sheet/bottom-sheet.js"
import { Button, buttonTagName } from "./src/button/button.js"
import { Card, cardTagName } from "./src/card/card.js"
import { Checkbox, checkboxTagName } from "./src/checkbox/checkbox.js"
import {
	ContextMenu,
	contextMenuTagName
} from "./src/context-menu/context-menu.js"
import {
	ContextMenuDivider,
	contextMenuDividerTagName
} from "./src/context-menu-divider/context-menu-divider.js"
import {
	ContextMenuItem,
	contextMenuItemTagName
} from "./src/context-menu-item/context-menu-item.js"
import { Dialog, dialogTagName } from "./src/dialog/dialog.js"
import { Dropdown, dropdownTagName } from "./src/dropdown/dropdown.js"
import { Header, headerTagName } from "./src/header/header.js"
import { IconButton, iconButtonTagName } from "./src/icon-button/icon-button.js"
import { IconCard, iconCardTagName } from "./src/icon-card/icon-card.js"
import {
	IconTextButton,
	iconTextButtonTagName
} from "./src/icon-text-button/icon-text-button.js"
import { LinkButton, linkButtonTagName } from "./src/link-button/link-button.js"
import { List, listTagName } from "./src/list/list.js"
import { ListItem, listItemTagName } from "./src/list-item/list-item.js"
import { MessageBar, messageBarTagName } from "./src/message-bar/message-bar.js"
import {
	NavigationBar,
	navigationBarTagName
} from "./src/navigation-bar/navigation-bar.js"
import {
	NavigationBarItem,
	navigationBarItemTagName
} from "./src/navigation-bar-item/navigation-bar-item.js"
import { Pagination, paginationTagName } from "./src/pagination/pagination.js"
import { Panel, panelTagName } from "./src/panel/panel.js"
import {
	ProgressRing,
	progressRingTagName
} from "./src/progress-ring/progress-ring.js"
import { Setting, settingTagName } from "./src/setting/setting.js"
import { Sidenav, sidenavTagName } from "./src/sidenav/sidenav.js"
import {
	SidenavItem,
	sidenavItemTagName
} from "./src/sidenav-item/sidenav-item.js"
import { TabBar, tabBarTagName } from "./src/tab-bar/tab-bar.js"
import {
	TabBarItem,
	tabBarItemTagName
} from "./src/tab-bar-item/tab-bar-item.js"
import { Textarea, textareaTagName } from "./src/textarea/textarea.js"
import { Textfield, textfieldTagName } from "./src/textfield/textfield.js"
import { Toggle, toggleTagName } from "./src/toggle/toggle.js"

declare global {
	interface HTMLElementTagNameMap {
		[blurhashImageTagName]: BlurhashImage
		[bottomSheetTagName]: BottomSheet
		[buttonTagName]: Button
		[cardTagName]: Card
		[checkboxTagName]: Checkbox
		[contextMenuTagName]: ContextMenu
		[contextMenuDividerTagName]: ContextMenuDivider
		[contextMenuItemTagName]: ContextMenuItem
		[dialogTagName]: Dialog
		[dropdownTagName]: Dropdown
		[headerTagName]: Header
		[iconButtonTagName]: IconButton
		[iconCardTagName]: IconCard
		[iconTextButtonTagName]: IconTextButton
		[linkButtonTagName]: LinkButton
		[listTagName]: List
		[listItemTagName]: ListItem
		[messageBarTagName]: MessageBar
		[navigationBarTagName]: NavigationBar
		[navigationBarItemTagName]: NavigationBarItem
		[paginationTagName]: Pagination
		[panelTagName]: Panel
		[progressRingTagName]: ProgressRing
		[settingTagName]: Setting
		[sidenavTagName]: Sidenav
		[sidenavItemTagName]: SidenavItem
		[tabBarTagName]: TabBar
		[tabBarItemTagName]: TabBarItem
		[textareaTagName]: Textarea
		[textfieldTagName]: Textfield
		[toggleTagName]: Toggle
	}
}

if (window) {
	window["davUIComponents"] = {
		setLocale,
		setTheme
	}
}

export {
	setLocale,
	setTheme,
	Theme,
	DropdownOption,
	DropdownOptionType,
	BlurhashImage,
	BottomSheet,
	Button,
	Card,
	Checkbox,
	ContextMenu,
	ContextMenuDivider,
	ContextMenuItem,
	Dialog,
	Dropdown,
	Header,
	IconButton,
	IconCard,
	IconTextButton,
	LinkButton,
	List,
	ListItem,
	MessageBar,
	NavigationBar,
	NavigationBarItem,
	Pagination,
	Panel,
	ProgressRing,
	Setting,
	Sidenav,
	SidenavItem,
	TabBar,
	TabBarItem,
	Textarea,
	Textfield,
	Toggle
}
