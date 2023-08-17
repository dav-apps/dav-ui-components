import { html } from "lit"
import { en, de } from "./locale.js"
import {
	Theme,
	ButtonColor,
	ButtonSize,
	SidenavMode,
	Settings,
	Alignment,
	HeaderSize,
	Orientation,
	ListItemSize
} from "./types.js"

var settingsChangeCallbacks: Function[] = []

var settings: Settings = {
	locale: en,
	theme: Theme.light
}

export function getGlobalStyleHtml() {
	return html`
		<!-- Bootstrap -->
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
			crossorigin="anonymous"
		/>

		<!-- Office UI Fabric Core -->
		<link
			href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css"
			rel="stylesheet"
		/>
	`
}

export function setThemeColorVariables(
	style: CSSStyleDeclaration,
	theme: Theme
) {
	style.setProperty(
		"--dav-color-primary-rgb",
		`var(--dav-color-primary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-primary-rgb",
		`var(--dav-color-on-primary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-primary-container-rgb",
		`var(--dav-color-primary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-primary-container-rgb",
		`var(--dav-color-on-primary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-secondary-rgb",
		`var(--dav-color-secondary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-secondary-rgb",
		`var(--dav-color-on-secondary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-secondary-container-rgb",
		`var(--dav-color-secondary-container-${theme}-rgb)`
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
		"--dav-color-on-tertiary-rgb",
		`var(--dav-color-on-tertiary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-tertiary-container-rgb",
		`var(--dav-color-tertiary-container-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-tertiary-container-rgb",
		`var(--dav-color-on-tertiary-container-${theme}-rgb)`
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
		"--dav-color-background-rgb",
		`var(--dav-color-background-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-background-rgb",
		`var(--dav-color-on-background-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-rgb",
		`var(--dav-color-surface-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-surface-rgb",
		`var(--dav-color-on-surface-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-surface-variant-rgb",
		`var(--dav-color-surface-variant-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-on-surface-variant-rgb",
		`var(--dav-color-on-surface-variant-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-outline-rgb",
		`var(--dav-color-outline-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-inverse-on-surface-rgb",
		`var(--dav-color-inverse-on-surface-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-inverse-surface-rgb",
		`var(--dav-color-inverse-surface-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-inverse-primary-rgb",
		`var(--dav-color-inverse-primary-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-shadow-rgb",
		`var(--dav-color-shadow-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-shadow-tint-rgb",
		`var(--dav-color-shadow-tint-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-outline-variant-rgb",
		`var(--dav-color-outline-variant-${theme}-rgb)`
	)
	style.setProperty(
		"--dav-color-scrim-rgb",
		`var(--dav-color-scrim-${theme}-rgb)`
	)
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
export function convertStringToButtonColor(value: string): ButtonColor {
	switch (value) {
		case "secondary":
			return ButtonColor.secondary
		case "tertiary":
			return ButtonColor.tertiary
		case "error":
			return ButtonColor.error
		default:
			return ButtonColor.primary
	}
}

export function convertStringToButtonSize(value: string): ButtonSize {
	switch (value) {
		case "small":
			return ButtonSize.small
		default:
			return ButtonSize.normal
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
		case "large":
			return HeaderSize.large
		case "small":
			return HeaderSize.small
		default:
			return HeaderSize.normal
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
		case "small":
			return ListItemSize.small
		default:
			return ListItemSize.normal
	}
}
//#endregion
