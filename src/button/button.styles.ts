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
		height: 32px;
		padding: 0 16px;
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

	button.outline, button.text {
		background-color: var(--md-sys-color-surface-light);
		color: var(--md-sys-color-primary-light);
		border: 1px solid var(--md-sys-color-outline-light);
	}

	button.outline.secondary, button.text.secondary {
		color: var(--md-sys-color-secondary-light);
	}

	button.outline.tertiary, button.text.tertiary {
		color: var(--md-sys-color-tertiary-light);
	}

	button.outline.error, button.text.error {
		color: var(--md-sys-color-error-light);
	}

	button.text {
		border: none;
	}

	button.darkTheme {
		background-color: var(--md-sys-color-secondary-container-dark);
		color: white;
	}

	button.disabled {
		cursor: not-allowed;
		background-color: #edededb3;
		color: #00000080;
	}

	button.disabled.darkTheme {
		color: #ffffff80;
		background-color: #2e3b46;
	}

	button:hover {
		background-color: rgb(var(--md-ref-palette-primary35-rgb));
	}

	button.tonal:hover {
		background-color: rgb(var(--md-ref-palette-primary85-rgb));
	}

	button.secondary:hover {
		background-color: rgb(var(--md-ref-palette-secondary35-rgb));
	}

	button.tonal.secondary:hover {
		background-color: rgb(var(--md-ref-palette-secondary85-rgb));
	}

	button.tertiary:hover {
		background-color: rgb(var(--md-ref-palette-tertiary35-rgb));
	}

	button.tonal.tertiary:hover {
		background-color: rgb(var(--md-ref-palette-tertiary85-rgb));
	}

	button.error:hover {
		background-color: rgb(var(--md-ref-palette-error35-rgb));
	}

	button.tonal.error:hover {
		background-color: rgb(var(--md-ref-palette-error85-rgb));
	}

	button.outline:hover, button.text:hover {
		background-color: var(--md-sys-color-primary-light-hover);
	}

	button.outline.secondary:hover, button.text.secondary:hover {
		background-color: var(--md-sys-color-secondary-light-hover);
	}

	button.outline.tertiary:hover, button.text.tertiary:hover {
		background-color: var(--md-sys-color-tertiary-light-hover);
	}

	button.outline.error:hover, button.text.error:hover {
		background-color: var(--md-sys-color-error-light-hover);
	}

	button:active, button:focus {
		background-color: rgb(var(--md-ref-palette-primary30-rgb));
	}

	button.tonal:active, button.tonal:focus {
		background-color: rgb(var(--md-ref-palette-primary80-rgb));
	}

	button.secondary:active, button.secondary:focus {
		background-color: rgb(var(--md-ref-palette-secondary30-rgb));
	}

	button.tonal.secondary:active, button.tonal.secondary:focus {
		background-color: rgb(var(--md-ref-palette-secondary80-rgb));
	}

	button.tertiary:active, button.tertiary:focus {
		background-color: rgb(var(--md-ref-palette-tertiary30-rgb));
	}

	button.tonal.tertiary:active, button.tonal.tertiary:focus {
		background-color: rgb(var(--md-ref-palette-tertiary80-rgb));
	}

	button.error:active, button.error:focus {
		background-color: rgb(var(--md-ref-palette-error30-rgb));
	}

	button.tonal.error:active, button.tonal.error:focus {
		background-color: rgb(var(--md-ref-palette-error80-rgb));
	}

	button.outline:active, button.outline:focus,
	button.text:active, button.text:focus {
		background-color: var(--md-sys-color-primary-light-focus);
	}

	button.outline.secondary:active, button.outline.secondary:focus,
	button.text.secondary:active, button.text.secondary:focus {
		background-color: var(--md-sys-color-secondary-light-focus);
	}

	button.outline.tertiary:active, button.outline.tertiary:focus,
	button.text.tertiary:active, button.text.tertiary:focus {
		background-color: var(--md-sys-color-tertiary-light-focus);
	}

	button.outline.error:active, button.outline.error:focus,
	button.text.error:active, button.text.error:focus {
		background-color: var(--md-sys-color-error-light-focus);
	}

	button.darkTheme:hover, button.darkTheme:active {
		background-color: #1c2938;
	}
`