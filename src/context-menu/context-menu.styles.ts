import { css } from "@lit/reactive-element"

export const contextMenuStyles = css`
	#container {
		display: none;
		position: absolute;
		background-color: #FFFFFF;
		border-radius: 4px;
		font-size: 16px;
		padding: 4px;
	}

	#container.visible {
		display: inline-block;
	}

	#container.darkTheme {
		color: white;
		background-color: #2e3b46;
	}
`