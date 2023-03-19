import { css } from "@lit/reactive-element"

export const cardStyles = css`
	.card-container {
		display: flex;
		flex-direction: column;
		min-width: 60px;
		width: inherit;
		background-color: var(--md-sys-color-surface-light);
		color: var(--md-sys-color-on-surface-light);
		border: 1px solid var(--md-sys-color-outline-light);
		border-radius: 12px;
		font-family: Roboto, Arial, sans-serif;
		overflow: hidden;
	}

	.card-container.horizontal {
		flex-direction: row;
	}

	.card-container > .card-image-container {
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
