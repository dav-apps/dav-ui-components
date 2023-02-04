export interface DropdownOption {
	key: string
	value: string
	type: DropdownOptionType
}

export interface Settings {
	locale: Locale
	theme: Theme
}

export interface Locale {
	dropdown: {
		defaultDropdownButtonText: string
	}
}

export enum Theme {
	light = "light",
	dark = "dark"
}

export enum ButtonColor {
	primary = "primary",
	secondary = "secondary",
	tertiary = "tertiary",
	error = "error"
}

export enum DropdownOptionType {
	option,
	divider
}

export enum SidenavMode {
	side = "side",
	over = "over"
}

export enum HeaderSize {
	big = "big",
	normal = "normal",
	small = "small"
}