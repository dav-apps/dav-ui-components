import { css } from "@lit/reactive-element"

export const searchStyles = css`
	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(var(--dav-color-scrim-rgb), 0.5);
		backdrop-filter: blur(4px);
	}

	.content-container {
		position: relative;
		z-index: 0;
	}
`
