import { css } from "@lit/reactive-element"

export const iconCardStyles = css`
	.icon-card-container {
		display: inline-flex;
		align-items: center;
		min-width: 64px;
		width: inherit;
		padding: 20px 30px;
		text-align: center;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.15);
		border-radius: 12px;
		font-family: var(--dav-font);
		font-size: 22px;
		cursor: pointer;
		transition: 200ms;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		box-sizing: border-box;
	}

	.icon-card-container.sm {
		padding: 14px 20px;
		font-size: 18px;
	}

	.icon-card-container.lg {
		padding: 26px 40px;
		font-size: 26px;
	}

	a.icon-card-container {
		text-decoration: none;
	}

	.icon-card-container:hover,
	.icon-card-container:focus {
		transform: translateY(-6px);
		box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
	}

	.icon-card-container ::slotted(img) {
		width: 28px;
		height: 28px;
		border-radius: 6px;
	}

	.icon-card-container.sm ::slotted(img) {
		width: 24px;
		height: 24px;
	}

	.icon-card-container.lg ::slotted(img) {
		width: 38px;
		height: 38px;
	}

	.icon-card-container > p {
		margin: 0 0 0 18px;
		font-weight: 400;
		text-wrap: nowrap;
	}

	.icon-card-container.sm > p {
		margin: 0 0 0 14px;
	}

	.icon-card-container.lg > p {
		margin: 0 0 0 24px;
	}
`
