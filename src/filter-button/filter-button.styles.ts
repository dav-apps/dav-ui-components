import { css } from "@lit/reactive-element"

export const filterButtonStyles = css`
	.filter-button {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 8px;
		height: 32px;
		font-size: 16px;
		color: var(--dav-color-on-secondary-container);
		background-color: transparent;
		border: none;
		border-radius: 999px;
		cursor: pointer;
		transition: 200ms;
	}

	.filter-button:not(.selected):hover {
		background-color: var(--dav-color-secondary-container-hover);
	}

	.filter-button:not(.selected):focus,
	.filter-button:not(.selected):active {
		background-color: var(--dav-color-secondary-container-focus);
	}

	.filter-button.selected {
		color: var(--dav-color-on-secondary);
	}

	.label {
		margin: 0;
		font-family: var(--dav-font);
		font-size: 14px;
	}
`
