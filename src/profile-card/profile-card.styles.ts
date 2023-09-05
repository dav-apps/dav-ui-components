import { css } from "@lit/reactive-element"

export const profileCardStyles = css`
	.container {
		display: inline-flex;
		align-items: center;
		padding: 8px;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.15);
		border-radius: 12px;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		cursor: pointer;
		transition: 200ms;
	}

	.container:hover,
	.container:focus {
		transform: translateY(-4px);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
	}

	dav-blurhash-image {
		border-radius: 50%;
	}

	p {
		margin: 0 12px 0 16px;
		font-family: Roboto, Arial, sans-serif;
		font-size: 16px;
		font-weight: 400;
	}
`
