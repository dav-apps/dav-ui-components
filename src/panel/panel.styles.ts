import { css } from "@lit/reactive-element"

export const panelStyles = css`
	.container {
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
		background-color: rgb(var(--dav-color-scrim-rgb), 0.5);
		backdrop-filter: blur(4px);
	}

	.content {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		width: 340px;
		background-color: var(--dav-color-surface);
		border-radius: 20px 0 0 20px;
	}

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24px 24px 0 24px;
		color: var(--dav-color-on-surface);
	}

	.header {
		color: var(--dav-color-on-surface);
		font-size: 22px;
		font-family: var(--dav-font);
		font-weight: 500;
		margin: 0;
	}

	.close-button {
		float: right;
	}

	.close-button svg {
		width: 24px;
		height: 24px;
		fill: var(--dav-color-on-surface);
	}

	.slot-container {
		margin: 12px 24px 0;
		padding-bottom: 12px;
		overflow-y: auto;
	}
`
