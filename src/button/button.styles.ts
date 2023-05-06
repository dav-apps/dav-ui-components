import { css } from "@lit/reactive-element"

export const buttonStyles = css`
	:host {
		display: inline-block;
	}

	button {
		display: flex;
		align-items: center;
		height: 40px;
		padding: 0 24px;
		font-size: 14px;
		font-family: "Roboto Medium";
		font-weight: 500;
		border: none;
		border-radius: 20px;
		background-color: var(--md-sys-color-primary-light);
		color: var(--md-sys-color-on-primary-light);
		cursor: pointer;
		transition: 200ms;
	}

	button.small {
		height: 34px;
		padding: 0 16px;
		font-size: 13px;
	}

	button.tonal {
		background-color: var(--md-sys-color-primary-container-light);
		color: var(--md-sys-color-on-primary-container-light);
	}

	button.secondary {
		background-color: var(--md-sys-color-secondary-light);
		color: var(--md-sys-color-on-secondary-light);
	}

	button.tonal.secondary {
		background-color: var(--md-sys-color-secondary-container-light);
		color: var(--md-sys-color-on-secondary-container-light);
	}

	button.tertiary {
		background-color: var(--md-sys-color-tertiary-light);
		color: var(--md-sys-color-on-tertiary-light);
	}

	button.tonal.tertiary {
		background-color: var(--md-sys-color-tertiary-container-light);
		color: var(--md-sys-color-on-tertiary-container-light);
	}

	button.error {
		background-color: var(--md-sys-color-error-light);
		color: var(--md-sys-color-on-error-light);
	}

	button.tonal.error {
		background-color: var(--md-sys-color-error-container-light);
		color: var(--md-sys-color-on-error-container-light);
	}

	button.outline,
	button.text {
		background-color: var(--md-sys-color-surface-light);
		color: var(--md-sys-color-primary-light);
		border: 1px solid var(--md-sys-color-outline-light);
	}

	button.outline.secondary,
	button.text.secondary {
		color: var(--md-sys-color-secondary-light);
	}

	button.outline.tertiary,
	button.text.tertiary {
		color: var(--md-sys-color-tertiary-light);
	}

	button.outline.error,
	button.text.error {
		color: var(--md-sys-color-error-light);
	}

	button.text {
		border: none;
	}

	button.disabled {
		cursor: not-allowed;
		background-color: rgba(var(--md-ref-palette-neutral10-rgb), 0.12);
		color: rgba(var(--md-ref-palette-neutral10-rgb), 0.38);
	}

	button.outline.disabled {
		background-color: var(--md-sys-color-surface-light);
		border-color: rgba(var(--md-ref-palette-neutral10-rgb), 0.38);
	}

	button.text.disabled {
		background-color: var(--md-sys-color-surface-light);
	}

	button:not(.disabled):hover {
		background-color: rgb(var(--md-ref-palette-primary35-rgb));
	}

	button.tonal:not(.disabled):hover {
		background-color: rgb(var(--md-ref-palette-primary85-rgb));
	}

	button.secondary:not(.disabled):hover {
		background-color: rgb(var(--md-ref-palette-secondary35-rgb));
	}

	button.tonal.secondary:not(.disabled):hover {
		background-color: rgb(var(--md-ref-palette-secondary85-rgb));
	}

	button.tertiary:not(.disabled):hover {
		background-color: rgb(var(--md-ref-palette-tertiary35-rgb));
	}

	button.tonal.tertiary:not(.disabled):hover {
		background-color: rgb(var(--md-ref-palette-tertiary85-rgb));
	}

	button.error:not(.disabled):hover {
		background-color: rgb(var(--md-ref-palette-error35-rgb));
	}

	button.tonal.error:not(.disabled):hover {
		background-color: rgb(var(--md-ref-palette-error85-rgb));
	}

	button.outline:not(.disabled):hover,
	button.text:not(.disabled):hover {
		background-color: var(--md-sys-color-primary-light-hover);
	}

	button.outline.secondary:not(.disabled):hover,
	button.text.secondary:not(.disabled):hover {
		background-color: var(--md-sys-color-secondary-light-hover);
	}

	button.outline.tertiary:not(.disabled):hover,
	button.text.tertiary:not(.disabled):hover {
		background-color: var(--md-sys-color-tertiary-light-hover);
	}

	button.outline.error:not(.disabled):hover,
	button.text.error:not(.disabled):hover {
		background-color: var(--md-sys-color-error-light-hover);
	}

	button:not(.disabled):active,
	button:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-primary30-rgb));
	}

	button.tonal:not(.disabled):active,
	button.tonal:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-primary80-rgb));
	}

	button.secondary:not(.disabled):active,
	button.secondary:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-secondary30-rgb));
	}

	button.tonal.secondary:not(.disabled):active,
	button.tonal.secondary:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-secondary80-rgb));
	}

	button.tertiary:not(.disabled):active,
	button.tertiary:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-tertiary30-rgb));
	}

	button.tonal.tertiary:not(.disabled):active,
	button.tonal.tertiary:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-tertiary80-rgb));
	}

	button.error:not(.disabled):active,
	button.error:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-error30-rgb));
	}

	button.tonal.error:not(.disabled):active,
	button.tonal.error:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-error80-rgb));
	}

	button.outline:not(.disabled):active,
	button.outline:not(.disabled):focus,
	button.text:not(.disabled):active,
	button.text:not(.disabled):focus {
		background-color: var(--md-sys-color-primary-light-focus);
	}

	button.outline.secondary:not(.disabled):active,
	button.outline.secondary:not(.disabled):focus,
	button.text.secondary:not(.disabled):active,
	button.text.secondary:not(.disabled):focus {
		background-color: var(--md-sys-color-secondary-light-focus);
	}

	button.outline.tertiary:not(.disabled):active,
	button.outline.tertiary:not(.disabled):focus,
	button.text.tertiary:not(.disabled):active,
	button.text.tertiary:not(.disabled):focus {
		background-color: var(--md-sys-color-tertiary-light-focus);
	}

	button.outline.error:not(.disabled):active,
	button.outline.error:not(.disabled):focus,
	button.text.error:not(.disabled):active,
	button.text.error:not(.disabled):focus {
		background-color: var(--md-sys-color-error-light-focus);
	}
`
