import { css } from "@lit/reactive-element"

export const iconButtonStyles = css`
	:host {
		display: inline-block;
	}

	::slotted(*) {
		position: relative;
	}

	.icon-button {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: 48px;
		height: 48px;
		font-size: 24px;
		color: var(--dav-color-on-surface-variant);
		background-color: transparent;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		transition: 200ms;
		text-decoration: none;
	}

	.icon-button ::slotted(svg) {
		width: 24px;
		height: 24px;
	}

	.icon-button.sm {
		height: 32px;
		width: 32px;
		font-size: 18px;
	}

	.icon-button.sm ::slotted(svg) {
		width: 18px;
		height: 18px;
	}

	.icon-button.xs {
		height: 26px;
		width: 26px;
		font-size: 14px;
	}

	.icon-button.xs ::slotted(svg) {
		width: 14px;
		height: 14px;
	}

	.icon-button:hover {
		background-color: rgb(var(--dav-color-surface-variant-hover-rgb), 0.4);
	}

	.icon-button:focus,
	.icon-button:active {
		background-color: rgb(var(--dav-color-surface-variant-focus-rgb), 0.4);
	}

	.icon-button.selected {
		color: var(--dav-color-primary);
	}

	.icon-button.selected:hover {
		background-color: rgb(var(--dav-color-primary-rgb), 0.08);
	}

	.icon-button.selected:focus,
	.icon-button.selected:active {
		background-color: rgb(var(--dav-color-primary-rgb), 0.12);
	}
`
