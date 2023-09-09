import { css } from "@lit/reactive-element"

export const listItemStyles = css`
	.container {
		display: flex;
		align-items: center;
		width: 100%;
		padding: 8px 16px;
		background-color: var(--dav-color-surface);
		transition: 200ms;
		cursor: pointer;
		border: none;
		border-radius: 12px;
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
		height: 84px;
		width: 84px;
		margin-right: 16px;
	}

	.container.small .image-container {
		height: 56px;
		width: 56px;
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
		font-family: Roboto, Arial, sans-serif;
	}

	.headline {
		color: var(--dav-color-on-surface);
		font-size: 18px;
		margin: 0;
	}

	.container.small .headline {
		font-size: 16px;
	}

	.subhead {
		color: var(--dav-color-on-surface-variant);
		font-size: 16px;
		margin: 0;
	}

	.container.small .subhead {
		font-size: 14px;
	}
`
