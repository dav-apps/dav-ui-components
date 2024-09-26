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

export enum ThemeColor {
	primary = "primary",
	secondary = "secondary",
	tertiary = "tertiary",
	error = "error"
}

export enum BadgeSize {
	sm = "sm",
	md = "md"
}

export enum ButtonSize {
	xs = "xs",
	sm = "sm",
	md = "md"
}

export enum IconButtonShape {
	round = "round",
	square = "square"
}

export enum DropdownOptionType {
	option = "option",
	divider = "divider",
	color = "color"
}

export enum DropdownPosition {
	top = "top",
	bottom = "bottom"
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
	sm = "sm",
	md = "md",
	lg = "lg"
}

export enum Orientation {
	vertical = "vertical",
	horizontal = "horizontal"
}

export enum ListItemSize {
	sm = "sm",
	md = "md",
	lg = "lg"
}

export enum MessageBarType {
	info = "info",
	success = "success",
	error = "error"
}
