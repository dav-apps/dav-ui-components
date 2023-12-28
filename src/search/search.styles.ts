import { css } from "@lit/reactive-element"

export const searchStyles = css`
	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--dav-color-scrim);
		backdrop-filter: blur(4px);
	}

	.content-container {
		position: fixed;
		top: 20%;
		left: 0;
		right: 0;
		width: 400px;
		margin: 0 auto;
	}

	.search-input {
		width: 100%;
		padding: 16px 18px 16px 58px;
		border-radius: 28px;
		border: none;
		opacity: 0.8;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		font-size: 18px;
		font-family: var(--dav-font);
	}

	.search-icon-container {
		position: absolute;
		top: 0;
		left: 20px;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.search-icon-container > svg {
		height: 22px;
		fill: var(--dav-color-on-surface);
	}
`
