import { html } from 'lit'
import { en, de } from './locale.js'
import { Theme, ButtonType } from './types.js'

var locale: string = "en"

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

export function convertStringToTheme(theme: string) {
	switch (theme) {
		case "dark":
			return Theme.dark
		default:
			return Theme.light
	}
}

export function convertStringToButtonType(value: string) {
	switch (value) {
		case "accent":
			return ButtonType.accent
		case "danger":
			return ButtonType.danger
		default:
			return ButtonType.default
	}
}