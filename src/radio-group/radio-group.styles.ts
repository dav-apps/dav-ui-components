import { css } from "@lit/reactive-element"

export const radioGroupStyles = css`
	:host {
		display: inline-flex;
		flex-direction: column;
		gap: 8px;
	}

	:host([horizontal]) {
		flex-direction: row;
		flex-wrap: wrap;
		gap: 12px 20px;
	}

	.container {
		display: inherit;
		flex-direction: inherit;
		flex-wrap: inherit;
		gap: inherit;
	}
`
