import { css } from "@lit/reactive-element"

export const contextMenuStyles = css`
	#container {
		display: none;
		position: absolute;
		background-color: #FFFFFF;
		border-radius: 4px;
	}

	#container.visible {
		display: inline-block;
	}
`