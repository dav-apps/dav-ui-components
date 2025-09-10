import { css } from "@lit/reactive-element"

export const skeletonStyles = css`
	div {
		display: inline-block;
		background-color: var(--dav-color-surface);
		border-radius: 4px;
		animation: pulse 1.5s infinite;
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.4;
		}
		100% {
			opacity: 1;
		}
	}
`
