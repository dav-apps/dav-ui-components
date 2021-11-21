import { css } from "@lit/reactive-element"

export const contextMenuStyles = css`
	#container {
		display: none;
		position: absolute;
		background-color: var(--light-theme-color-tertiary, var(--default-light-theme-color-tertiary));
		border-radius: 4px;
		font-size: 16px;
		padding: 4px;
	}

	#container.visible {
		display: inline-block;
	}

	#container.darkTheme {
		color: white;
		background-color: var(--dark-theme-color-tertiary, var(--default-dark-theme-color-tertiary));
	}
`