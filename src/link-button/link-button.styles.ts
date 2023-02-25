import { css } from "@lit/reactive-element"

export const linkButtonStyles = css`
	:host {
		margin: 3px 0;
	}

	a {
		text-decoration: none;
		color: var(--md-sys-color-primary-light);
		padding: 8px 11px;
		border-radius: 5px;
		transition: 200ms;
		font-family: "Roboto";
		font-weight: 400;
	}

	a:hover,
	a:focus {
		color: rgb(var(--md-ref-palette-primary30-rgb));
		background-color: var(--md-sys-color-primary-light-hover);
	}

	a:active {
		color: rgb(var(--md-ref-palette-primary20-rgb));
		background-color: var(--md-sys-color-primary-light-focus);
	}
`
