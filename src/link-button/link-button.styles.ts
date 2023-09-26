import { css } from "@lit/reactive-element"

export const linkButtonStyles = css`
	a {
		display: inline-block;
		text-decoration: none;
		color: var(--dav-color-primary);
		padding: 2px 6px;
		border-radius: 5px;
		transition: 200ms;
		font-family: var(--dav-font);
		font-weight: 400;
	}

	a:hover {
		color: var(--dav-color-on-primary);
		background-color: var(--dav-color-primary-hover);
		transform: translateY(-4px);
	}

	a:focus,
	a:active {
		color: var(--dav-color-on-primary);
		background-color: var(--dav-color-primary-focus);
		transform: translateY(-4px);
	}
`
