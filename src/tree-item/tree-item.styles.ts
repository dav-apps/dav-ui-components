import { css } from "@lit/reactive-element"

export const treeItemStyles = css`
	.container {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 100%;
		padding: 8px 12px;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		transition: 200ms;
		cursor: pointer;
		border: none;
		border-radius: 12px;
		font-family: Roboto, Arial, sans-serif;
	}

	.container:hover {
		background-color: var(--dav-color-surface-hover);
	}

	.container:focus,
	.container:active {
		background-color: var(--dav-color-surface-focus);
	}

	.icon-container > svg {
		width: 12px;
		height: 12px;
		fill: var(--dav-color-on-surface);
	}

	.children-container {
		position: relative;
		margin: 6px 0 0 12px;
	}
`
