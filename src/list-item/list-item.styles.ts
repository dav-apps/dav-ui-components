import { css } from "@lit/reactive-element"

export const listItemStyles = css`
	.container {
		display: flex;
		align-items: center;
		gap: 16px;
		width: 100%;
		padding: 8px 16px;
		background-color: var(--dav-color-surface);
		transition: 200ms;
		cursor: pointer;
		border: none;
		border-radius: 12px;
		box-sizing: border-box;
	}

	a.container {
		text-decoration: none;
	}

	.container:hover {
		background-color: var(--dav-color-surface-hover);
	}

	.container:focus,
	.container:active {
		background-color: var(--dav-color-surface-focus);
	}

	.image-container {
		display: flex;
		justify-content: center;
		height: 84px;
		width: 84px;
		min-width: 84px;
	}

	.container.small .image-container {
		height: 56px;
		width: 56px;
		min-width: 56px;
	}

	.container.large .image-container {
		height: 140px;
		width: 140px;
		min-width: 140px;
	}

	.image {
		border-radius: 6px;
	}

	.image.rounded {
		border-radius: 50%;
	}

	.body {
		display: flex;
		flex-direction: column;
		align-items: start;
		font-family: var(--dav-font);
	}

	.headline {
		color: var(--dav-color-on-surface);
		text-align: start;
		font-size: 18px;
		margin: 0;
	}

	.container.small .headline {
		font-size: 16px;
	}

	.container.large .headline {
		font-size: 20px;
	}

	.subhead {
		color: var(--dav-color-on-surface-variant);
		text-align: start;
		font-size: 16px;
		margin: 0;
	}

	.container.small .subhead {
		font-size: 14px;
	}

	.container.large .subhead {
		font-size: 16px;
	}
`
