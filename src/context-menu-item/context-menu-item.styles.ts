import { css } from "@lit/reactive-element"

export const contextMenuItemStyles = css`
	button {
		display: flex;
		align-items: center;
		height: 28px;
		width: -webkit-fill-available;
		width: -moz-available;
		border: none;
		border-radius: 4px;
		background-color: transparent;
		color: var(--dav-color-on-surface);
		margin: 4px;
		padding: 4px 10px;
		transition: 200ms;
		font-family: var(--dav-font);
		cursor: pointer;
	}

	button:hover {
		background-color: var(--dav-color-surface-hover);
	}

	button:active,
	button:focus {
		background-color: var(--dav-color-surface-focus);
	}

	.icon-container {
		font-size: 16px;
		width: 16px;
	}

	.label {
		margin-left: 12px;
		text-align: start;
	}
`
