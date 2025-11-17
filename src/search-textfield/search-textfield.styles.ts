import { css } from "@lit/reactive-element"

export const searchTextfieldStyles = css`
	.container {
		position: relative;
	}

	.search-results-container {
		display: none;
		position: absolute;
		overflow: auto;
		left: 0;
		right: 0;
		width: auto;
		box-sizing: border-box;
		z-index: 1;
		background-color: rgb(var(--dav-color-surface-rgb), 0.9);
		box-shadow: 0px 8px 16px 0px rgb(var(--dav-color-shadow-rgb), 0.2);
		font-family: var(--dav-font);
		font-size: 16px;
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.12);
		border-radius: 6px;
		backdrop-filter: blur(4px);
	}

	.search-results-container.visible {
		display: block;
	}

	.search-result-item {
		margin: 4px;
		padding: 6px 10px;
		display: block;
		border: none;
		width: -webkit-fill-available;
		width: -moz-available;
		box-sizing: border-box;
		text-align: left;
		background-color: transparent;
		color: var(--dav-color-on-surface);
		border-radius: 6px;
		transition: 200ms;
		cursor: pointer;
		font-family: var(--dav-font);
		font-size: 15px;
	}

	.search-result-item:hover {
		background-color: var(--dav-color-surface-hover);
	}

	.search-result-item:focus,
	.search-result-item:active {
		background-color: var(--dav-color-surface-focus);
	}
`
