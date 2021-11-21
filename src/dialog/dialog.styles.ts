import { css } from "@lit/reactive-element"

export const dialogStyles = css`
	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--overlay-color, var(--default-overlay-color));
	}

	#dialog {
		background-color: var(--light-theme-color-tertiary, var(--default-light-theme-color-tertiary));
		margin: 2ex;
		padding: 2ex;
		border-radius: 5pt;
		min-width: 280px;
	}

	#dialog.darkTheme {
		background-color: var(--dark-theme-color-tertiary, var(--default-dark-theme-color-tertiary));
	}

	#header {
		margin-bottom: 20px;
		font-weight: 100;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	#header.darkTheme {
		color: white;
	}
`