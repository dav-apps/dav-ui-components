import { css } from "@lit/reactive-element"

export const headerStyles = css`
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container.start {
		justify-content: start;
	}

	.container.end {
		justify-content: end;
	}

	.header {
		display: flex;
		justify-content: center;
		margin: 0;
		font-family: Roboto, Arial, sans-serif;
		font-weight: 400;
		color: var(--dav-color-on-surface);
	}

	.right-button-container {
		margin-left: 10px;
	}

	dav-icon-button {
		width: 36px;
		height: 36px;
	}

	dav-icon-button svg {
		fill: var(--dav-color-on-surface);
	}

	.back-button {
		margin-right: 12px;
	}

	.add-button {
		margin: 0 2px;
	}

	.edit-button {
		margin: 0 2px;
	}
`
