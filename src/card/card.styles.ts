import { css } from "@lit/reactive-element"

export const cardStyles = css`
	.card-container {
		min-width: 60px;
		max-width: 220px;
		padding: 12px;
		background-color: var(--md-sys-color-surface-light);
		color: var(--md-sys-color-on-surface-light);
		border: 1px solid var(--md-sys-color-outline-light);
		border-radius: 12px;
		font-family: Roboto, Arial, sans-serif;
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
