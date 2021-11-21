import { css } from "@lit/reactive-element"

export const sidenavItemStyles = css`
	button {
		display: flex;
		align-items: center;
		width: 100%;
		height: 37px;
		border: none;
		border-radius: 4px;
		background-color: transparent;
		color: black;
		padding: 4px 14px;
		margin: 5px 0px;
		transition: 0.1s;
	}

	button:focus, button:hover {
		background-color: var(--light-theme-hover-background-color, var(--default-light-theme-hover-background-color));
	}

	button.darkTheme {
		color: white;
	}

	button.darkTheme:focus, button.darkTheme:hover {
		background-color: var(--dark-theme-hover-background-color, var(--default-dark-theme-hover-background-color));
	}

	i {
		font-size: 16px;
		margin-right: 16px;
		margin-top: -2px;
	}
`