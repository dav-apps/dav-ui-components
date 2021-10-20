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
		background-color: white;
		overflow-y: auto;
	}

	#content.darkTheme {
		background-color: #1c2938;
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

	#slot-container {
		margin: 0px 32px;
	}
`