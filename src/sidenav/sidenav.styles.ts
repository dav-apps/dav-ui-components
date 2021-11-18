import { css } from "@lit/reactive-element"

export const sidenavStyles = css`
	#container {
		width: min-content;
		height: 100%;
		padding: 10px 6px;
		background-color: white;
		transition: 0.2s;
	}

	#container.darkTheme {
		background-color: #1c2938;
	}

	#container.over {
		position: fixed;
	}
`