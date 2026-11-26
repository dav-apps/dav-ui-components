import { css } from "@lit/reactive-element"

export const tabBarStyles = css`
	:host {
		display: inline-block;
	}

	:host([scrollable]) {
		display: block;
		min-width: 0;
		max-width: 100%;
		overflow-x: auto;
		scrollbar-width: none;
	}

	:host([scrollable]) .container {
		width: max-content;
	}

	.container {
		display: flex;
	}
`
