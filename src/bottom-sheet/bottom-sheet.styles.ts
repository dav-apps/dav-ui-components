import { css } from "@lit/reactive-element"

export const bottomSheetStyles = css`
	#container {
		display: none;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}

	#container.visible {
		display: block;
	}

	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--md-sys-color-scrim-light);
	}

	#content-container {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: grid;
		grid-template-columns: auto max-content auto;
		background-color: transparent;
	}

	#content-left-overlay {
		grid-column: 1;
	}

	#content-right-overlay {
		grid-column: 3;
	}

	#content {
		grid-column: 2;
		justify-self: stretch;
		min-width: 300px;
		max-width: 600px;
		height: 200px;
		border-radius: 16px 16px 0 0;
		background-color: white;
	}
`