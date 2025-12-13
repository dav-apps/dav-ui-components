import { css } from "@lit/reactive-element"

export const dialogStyles = css`
	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--dav-color-scrim);
		backdrop-filter: blur(4px);
	}

	.dialog {
		background-color: var(--dav-color-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.2);
		border-radius: 10px;
		min-width: 280px;
		max-height: 80vh;
		overflow: auto;
		z-index: 0;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}

	.headline {
		margin: 0 0 16px 0;
		font-size: 24px;
		font-weight: 400;
		font-family: var(--dav-font);
		color: var(--dav-color-on-surface);
	}

	.content-container {
		color: var(--dav-color-on-surface-variant);
		font-family: var(--dav-font);
		font-weight: 400;
		margin-bottom: 24px;
	}

	.button-container {
		display: flex;
		gap: 16px;
		justify-content: flex-end;
		align-items: center;
	}
`
