import { css } from "@lit/reactive-element"

export const listItemStyles = css`
	.list-item-container {
		display: flex;
		align-items: center;
		padding: 8px 16px;
		background-color: var(--md-sys-color-surface-light);
		transition: 200ms;
		cursor: pointer;
		border-radius: 12px;
	}

	.list-item-container:hover,
	.list-item-container:focus {
		background-color: rgb(var(--md-ref-palette-neutral95-rgb));
	}

	.list-item-container:active {
		background-color: rgb(var(--md-ref-palette-neutral90-rgb));
	}

	.list-item-image-container {
		height: 84px;
		width: 84px;
		margin-right: 16px;
	}

	.list-item-container.small .list-item-image-container {
		height: 56px;
		width: 56px;
	}

	.list-item-image {
		border-radius: 6px;
	}

	.list-item-body {
		display: flex;
		flex-direction: column;
	}

	.list-item-headline {
		color: var(--md-sys-color-on-surface-light);
		font-size: 18px;
		margin: 0;
	}

	.list-item-container.small .list-item-headline {
		font-size: 16px;
	}

	.list-item-subhead {
		color: var(--md-sys-color-on-surface-variant-light);
		font-size: 16px;
		margin: 0;
	}

	.list-item-container.small .list-item-subhead {
		font-size: 14px;
	}
`
