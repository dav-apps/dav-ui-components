import { css } from "@lit/reactive-element"

export const searchStyles = css`
	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(var(--dav-color-scrim-rgb), 0.5);
		backdrop-filter: blur(4px);
	}

	.content-container {
		display: flex;
		justify-content: center;
		position: relative;
		z-index: 0;
	}

	.search-input {
		height: 38px;
		width: 400px;
		margin-top: 20%;
		padding: 2px 12px;
		border-radius: 22px;
		border: none;
		opacity: 0.8;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		font-size: 18px;
		font-family: var(--dav-font);
	}
`
