import { css } from "@lit/reactive-element"

export const iconButtonStyles = css`
	:host {
		display: inline-block;
		width: 48px;
		height: 48px;
		border-radius: 50%;
	}

	::slotted(*) {
		position: relative;
	}

	:host([size="sm"]) {
		height: 32px;
		width: 32px;
	}

	:host([size="xs"]) {
		height: 26px;
		width: 26px;
	}

	:host([shape="square"]) {
		border-radius: 8px;
	}

	.icon-button {
		position: relative;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		width: inherit;
		height: inherit;
		font-size: 24px;
		color: var(--dav-color-on-surface-variant);
		background-color: transparent;
		border: none;
		border-radius: inherit;
		cursor: pointer;
		transition: 200ms;
		text-decoration: none;
		padding-inline: 0;
	}

	.icon-button ::slotted(svg) {
		width: 24px;
		height: 24px;
		fill: var(--dav-color-on-surface-variant);
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

	.icon-button:not(.disabled):hover {
		background-color: rgb(var(--dav-color-surface-variant-hover-rgb), 0.4);
	}

	.icon-button:not(.disabled):focus,
	.icon-button:not(.disabled):active {
		background-color: rgb(var(--dav-color-surface-variant-focus-rgb), 0.4);
	}

	.icon-button.selected {
		color: var(--dav-color-primary);
	}

	.icon-button.selected ::slotted(svg) {
		fill: var(--dav-color-primary);
	}

	.icon-button.selected:not(.disabled):hover {
		background-color: rgb(var(--dav-color-primary-rgb), 0.08);
	}

	.icon-button.selected:not(.disabled):focus,
	.icon-button.selected:not(.disabled):active {
		background-color: rgb(var(--dav-color-primary-rgb), 0.12);
	}

	.icon-button.disabled {
		cursor: not-allowed;
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
	}

	.icon-button.disabled ::slotted(svg) {
		fill: rgb(var(--dav-color-on-surface-rgb), 0.38);
	}
`
