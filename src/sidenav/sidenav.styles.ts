import { css } from "@lit/reactive-element"

export const sidenavStyles = css`
	.container-inline {
		display: inline-flex;
		flex-direction: column;
		gap: 4px;
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
		background-color: var(--dav-color-scrim);
		backdrop-filter: blur(4px);
	}

	.container-over-content {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 200px;
		background-color: var(--dav-color-surface);
		border-radius: 0 20px 20px 0;
		padding: 6px;
	}
`
