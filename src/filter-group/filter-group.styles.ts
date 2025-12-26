import { css } from "@lit/reactive-element"

export const filterGroupStyles = css`
	.filter-group-container {
		display: inline-flex;
		background-color: var(--dav-color-primary-container);
		padding: 4px;
		border-radius: 50px;
		gap: 2px;
	}

	.active-indicator {
		position: absolute;
		background-color: var(--dav-color-primary);
		width: 32px;
		height: 32px;
		border-radius: 50%;
		transition: 200ms;
	}
`
