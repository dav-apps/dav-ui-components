import { css } from "@lit/reactive-element"

export const buttonStyles = css`
	:host {
		display: inline-block;
	}

	button {
		display: flex;
		align-items: center;
		gap: 8px;
		height: 40px;
		padding: 0 24px;
		font-size: 14px;
		font-family: var(--dav-font);
		font-weight: 500;
		border: none;
		border-radius: 20px;
		background-color: var(--dav-color-primary);
		color: var(--dav-color-on-primary);
		cursor: pointer;
		transition: 200ms;
	}

	button ::slotted(i) {
		font-size: 16px;
	}

	button.small {
		height: 34px;
		padding: 0 16px;
		font-size: 13px;
	}

	button.small ::slotted(i) {
		font-size: 14px;
	}

	button.tonal {
		background-color: var(--dav-color-primary-container);
		color: var(--dav-color-on-primary-container);
	}

	button.secondary {
		background-color: var(--dav-color-secondary);
		color: var(--dav-color-on-secondary);
	}

	button.tonal.secondary {
		background-color: var(--dav-color-secondary-container);
		color: var(--dav-color-on-secondary-container);
	}

	button.tertiary {
		background-color: var(--dav-color-tertiary);
		color: var(--dav-color-on-tertiary);
	}

	button.tonal.tertiary {
		background-color: var(--dav-color-tertiary-container);
		color: var(--dav-color-on-tertiary-container);
	}

	button.error {
		background-color: var(--dav-color-error);
		color: var(--dav-color-on-error);
	}

	button.tonal.error {
		background-color: var(--dav-color-error-container);
		color: var(--dav-color-on-error-container);
	}

	button.outline,
	button.text {
		background-color: var(--dav-color-surface);
		color: var(--dav-color-primary);
		border: 1px solid var(--dav-color-outline);
	}

	button.outline.secondary,
	button.text.secondary {
		color: var(--dav-color-secondary);
	}

	button.outline.tertiary,
	button.text.tertiary {
		color: var(--dav-color-tertiary);
	}

	button.outline.error,
	button.text.error {
		color: var(--dav-color-error);
	}

	button.text {
		border: none;
	}

	button.disabled {
		cursor: not-allowed;
		background-color: rgb(var(--dav-color-on-surface-rgb), 0.12);
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
	}

	button.outline.disabled {
		background-color: var(--dav-color-surface);
		border-color: rgb(var(--dav-color-on-surface-rgb), 0.12);
	}

	button.text.disabled {
		background-color: var(--dav-color-surface);
	}

	button:not(.disabled):hover {
		background-color: var(--dav-color-primary-hover);
	}

	button.tonal:not(.disabled):hover {
		background-color: var(--dav-color-primary-container-hover);
	}

	button.secondary:not(.disabled):hover {
		background-color: var(--dav-color-secondary-hover);
	}

	button.tonal.secondary:not(.disabled):hover {
		background-color: var(--dav-color-secondary-container-hover);
	}

	button.tertiary:not(.disabled):hover {
		background-color: var(--dav-color-tertiary-hover);
	}

	button.tonal.tertiary:not(.disabled):hover {
		background-color: var(--dav-color-tertiary-container-hover);
	}

	button.error:not(.disabled):hover {
		background-color: var(--dav-color-error-hover);
	}

	button.tonal.error:not(.disabled):hover {
		background-color: var(--dav-color-error-container-hover);
	}

	button.outline:not(.disabled):hover,
	button.text:not(.disabled):hover {
		background-color: var(--dav-color-surface-hover);
	}

	button:not(.disabled):active,
	button:not(.disabled):focus {
		background-color: var(--dav-color-primary-focus);
	}

	button.tonal:not(.disabled):active,
	button.tonal:not(.disabled):focus {
		background-color: var(--dav-color-primary-container-focus);
	}

	button.secondary:not(.disabled):active,
	button.secondary:not(.disabled):focus {
		background-color: var(--dav-color-secondary-focus);
	}

	button.tonal.secondary:not(.disabled):active,
	button.tonal.secondary:not(.disabled):focus {
		background-color: var(--dav-color-secondary-container-focus);
	}

	button.tertiary:not(.disabled):active,
	button.tertiary:not(.disabled):focus {
		background-color: var(--dav-color-tertiary-focus);
	}

	button.tonal.tertiary:not(.disabled):active,
	button.tonal.tertiary:not(.disabled):focus {
		background-color: var(--dav-color-tertiary-container-focus);
	}

	button.error:not(.disabled):active,
	button.error:not(.disabled):focus {
		background-color: var(--dav-color-error-focus);
	}

	button.tonal.error:not(.disabled):active,
	button.tonal.error:not(.disabled):focus {
		background-color: var(--dav-color-error-container-focus);
	}

	button.outline:not(.disabled):active,
	button.outline:not(.disabled):focus,
	button.text:not(.disabled):active,
	button.text:not(.disabled):focus {
		background-color: var(--dav-color-surface-focus);
	}
`
