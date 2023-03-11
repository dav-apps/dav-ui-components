import { css } from "@lit/reactive-element"

export const iconButtonStyles = css`
	:host {
		display: inline-block;
	}

	::slotted(*) {
		position: relative;
	}

	/* Colors by MD3 Standard Icon button (https://m3.material.io/components/icon-buttons/specs#eca0451e-430b-41e1-bea3-a31cb7ccda76) */
	button {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 48px;
		height: 48px;
		font-size: 24px;
		color: var(--md-sys-color-on-surface-variant-light);
		background-color: transparent;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		transition: 200ms;
	}

	button.small {
		height: 32px;
		width: 32px;
		font-size: 16px;
	}

	button:hover {
		background-color: var(--md-sys-color-on-surface-variant-light-hover);
	}

	button:focus,
	button:active {
		background-color: var(--md-sys-color-on-surface-variant-light-focus);
	}

	button.selected {
		color: var(--md-sys-color-primary-light);
	}

	button.selected:hover {
		background-color: var(--md-sys-color-primary-light-hover);
	}

	button.selected:focus {
		background-color: var(--md-sys-color-primary-light-focus);
	}

	button.selected:active {
		background-color: var(--md-sys-color-primary-light-focus);
	}
`
