import { css } from "@lit/reactive-element"

export const dialogStyles = css`
	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #3b3b3b67;
	}

	#dialog {
		background-color: white;
		margin: 2ex;
		padding: 2ex;
		border-radius: 5pt;
		min-width: 280px;
	}

	#dialog.darkTheme {
		background-color: #2e3b46;
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