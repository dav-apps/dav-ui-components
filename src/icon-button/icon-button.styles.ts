import { css } from "@lit/reactive-element"

export const iconButtonStyles = css`
	:host {
		display: inline-block;
	}

	::slotted(*) {
		position: relative;
	}

	/* Colors by MD3 Standard Icon button (https://m3.material.io/components/icon-buttons/specs#eca0451e-430b-41e1-bea3-a31cb7ccda76) */
	.icon-button {
		position: relative;
		display: flex;
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

	.icon-button.small {
		height: 32px;
		width: 32px;
		font-size: 18px;
	}

	.icon-button.small ::slotted(svg) {
		width: 18px;
		height: 18px;
	}

	.icon-button:hover {
		background-color: var(--dav-color-on-surface-variant-hover);
	}

	.icon-button:focus,
	.icon-button:active {
		background-color: var(--dav-color-on-surface-variant-focus);
	}

	.icon-button.selected {
		color: var(--dav-color-primary);
	}

	.icon-button.selected:hover {
		background-color: var(--dav-color-primary-hover);
	}

	.icon-button.selected:focus {
		background-color: var(--dav-color-primary-focus);
	}

	.icon-button.selected:active {
		background-color: var(--dav-color-primary-focus);
	}
`
