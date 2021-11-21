import { css } from "@lit/reactive-element"

export const headerStyles = css`
	#header {
		display: flex;
		justify-content: center;
	}

	#header.darkTheme {
		color: white;
	}

	.icon-button {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
	}

	.icon-button.darkTheme {
		color: white;
	}

	#back-button {
		width: 40px;
		height: 35px;
	}

	#edit-button {
		width: 32px;
		height: 35px;
	}

	.icon-button:hover, .icon-button:active {
		background-color: var(--light-theme-hover-background-color, var(--default-light-theme-hover-background-color));
		border-color: var(--light-theme-hover-background-color, var(--default-light-theme-hover-background-color));
	}

	.icon-button.darkTheme:hover, .icon-button.darkTheme:active {
		background-color: var(--dark-theme-hover-background-color, var(--default-dark-theme-hover-background-color));
		border-color: var(--dark-theme-hover-background-color, var(--default-dark-theme-hover-background-color));
	}
`