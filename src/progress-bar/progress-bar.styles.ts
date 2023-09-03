import { css } from "@lit/reactive-element"

export const progressBarStyles = css`
	.container {
		position: relative;
	}

	.track {
		position: absolute;
		width: 100%;
		height: 4px;
		background-color: var(--dav-color-surface-container-highest);
	}

	.indicator {
		position: absolute;
		height: 4px;
		background-color: var(--dav-color-primary);
		transition: 200ms;
	}
`
