import { hasWindow, setLocale, setTheme } from "./src/utils.js"
import { Theme, DropdownOption, DropdownOptionType } from "./src/types.js"

// Components
import { Badge, badgeTagName } from "./src/badge/badge.js"
import {
	BlurhashImage,
	blurhashImageTagName
} from "./src/blurhash-image/blurhash-image.js"
import {
	BottomSheet,
	bottomSheetTagName
} from "./src/bottom-sheet/bottom-sheet.js"
import { Button, buttonTagName } from "./src/button/button.js"
import { Calendar, calendarTagName } from "./src/calendar/calendar.js"
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
	ProfileCard,
	profileCardTagName
} from "./src/profile-card/profile-card.js"
import {
	ProgressBar,
	progressBarTagName
} from "./src/progress-bar/progress-bar.js"
import {
	ProgressRing,
	progressRingTagName
} from "./src/progress-ring/progress-ring.js"
import { Search, searchTagName } from "./src/search/search.js"
import { Setting, settingTagName } from "./src/setting/setting.js"
import { Sidenav, sidenavTagName } from "./src/sidenav/sidenav.js"
import {
	SidenavItem,
	sidenavItemTagName
} from "./src/sidenav-item/sidenav-item.js"
import { Skeleton, skeletonTagName } from "./src/skeleton/skeleton.js"
import { TabBar, tabBarTagName } from "./src/tab-bar/tab-bar.js"
import {
	TabBarItem,
	tabBarItemTagName
} from "./src/tab-bar-item/tab-bar-item.js"
import { Textarea, textareaTagName } from "./src/textarea/textarea.js"
import { Textfield, textfieldTagName } from "./src/textfield/textfield.js"
import { TimePicker, timePickerTagName } from "./src/time-picker/time-picker.js"
import { Toast, toastTagName } from "./src/toast/toast.js"
import { Toggle, toggleTagName } from "./src/toggle/toggle.js"
import { Tree, treeTagName } from "./src/tree/tree.js"
import { TreeItem, treeItemTagName } from "./src/tree-item/tree-item.js"

declare global {
	interface HTMLElementTagNameMap {
		[badgeTagName]: Badge
		[blurhashImageTagName]: BlurhashImage
		[bottomSheetTagName]: BottomSheet
		[buttonTagName]: Button
		[calendarTagName]: Calendar
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
		[profileCardTagName]: ProfileCard
		[progressBarTagName]: ProgressBar
		[progressRingTagName]: ProgressRing
		[searchTagName]: Search
		[settingTagName]: Setting
		[sidenavTagName]: Sidenav
		[sidenavItemTagName]: SidenavItem
		[skeletonTagName]: Skeleton
		[tabBarTagName]: TabBar
		[tabBarItemTagName]: TabBarItem
		[textareaTagName]: Textarea
		[textfieldTagName]: Textfield
		[timePickerTagName]: TimePicker
		[toastTagName]: Toast
		[toggleTagName]: Toggle
		[treeTagName]: Tree
		[treeItemTagName]: TreeItem
	}
}

if (hasWindow()) {
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
	Badge,
	BlurhashImage,
	BottomSheet,
	Button,
	Calendar,
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
	ProfileCard,
	ProgressBar,
	ProgressRing,
	Search,
	Setting,
	Sidenav,
	SidenavItem,
	Skeleton,
	TabBar,
	TabBarItem,
	Textarea,
	Textfield,
	TimePicker,
	Toast,
	Toggle,
	Tree,
	TreeItem
}
