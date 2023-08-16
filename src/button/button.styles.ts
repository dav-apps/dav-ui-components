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
		background-color: var(--dav-color-primary);
		color: var(--dav-color-on-primary);
		cursor: pointer;
		transition: 200ms;
	}

	button.small {
		height: 34px;
		padding: 0 16px;
		font-size: 13px;
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
		background-color: rgba(var(--dav-color-palette-neutral10-rgb), 0.12);
		color: rgba(var(--dav-color-palette-neutral10-rgb), 0.38);
	}

	button.outline.disabled {
		background-color: var(--dav-color-surface);
		border-color: rgba(var(--dav-color-palette-neutral10-rgb), 0.38);
	}

	button.text.disabled {
		background-color: var(--dav-color-surface);
	}

	button:not(.disabled):hover {
		background-color: rgb(var(--dav-color-palette-primary35-rgb));
	}

	button.tonal:not(.disabled):hover {
		background-color: rgb(var(--dav-color-palette-primary85-rgb));
	}

	button.secondary:not(.disabled):hover {
		background-color: rgb(var(--dav-color-palette-secondary35-rgb));
	}

	button.tonal.secondary:not(.disabled):hover {
		background-color: rgb(var(--dav-color-palette-secondary85-rgb));
	}

	button.tertiary:not(.disabled):hover {
		background-color: rgb(var(--dav-color-palette-tertiary35-rgb));
	}

	button.tonal.tertiary:not(.disabled):hover {
		background-color: rgb(var(--dav-color-palette-tertiary85-rgb));
	}

	button.error:not(.disabled):hover {
		background-color: rgb(var(--dav-color-palette-error35-rgb));
	}

	button.tonal.error:not(.disabled):hover {
		background-color: rgb(var(--dav-color-palette-error85-rgb));
	}

	button.outline:not(.disabled):hover,
	button.text:not(.disabled):hover {
		background-color: var(--dav-color-primary-hover);
	}

	button.outline.secondary:not(.disabled):hover,
	button.text.secondary:not(.disabled):hover {
		background-color: var(--dav-color-secondary-hover);
	}

	button.outline.tertiary:not(.disabled):hover,
	button.text.tertiary:not(.disabled):hover {
		background-color: var(--dav-color-tertiary-hover);
	}

	button.outline.error:not(.disabled):hover,
	button.text.error:not(.disabled):hover {
		background-color: var(--dav-color-error-hover);
	}

	button:not(.disabled):active,
	button:not(.disabled):focus {
		background-color: rgb(var(--dav-color-palette-primary30-rgb));
	}

	button.tonal:not(.disabled):active,
	button.tonal:not(.disabled):focus {
		background-color: rgb(var(--dav-color-palette-primary80-rgb));
	}

	button.secondary:not(.disabled):active,
	button.secondary:not(.disabled):focus {
		background-color: rgb(var(--dav-color-palette-secondary30-rgb));
	}

	button.tonal.secondary:not(.disabled):active,
	button.tonal.secondary:not(.disabled):focus {
		background-color: rgb(var(--dav-color-palette-secondary80-rgb));
	}

	button.tertiary:not(.disabled):active,
	button.tertiary:not(.disabled):focus {
		background-color: rgb(var(--dav-color-palette-tertiary30-rgb));
	}

	button.tonal.tertiary:not(.disabled):active,
	button.tonal.tertiary:not(.disabled):focus {
		background-color: rgb(var(--dav-color-palette-tertiary80-rgb));
	}

	button.error:not(.disabled):active,
	button.error:not(.disabled):focus {
		background-color: rgb(var(--dav-color-palette-error30-rgb));
	}

	button.tonal.error:not(.disabled):active,
	button.tonal.error:not(.disabled):focus {
		background-color: rgb(var(--dav-color-palette-error80-rgb));
	}

	button.outline:not(.disabled):active,
	button.outline:not(.disabled):focus,
	button.text:not(.disabled):active,
	button.text:not(.disabled):focus {
		background-color: var(--dav-color-primary-focus);
	}

	button.outline.secondary:not(.disabled):active,
	button.outline.secondary:not(.disabled):focus,
	button.text.secondary:not(.disabled):active,
	button.text.secondary:not(.disabled):focus {
		background-color: var(--dav-color-secondary-focus);
	}

	button.outline.tertiary:not(.disabled):active,
	button.outline.tertiary:not(.disabled):focus,
	button.text.tertiary:not(.disabled):active,
	button.text.tertiary:not(.disabled):focus {
		background-color: var(--dav-color-tertiary-focus);
	}

	button.outline.error:not(.disabled):active,
	button.outline.error:not(.disabled):focus,
	button.text.error:not(.disabled):active,
	button.text.error:not(.disabled):focus {
		background-color: var(--dav-color-error-focus);
	}
`
