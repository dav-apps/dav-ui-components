import { css } from "@lit/reactive-element"

export const dropdownStyles = css`
	#dropdown {
		position: relative;
		display: inline-block;
	}

	#dropdown-button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		border: 1px solid var(--md-sys-color-outline-light);
		border-radius: 6px;
		padding: 5px 10px;
		font-family: Roboto, sans-serif;
		font-size: 14px;
		background-color: var(--md-sys-color-surface-light);
		transition: 200ms;
	}

	#dropdown-button:hover, #dropdown-button:focus {
		border: 1px solid var(--md-sys-color-primary-light);
		background-color: rgb(var(--md-ref-palette-neutral95-rgb));
	}

	#dropdown-button.darkTheme {
		background-color: var(--dark-theme-color-tertiary, var(--default-dark-theme-color-tertiary));
		border-color: #787878;
	}

	#dropdown-button.disabled {
		cursor: not-allowed;
		background-color: #edededb3;
		border: none;
	}

	#dropdown-button.disabled.darkTheme {
		background-color: #2e3b46b3;
	}

	#dropdown-button span {
		height: 21px;
		line-height: 21px;
		overflow: hidden;
		color: var(--md-sys-color-on-surface-light);
	}

	#dropdown-button.darkTheme span {
		color: white;
	}

	#dropdown-button i {
		padding-top: 1px;
		font-size: 12px;
	}

	#dropdown-button.darkTheme i {
		color: white;
	}

	#dropdown-label {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		margin-bottom: 0.2rem;
		font-size: 14px;
	}

	#dropdown-label.darkTheme {
		color: white;
	}

	#chevron-svg-container {
		display: flex;
		width: 12px;
		fill: var(--md-sys-color-on-surface-light);
		transition: 200ms;
	}

	#dropdown-button:active #chevron-svg-container, #dropdown-button.active #chevron-svg-container {
		transform: translateY(2px);
	}

	#dropdown-content {
		display: none;
		position: absolute;
		overflow: auto;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
		font-family: Roboto, sans-serif;
		font-size: 14px;
		border-radius: 6px;
		background-color: var(--md-sys-color-surface-light);
	}

	#dropdown-content.visible {
		display: block;
	}

	.dropdown-option {
		margin: 0px;
		padding: 6px 10px;
		display: block;
		border: none;
		width: 100%;
		text-align: left;
		background-color: var(--md-sys-color-surface-light);
		color: var(--md-sys-color-on-surface-light);
		border-radius: 6px;
		margin: 4px;
		width: -webkit-fill-available;
		width: -moz-available;
		transition: 200ms;
	}

	.dropdown-option.darkTheme {
		color: white;
		background-color: var(--dark-theme-color-tertiary, var(--default-dark-theme-color-tertiary));
	}

	.dropdown-option:hover, .dropdown-option:focus {
		background-color: rgb(var(--md-ref-palette-neutral95-rgb));
	}

	.dropdown-option.selected {
		background-color: var(--md-sys-color-primary-light-hover);
	}

	.dropdown-option.darkTheme:focus, .dropdown-option.darkTheme:hover {
		background-color: var(--dark-theme-hover-background-color, var(--default-dark-theme-hover-background-color));
	}

	.dropdown-divider {
		background-color: white;
		border: none;
		margin: 0;
		padding: 0.5rem;
	}

	.dropdown-divider.darkTheme {
		color: white;
		background-color: var(--dark-theme-color-tertiary, var(--default-dark-theme-color-tertiary));
	}

	.dropdown-divider hr {
		margin: 0;
	}
`