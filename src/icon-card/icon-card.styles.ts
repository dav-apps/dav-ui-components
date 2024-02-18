import { css } from "@lit/reactive-element"

export const iconCardStyles = css`
	.icon-card-container {
		display: inline-flex;
		align-items: center;
		min-width: 64px;
		padding: 26px 40px;
		text-align: center;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.15);
		border-radius: 12px;
		font-family: var(--dav-font);
		font-size: 25px;
		cursor: pointer;
		transition: 200ms;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
	}

	a.icon-card-container {
		text-decoration: none;
	}

	.icon-card-container:hover,
	.icon-card-container:focus {
		transform: translateY(-8px);
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}

	.icon-card-container ::slotted(img) {
		width: 38px;
		height: 38px;
		border-radius: 6px;
	}

	.icon-card-container > p {
		margin: 0 0 0 24px;
		font-weight: 400;
		text-wrap: nowrap;
	}
`
