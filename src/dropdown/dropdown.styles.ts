import { css } from "@lit/reactive-element"

export const dropdownStyles = css`
	#dropdown {
		position: relative;
		display: inline-block;
	}

	#dropdown-button {
		display: flex;
		background-color: white;
		border: 1px solid #a6a6a6;
		border-radius: 4px;
		padding: 5px 10px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
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
		text-align: left;
		height: 21px;
		line-height: 21px;
		overflow: hidden;
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

	#dropdown-content {
		display: none;
		position: absolute;
		overflow: auto;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		border-radius: 4px;
	}

	.dropdown-option {
		margin: 0px;
		padding: 6px 10px;
		display: block;
		border: none;
		width: 100%;
		text-align: left;
		background-color: white;
	}

	.dropdown-option.darkTheme {
		color: white;
		background-color: var(--dark-theme-color-tertiary, var(--default-dark-theme-color-tertiary));
	}

	.dropdown-option:focus, .dropdown-option:hover {
		background-color: var(--light-theme-hover-background-color, var(--default-light-theme-hover-background-color));
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