import { css } from "@lit/reactive-element"

export const linkButtonStyles = css`
	:host {
		margin: 3px 0;
	}

	a {
		display: inline-block;
		text-decoration: none;
		color: var(--dav-color-primary);
		padding: 8px 11px;
		border-radius: 5px;
		transition: 200ms;
		font-family: Roboto, Arial, sans-serif;
		font-weight: 400;
	}

	a:hover {
		color: var(--dav-color-on-primary);
		background-color: var(--dav-color-primary-hover);
		transform: translateY(-4px);
	}

	a:focus,
	a:active {
		background-color: var(--dav-color-primary-focus);
	}
`
