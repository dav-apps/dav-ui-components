import { css } from "@lit/reactive-element"

export const linkButtonStyles = css`
	:host {
		margin: 3px 0;
	}

	a {
		text-decoration: none;
		color: var(--dav-color-primary);
		padding: 8px 11px;
		border-radius: 5px;
		transition: 200ms;
		font-family: "Roboto";
		font-weight: 400;
	}

	a:hover,
	a:focus {
		color: rgb(var(--dav-color-palette-primary30-rgb));
		background-color: var(--dav-color-primary-hover);
	}

	a:active {
		color: rgb(var(--dav-color-palette-primary20-rgb));
		background-color: var(--dav-color-primary-focus);
	}
`
