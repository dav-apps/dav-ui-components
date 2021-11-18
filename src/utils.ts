import { html } from 'lit'
import { en, de } from './locale.js'
import { Theme, ButtonType, SidenavMode } from './types.js'

var locale: string = "en"
var theme: Theme = Theme.light
var themeChangeCallbacks: Function[] = []

export function getGlobalStyleHtml() {
	return html`
		<!-- Bootstrap -->
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

		<!-- Office UI Fabric Core -->
		<link href="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-core/11.0.0/css/fabric.min.css" rel="stylesheet" />
	`
}

export function setLocale(lang: string) {
	locale = lang
}

export function getLocale() {
	if (locale.startsWith("de")) {
		return de
	} else {
		return en
	}
}

export function setTheme(darkTheme: boolean) {
	theme = darkTheme ? Theme.dark : Theme.light

	// Trigger all callbacks with the new theme
	for (let callback of themeChangeCallbacks) {
		callback(theme)
	}
}

export function subscribeThemeChange(callback: Function) {
	themeChangeCallbacks.push(callback)
	callback(theme)
}

export function unsubscribeThemeChange(callback: Function) {
	let i = themeChangeCallbacks.indexOf(callback)
	if (i != -1) themeChangeCallbacks.splice(i, 1)
}

export function convertStringToButtonType(value: string): ButtonType {
	switch (value) {
		case "accent":
			return ButtonType.accent
		case "danger":
			return ButtonType.danger
		default:
			return ButtonType.default
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