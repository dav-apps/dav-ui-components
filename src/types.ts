export type BottomSheetPosition = "auto" | "top" | "bottom"

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

export enum ButtonSize {
	normal = "normal",
	small = "small"
}

export enum DropdownOptionType {
	option,
	divider
}

export enum SidenavMode {
	side = "side",
	over = "over"
}

export enum Alignment {
	start = "start",
	center = "center",
	end = "end"
}

export enum HeaderSize {
	large = "large",
	normal = "normal",
	small = "small"
}

export enum Orientation {
	vertical = "vertical",
	horizontal = "horizontal"
}

export enum ListItemSize {
	small = "small",
	normal = "normal"
}
