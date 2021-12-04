import { css } from "@lit/reactive-element"

export const panelStyles = css`
	#container {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}

	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #3b3b3b67;
	}

	#content {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		width: 340px;
		background-color: var(--light-theme-color-secondary, var(--default-light-theme-color-secondary));
		overflow-y: auto;
	}

	#content.darkTheme {
		background-color: var(--dark-theme-color-secondary, var(--default-dark-theme-color-secondary));
	}

	#header {
		font-size: 23px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-weight: 100;
		margin: 50px 32px 20px 32px;
	}

	#header.darkTheme {
		color: #f3f3f3;
	}

	#close-button {
		float: right;
		width: 32px;
		height: 32px;
		margin: 8px;
		background-color: transparent;
		border: none;
		border-radius: 4px;
	}

	#close-button.darkTheme {
		color: white;
	}

	#slot-container {
		margin: 0px 32px;
	}
`