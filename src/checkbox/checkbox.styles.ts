import { css } from "@lit/reactive-element"

export const checkboxStyles = css`
	:host {
		--strike: 0;
		display: flex;
		align-items: center;
		margin: 4px 0px;
	}

	.checkbox {
		display: inherit;
		background-color: var(--dav-color-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 25%;
		cursor: pointer;
	}

	.checkbox.disabled {
		border-color: rgb(var(--dav-color-outline-rgb), 0.25);
		cursor: not-allowed;
	}

	.checkbox:focus {
		outline: 2px solid var(--dav-color-outline);
		outline-offset: 2px;
	}

	.checkbox-label {
		color: var(--dav-color-on-surface);
		font-family: var(--dav-font);
		font-size: 14px;
		margin-left: 8px;
		padding: 0 2px;
		cursor: pointer;

		/* Strike through styles */
		background: linear-gradient(90deg, transparent, currentColor 0) no-repeat
			right center / calc(var(--strike) * 100%) 1px;
		transition: background-size 0.4s ease;
	}

	.checkbox-label.empty {
		padding: 0;
	}

	.checkbox-label.disabled {
		color: rgb(var(--dav-color-on-surface-rgb), 0.5);
		cursor: not-allowed;
	}

	.checkbox-label.strike-through {
		--strike: 1; /* "1" means "true" (show the strike line) */
		background-position-x: left;
	}

	svg {
		fill: transparent;
		stroke: var(--dav-color-on-surface);
		stroke-width: 0px;
		stroke-dasharray: 32;
		stroke-dashoffset: 32;
		transition: 160ms ease-in-out;
	}

	.checkbox.checked > svg {
		stroke-dashoffset: 9;
	}

	.checkbox.disabled > svg {
		stroke: rgb(var(--dav-color-on-surface-rgb), 0.5);
	}
`
