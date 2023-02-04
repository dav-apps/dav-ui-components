import { html } from 'lit'
import { en, de } from './locale.js'
import {
	Theme,
	ButtonColor,
	SidenavMode,
	HeaderSize,
	Settings
} from './types.js'

var settingsChangeCallbacks: Function[] = []

var settings: Settings = {
	locale: en,
	theme: Theme.light
}

export function getGlobalStyleHtml() {
	return html`
		<!-- Bootstrap -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

		<!-- Office UI Fabric Core -->
		<link href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css" rel="stylesheet" />
	`
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

export function convertStringToSidenavMode(value: string): SidenavMode {
	switch (value) {
		case "over":
			return SidenavMode.over
		default:
			return SidenavMode.side
	}
}

export function convertStringToHeaderSize(value: string): HeaderSize {
	switch (value) {
		case "big":
			return HeaderSize.big
		case "small":
			return HeaderSize.small
		default:
			return HeaderSize.normal
	}
}
//#endregion