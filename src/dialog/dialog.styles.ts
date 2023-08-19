import { css } from "@lit/reactive-element"

export const dialogStyles = css`
	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(var(--dav-color-scrim-rgb), 0.5);
	}

	#dialog {
		background-color: var(--dav-color-surface);
		margin: 2ex;
		padding: 2ex;
		border-radius: 5pt;
		min-width: 280px;
	}

	#header {
		margin-bottom: 20px;
		font-weight: 100;
		font-family: Roboto, sans-serif;
		color: var(--dav-color-on-surface);
	}

	#content-container {
		font-family: Roboto, sans-serif;
		color: var(--dav-color-on-surface-variant);
	}
`
