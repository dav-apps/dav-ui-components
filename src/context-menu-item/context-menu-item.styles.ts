import { css } from "@lit/reactive-element"

export const contextMenuItemStyles = css`
	button {
		display: flex;
		align-items: center;
		height: 28px;
		width: -webkit-fill-available;
		width: -moz-available;
		border: none;
		border-radius: 4px;
		background-color: transparent;
		color: var(--dav-color-on-surface);
		margin: 4px;
		padding: 4px 10px;
		transition: 200ms;
		font-family: Roboto, sans-serif;
	}

	button:hover,
	button:focus {
		cursor: pointer;
		background-color: rgb(var(--dav-color-palette-neutral95-rgb));
	}

	button:active {
		background-color: rgb(var(--dav-color-palette-neutral90-rgb));
	}

	button.darkTheme {
		color: white;
	}

	button.darkTheme:focus,
	button.darkTheme:hover {
		background-color: var(
			--dark-theme-hover-background-color,
			var(--default-dark-theme-hover-background-color)
		);
	}

	#icon-container {
		font-size: 16px;
		width: 16px;
	}

	#label {
		margin-left: 12px;
	}
`
