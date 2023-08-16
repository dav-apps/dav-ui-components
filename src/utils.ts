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
	style.setProperty("--dav-color-primary", `var(--dav-color-primary-${theme})`)
	style.setProperty(
		"--dav-color-primary-hover",
		`var(--dav-color-primary-${theme}-hover)`
	)
	style.setProperty(
		"--dav-color-primary-focus",
		`var(--dav-color-primary-${theme}-focus)`
	)
	style.setProperty(
		"--dav-color-on-primary",
		`var(--dav-color-on-primary-${theme})`
	)
	style.setProperty(
		"--dav-color-primary-container",
		`var(--dav-color-primary-container-${theme})`
	)
	style.setProperty(
		"--dav-color-on-primary-container",
		`var(--dav-color-on-primary-container-${theme})`
	)
	style.setProperty(
		"--dav-color-secondary",
		`var(--dav-color-secondary-${theme})`
	)
	style.setProperty(
		"--dav-color-secondary-hover",
		`var(--dav-color-secondary-${theme}-hover)`
	)
	style.setProperty(
		"--dav-color-secondary-focus",
		`var(--dav-color-secondary-${theme}-focus)`
	)
	style.setProperty(
		"--dav-color-on-secondary",
		`var(--dav-color-on-secondary-${theme})`
	)
	style.setProperty(
		"--dav-color-secondary-container",
		`var(--dav-color-secondary-container-${theme})`
	)
	style.setProperty(
		"--dav-color-secondary-container-hover",
		`var(--dav-color-secondary-container-${theme}-hover)`
	)
	style.setProperty(
		"--dav-color-secondary-container-focus",
		`var(--dav-color-secondary-container-${theme}-focus)`
	)
	style.setProperty(
		"--dav-color-on-secondary-container",
		`var(--dav-color-on-secondary-container-${theme})`
	)
	style.setProperty(
		"--dav-color-tertiary",
		`var(--dav-color-tertiary-${theme})`
	)
	style.setProperty(
		"--dav-color-tertiary-hover",
		`var(--dav-color-tertiary-${theme}-hover)`
	)
	style.setProperty(
		"--dav-color-tertiary-focus",
		`var(--dav-color-tertiary-${theme}-focus)`
	)
	style.setProperty(
		"--dav-color-on-tertiary",
		`var(--dav-color-on-tertiary-${theme})`
	)
	style.setProperty(
		"--dav-color-tertiary-container",
		`var(--dav-color-tertiary-container-${theme})`
	)
	style.setProperty(
		"--dav-color-on-tertiary-container",
		`var(--dav-color-on-tertiary-container-${theme})`
	)
	style.setProperty("--dav-color-error", `var(--dav-color-error-${theme})`)
	style.setProperty(
		"--dav-color-error-hover",
		`var(--dav-color-error-${theme}-hover)`
	)
	style.setProperty(
		"--dav-color-error-focus",
		`var(--dav-color-error-${theme}-focus)`
	)
	style.setProperty(
		"--dav-color-error-container",
		`var(--dav-color-error-container-${theme})`
	)
	style.setProperty(
		"--dav-color-on-error",
		`var(--dav-color-on-error-${theme})`
	)
	style.setProperty(
		"--dav-color-on-error-container",
		`var(--dav-color-on-error-container-${theme})`
	)
	style.setProperty(
		"--dav-color-background",
		`var(--dav-color-background-${theme})`
	)
	style.setProperty(
		"--dav-color-on-background",
		`var(--dav-color-on-background-${theme})`
	)
	style.setProperty("--dav-color-surface", `var(--dav-color-surface-${theme})`)
	style.setProperty(
		"--dav-color-on-surface",
		`var(--dav-color-on-surface-${theme})`
	)
	style.setProperty(
		"--dav-color-surface-variant",
		`var(--dav-color-surface-variant-${theme})`
	)
	style.setProperty(
		"--dav-color-on-surface-variant",
		`var(--dav-color-on-surface-variant-${theme})`
	)
	style.setProperty(
		"--dav-color-on-surface-variant-hover",
		`var(--dav-color-on-surface-variant-${theme}-hover)`
	)
	style.setProperty(
		"--dav-color-on-surface-variant-focus",
		`var(--dav-color-on-surface-variant-${theme}-focus)`
	)
	style.setProperty("--dav-color-outline", `var(--dav-color-outline-${theme})`)
	style.setProperty(
		"--dav-color-inverse-on-surface",
		`var(--dav-color-inverse-on-surface-${theme})`
	)
	style.setProperty(
		"--dav-color-inverse-surface",
		`var(--dav-color-inverse-surface-${theme})`
	)
	style.setProperty(
		"--dav-color-inverse-primary",
		`var(--dav-color-inverse-primary-${theme})`
	)
	style.setProperty("--dav-color-shadow", `var(--dav-color-shadow-${theme})`)
	style.setProperty(
		"--dav-color-shadow-tint",
		`var(--dav-color-shadow-tint-${theme})`
	)
	style.setProperty(
		"--dav-color-outline-variant",
		`var(--dav-color-outline-variant-${theme})`
	)
	style.setProperty("--dav-color-scrim", `var(--dav-color-scrim-${theme})`)
}

//#region Settings functions
export function subscribeSettingsChange(callback: Function) {
	settingsChangeCallbacks.push(callback)
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

export function setTheme(darkTheme: boolean) {
	settings.theme = darkTheme ? Theme.dark : Theme.light
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
