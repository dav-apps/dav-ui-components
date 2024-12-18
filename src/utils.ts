import { en, de } from "./locale.js"
import {
	Theme,
	ThemeColor,
	BadgeSize,
	ButtonSize,
	IconButtonShape,
	DropdownPosition,
	SidenavMode,
	Settings,
	Alignment,
	HeaderSize,
	Orientation,
	ListItemSize,
	MessageBarType
} from "./types.js"

var settingsChangeCallbacks: Function[] = []

var settings: Settings = {
	locale: en,
	theme: Theme.light
}

export function setThemeColorVariables(
	style: CSSStyleDeclaration,
	theme: Theme
) {
	// Other variables
	style.setProperty(
		"--dav-color-scrim-opacity",
		`var(--dav-color-scrim-${theme}-opacity)`
	)

	// Color variables
	style.setProperty("--base-rgb", `var(--base-${theme}-rgb)`)
	style.setProperty(
		"--dav-color-primary-rgb",
		`var(--dav-color-primary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-primary-container-rgb",
		`var(--dav-color-primary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-primary-rgb",
		`var(--dav-color-on-primary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-primary-container-rgb",
		`var(--dav-color-on-primary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-inverse-primary-rgb",
		`var(--dav-color-inverse-primary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-secondary-rgb",
		`var(--dav-color-secondary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-secondary-container-rgb",
		`var(--dav-color-secondary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-secondary-rgb",
		`var(--dav-color-on-secondary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-secondary-container-rgb",
		`var(--dav-color-on-secondary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-tertiary-rgb",
		`var(--dav-color-tertiary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-tertiary-container-rgb",
		`var(--dav-color-tertiary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-tertiary-rgb",
		`var(--dav-color-on-tertiary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-tertiary-container-rgb",
		`var(--dav-color-on-tertiary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-rgb",
		`var(--dav-color-surface-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-dim-rgb",
		`var(--dav-color-surface-dim-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-bright-rgb",
		`var(--dav-color-surface-bright-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-container-lowest-rgb",
		`var(--dav-color-surface-container-lowest-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-container-low-rgb",
		`var(--dav-color-surface-container-low-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-container-rgb",
		`var(--dav-color-surface-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-container-high-rgb",
		`var(--dav-color-surface-container-high-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-container-highest-rgb",
		`var(--dav-color-surface-container-highest-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-variant-rgb",
		`var(--dav-color-surface-variant-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-surface-rgb",
		`var(--dav-color-on-surface-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-surface-variant-rgb",
		`var(--dav-color-on-surface-variant-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-inverse-surface-rgb",
		`var(--dav-color-inverse-surface-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-inverse-on-surface-rgb",
		`var(--dav-color-inverse-on-surface-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-background-rgb",
		`var(--dav-color-background-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-background-rgb",
		`var(--dav-color-on-background-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-error-rgb",
		`var(--dav-color-error-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-error-container-rgb",
		`var(--dav-color-error-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-error-rgb",
		`var(--dav-color-on-error-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-error-container-rgb",
		`var(--dav-color-on-error-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-outline-rgb",
		`var(--dav-color-outline-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-outline-variant-rgb",
		`var(--dav-color-outline-variant-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-shadow-rgb",
		`var(--dav-color-shadow-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-tint-rgb",
		`var(--dav-color-surface-tint-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-scrim-rgb",
		`var(--dav-color-scrim-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-scrollbar-rgb",
		`var(--dav-color-scrollbar-${theme}-rgb)`
	)

	// State variables
	style.setProperty(
		"--dav-color-primary-hover-rgb",
		`var(--dav-color-primary-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-primary-focus-rgb",
		`var(--dav-color-primary-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-primary-container-hover-rgb",
		`var(--dav-color-primary-container-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-primary-container-focus-rgb",
		`var(--dav-color-primary-container-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-secondary-hover-rgb",
		`var(--dav-color-secondary-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-secondary-focus-rgb",
		`var(--dav-color-secondary-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-secondary-container-hover-rgb",
		`var(--dav-color-secondary-container-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-secondary-container-focus-rgb",
		`var(--dav-color-secondary-container-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-tertiary-hover-rgb",
		`var(--dav-color-tertiary-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-tertiary-focus-rgb",
		`var(--dav-color-tertiary-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-tertiary-container-hover-rgb",
		`var(--dav-color-tertiary-container-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-tertiary-container-focus-rgb",
		`var(--dav-color-tertiary-container-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-error-hover-rgb",
		`var(--dav-color-error-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-error-focus-rgb",
		`var(--dav-color-error-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-error-container-hover-rgb",
		`var(--dav-color-error-container-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-error-container-focus-rgb",
		`var(--dav-color-error-container-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-hover-rgb",
		`var(--dav-color-surface-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-focus-rgb",
		`var(--dav-color-surface-focus-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-variant-hover-rgb",
		`var(--dav-color-surface-variant-hover-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-variant-focus-rgb",
		`var(--dav-color-surface-variant-focus-${theme}-rgb)`
	)
}

export function hasWindow() {
	return typeof window != "undefined"
}

export function getPositionOfElement(element: Element) {
	let rect = element.getBoundingClientRect()

	// Get the total scroll top of all parents
	let currentElement = element
	let scrollTop = 0
	let scrollLeft = 0

	while (getParentElement(currentElement) != null) {
		scrollTop += currentElement.scrollTop
		scrollLeft += currentElement.scrollLeft

		currentElement = getParentElement(currentElement) as Element
	}

	return {
		x: rect.x + window.scrollX + scrollLeft,
		y: rect.y + window.scrollY + scrollTop
	}
}

function getParentElement(element: Element) {
	let parent = element.getRootNode()

	if (parent == document) {
		return element.parentElement
	}

	return (parent as ShadowRoot).host
}

//#region Settings functions
export function subscribeSettingsChange(callback: Function) {
	settingsChangeCallbacks.push(callback)
	callback(settings)
}

export function unsubscribeSettingsChange(callback: Function) {
	let i = settingsChangeCallbacks.indexOf(callback)
	if (i != -1) settingsChangeCallbacks.splice(i, 1)
}

function triggerSettingsChangedCallbacks() {
	for (let callback of settingsChangeCallbacks) {
		callback(settings)
	}
}

export function getSettings(): Settings {
	return settings
}

export function setLocale(lang: string) {
	let locale = en

	if (lang.startsWith("de")) {
		locale = de
	}

	settings.locale = locale
	triggerSettingsChangedCallbacks()
}

export function setTheme(theme: Theme) {
	settings.theme = theme
	triggerSettingsChangedCallbacks()
}
//#endregion

//#region Enum converter functions
export function convertStringToThemeColor(value: string): ThemeColor {
	switch (value) {
		case "secondary":
			return ThemeColor.secondary
		case "tertiary":
			return ThemeColor.tertiary
		case "error":
			return ThemeColor.error
		default:
			return ThemeColor.primary
	}
}

export function convertStringToBadgeSize(value: string): BadgeSize {
	switch (value) {
		case "sm":
			return BadgeSize.sm
		default:
			return BadgeSize.md
	}
}

export function convertStringToButtonSize(value: string): ButtonSize {
	switch (value) {
		case "sm":
			return ButtonSize.sm
		case "xs":
			return ButtonSize.xs
		default:
			return ButtonSize.md
	}
}

export function convertStringToIconButtonShape(value: string): IconButtonShape {
	switch (value) {
		case "square":
			return IconButtonShape.square
		default:
			return IconButtonShape.round
	}
}

export function convertStringToDropdownPosition(
	value: string
): DropdownPosition {
	switch (value) {
		case "top":
			return DropdownPosition.top
		default:
			return DropdownPosition.bottom
	}
}

export function convertStringToSidenavMode(value: string): SidenavMode {
	switch (value) {
		case "over":
			return SidenavMode.over
		default:
			return SidenavMode.side
	}
}

export function convertStringToAlignment(value: string): Alignment {
	switch (value) {
		case "start":
			return Alignment.start
		case "end":
			return Alignment.end
		default:
			return Alignment.center
	}
}

export function convertStringToHeaderSize(value: string): HeaderSize {
	switch (value) {
		case "lg":
			return HeaderSize.lg
		case "sm":
			return HeaderSize.sm
		default:
			return HeaderSize.md
	}
}

export function convertStringToOrientation(value: string): Orientation {
	switch (value) {
		case "horizontal":
			return Orientation.horizontal
		default:
			return Orientation.vertical
	}
}

export function convertStringToListItemSize(value: string): ListItemSize {
	switch (value) {
		case "sm":
			return ListItemSize.sm
		case "lg":
			return ListItemSize.lg
		default:
			return ListItemSize.md
	}
}

export function convertStringToMessageBarType(value: string): MessageBarType {
	switch (value) {
		case "success":
			return MessageBarType.success
		case "error":
			return MessageBarType.error
		default:
			return MessageBarType.info
	}
}
//#endregion
