import { css } from "@lit/reactive-element"

export const progressRingStyles = css`
	:host {
		display: block;
	}

	circle {
		transform-origin: 50% 50%;
		animation: spin 2s linear infinite;
		stroke: var(--dav-color-primary);
	}

	@keyframes spin {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`
