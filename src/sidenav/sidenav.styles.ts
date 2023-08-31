import { css } from "@lit/reactive-element"

export const sidenavStyles = css`
	.container-inline {
		display: inline-block;
		width: max-content;
		background-color: var(--dav-color-surface);
	}

	.container-over {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}

	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
`
