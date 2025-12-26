import { css } from "@lit/reactive-element"

export const filterButtonStyles = css`
	:host {
		display: inline-block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}

	.filter-button {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: inherit;
		height: inherit;
		font-size: 16px;
		color: var(--dav-color-on-secondary-container);
		background-color: transparent;
		border: none;
		border-radius: inherit;
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
`
