import { css } from "@lit/reactive-element"

export const paginationStyles = css`
	.container {
		display: flex;
		justify-content: center;
	}

	.pagination-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 38px;
		height: 38px;
		font-family: Roboto, Arial, sans-serif;
		font-size: 16px;
		padding: 0;
		margin: 0px 2px;
		background-color: var(--dav-color-secondary-container);
		color: var(--dav-color-on-secondary-container);
		border-radius: 19px;
		border: none;
		transition: 200ms;
		cursor: pointer;
	}

	.pagination-button:hover {
		background-color: var(--dav-color-secondary-container-hover);
	}

	.pagination-button:focus,
	.pagination-button:active {
		background-color: var(--dav-color-secondary-container-focus);
	}

	.pagination-button.disabled {
		cursor: not-allowed;
	}

	.pagination-button.selected {
		background-color: var(--dav-color-secondary);
		color: var(--dav-color-on-secondary);
	}

	.pagination-button.selected:hover {
		background-color: var(--dav-color-secondary-hover);
	}

	.pagination-button.selected:focus,
	.pagination-button.selected:active {
		background-color: var(--dav-color-secondary-focus);
	}

	.button-placeholder {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 38px;
		margin: 0px 1px;
		color: var(--dav-color-on-surface);
	}

	svg {
		width: 16px;
		height: 16px;
		fill: var(--dav-color-on-secondary-container);
	}

	.forward-button svg {
		transform: rotate(180deg);
	}
`
