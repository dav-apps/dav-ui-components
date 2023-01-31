import { css } from "@lit/reactive-element"

export const buttonStyles = css`
	:host {
		display: inline-block;
	}

	button {
		display: flex;
		align-items: center;
		height: 40px;
		padding: 0px 24px;
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

	button:not(.disabled):active, button:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-primary30-rgb));
	}

	button.tonal:not(.disabled):active, button.tonal:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-primary80-rgb));
	}

	button.secondary:not(.disabled):active, button.secondary:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-secondary30-rgb));
	}

	button.tonal.secondary:not(.disabled):active, button.tonal.secondary:not(.disabled):focus {
		background-color: rgb(var(--md-ref-palette-secondary80-rgb));
	}

	button.darkTheme:not(.disabled):hover, button.darkTheme:not(.disabled):active {
		background-color: #1c2938;
	}

	button.accent {
		color: white;
		background-color: #0078d4;
	}

	button.accent.disabled {
		background-color: #0078d4b3;
	}

	button.accent:not(.disabled):hover, button.accent:not(.disabled):active {
		background-color: #006cbe;
	}

	button.danger {
		color: white;
		background-color: #dc3545;
	}

	button.danger.disabled {
		background-color: #dc3545b3;
	}

	button.danger:not(.disabled):hover, button.danger:not(.disabled):active {
		background-color: #c82333;
	}
`