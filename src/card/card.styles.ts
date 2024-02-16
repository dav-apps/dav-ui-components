import { css } from "@lit/reactive-element"

export const cardStyles = css`
	.card-container {
		display: inline-flex;
		flex-direction: column;
		min-width: 60px;
		width: inherit;
		height: inherit;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.15);
		border-radius: 12px;
		font-family: var(--dav-font);
		overflow: hidden;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		transition: 200ms;
		cursor: pointer;
	}

	.card-container:hover,
	.card-container:focus {
		transform: translateY(-8px);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}

	.card-container.horizontal {
		flex-direction: row;
	}

	.card-container.horizontal > .card-image-container {
		max-width: 50%;
	}

	.card-container > .card-image-container > img {
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}

	.card-content-container {
		padding: 12px;
	}

	.headline {
		margin: 0;
		font-size: 20px;
		font-weight: 500;
	}

	.subhead {
		margin-top: 12px;
		margin-bottom: 0;
		font-size: 16px;
	}
`
