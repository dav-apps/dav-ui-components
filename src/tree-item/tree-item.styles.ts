import { css } from "@lit/reactive-element"

export const treeItemStyles = css`
	.container {
		display: flex;
		align-items: center;
		width: 100%;
		padding-left: 12px;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		transition: 200ms;
		cursor: pointer;
		border: none;
		border-radius: 12px;
		font-family: var(--dav-font);
		font-size: 14px;
		text-align: start;
	}

	.container.active {
		background-color: var(--dav-color-surface-focus);
	}

	.container:hover {
		background-color: var(--dav-color-surface-hover);
	}

	.container:focus,
	.container:active {
		background-color: var(--dav-color-surface-focus);
	}

	.container.node {
		padding-left: 0;
	}

	.container > span {
		margin: 8px 12px 8px 0px;
	}

	.icon-container {
		padding: 8px 12px;
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
