import { css } from "@lit/reactive-element"

export const messageBarStyles = css`
	.message-bar {
		display: flex;
		align-items: center;
		font-size: 14px;
		font-family: Roboto, Arial, sans-serif;
		background-color: var(--dav-color-primary-container);
		color: var(--dav-color-on-primary-container);
		padding: 18px;
		margin-bottom: 0px;
		border-radius: 6px;
	}

	.message-bar.secondary {
		background-color: var(--dav-color-secondary-container);
		color: var(--dav-color-on-secondary-container);
	}

	.message-bar.tertiary {
		background-color: var(--dav-color-tertiary-container);
		color: var(--dav-color-on-tertiary-container);
	}

	.message-bar.error {
		background-color: var(--dav-color-error-container);
		color: var(--dav-color-on-error-container);
	}

	.message-bar > span {
		margin-left: 0.75rem;
	}

	.message-bar > .svg-container {
		display: flex;
		width: 16px;
		fill: var(--dav-color-on-primary-container);
	}

	.message-bar.secondary > .svg-container {
		fill: var(--dav-color-on-secondary-container);
	}

	.message-bar.tertiary > .svg-container {
		fill: var(--dav-color-on-tertiary-container);
	}

	.message-bar.error > .svg-container {
		fill: var(--dav-color-on-error-container);
	}
`
