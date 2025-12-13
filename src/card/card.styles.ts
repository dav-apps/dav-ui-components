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
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		font-family: var(--dav-font);
		padding: 0;
		text-align: start;
		overflow: hidden;
		text-decoration: none;
	}

	.card-container:not(div) {
		transition: 200ms;
		cursor: pointer;
	}

	.card-container:not(div):hover,
	.card-container:not(div):focus {
		transform: translateY(-8px);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}

	.card-container.horizontal {
		flex-direction: row;
	}

	.card-container.horizontal > .card-image-container {
		display: flex;
		max-width: 50%;
	}

	.card-container.selected {
		background-color: var(--dav-color-surface-focus);
	}

	.card-container > .card-image-container > img {
		width: 100%;
		height: 100%;
		border-radius: 12px;
	}

	.card-content-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 12px;
	}

	.card-content-container ::slotted(div) {
		margin-top: 12px;
	}

	.headline {
		margin: 0;
		font-size: 20px;
		font-weight: 500;
	}

	.subhead-container {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 12px;
		margin-bottom: 0;
		font-size: 16px;
	}

	.subhead {
		margin: 0;
	}

	.subhead-image {
		border-radius: 50%;
	}

	.spacer {
		height: 100%;
	}
`
