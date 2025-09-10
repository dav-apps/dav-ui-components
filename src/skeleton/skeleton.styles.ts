import { css } from "@lit/reactive-element"

export const skeletonStyles = css`
	:host {
		border-radius: 4px;
		width: 100%;
		height: 20px;
	}

	.skeleton {
		background-color: var(--dav-color-skeleton);
		animation: pulse 2s infinite;
		border-radius: inherit;
		width: inherit;
		height: inherit;
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
