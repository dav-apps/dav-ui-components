import { css } from "@lit/reactive-element"

export const headerStyles = css`
	#header {
		display: flex;
		justify-content: center;
		align-items: center;
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

	.icon-button:hover {
		background-color: #f8f9fa;
		border-color: #f8f9fa;
	}

	.icon-button.darkTheme:hover {
		background-color: #232e3c;
		border-color: #232e3c;
	}
`