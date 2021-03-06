export interface DropdownOption {
	key: string
	value: string
	type: DropdownOptionType
}

export enum Theme {
	light = "light",
	dark = "dark"
}

export enum ButtonType {
	default = "default",
	accent = "accent",
	danger = "danger"
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