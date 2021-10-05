export interface DropdownOption {
	key: string
	value: string
	type: DropdownOptionType
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