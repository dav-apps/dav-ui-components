import { css } from "@lit/reactive-element"

export const iconCardStyles = css`
	.icon-card-container {
		display: flex;
		align-items: center;
		min-width: 64px;
		padding: 26px 40px;
		text-align: center;
		background-color: var(--md-sys-color-surface-light);
		color: var(--md-sys-color-on-surface-light);
		border: 1px solid rgb(var(--md-ref-palette-neutral90-rgb));
		border-radius: 12px;
		font-family: Roboto, Arial, sans-serif;
		font-size: 25px;
		cursor: pointer;
		transition: 200ms;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	}

	.icon-card-container:hover,
	.icon-card-container:focus {
		transform: translateY(-8px);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}

	.icon-card-container > p {
		margin: 0 0 0 24px;
	}
`
