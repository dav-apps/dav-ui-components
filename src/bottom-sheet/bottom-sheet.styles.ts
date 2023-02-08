import { css } from "@lit/reactive-element"

export const bottomSheetStyles = css`
	#container {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		width: 0;
	}

	#container.visible {
		width: unset;
	}

	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 0;
		background-color: var(--md-sys-color-scrim-light);
		opacity: 0;
		transition: 200ms;
	}

	#container.visible > #overlay {
		width: unset;
		opacity: 1;
	}

	#bottom-sheet-container {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: grid;
		grid-template-columns: auto max-content auto;
		background-color: transparent;
		transition: 200ms;
	}

	#bottom-sheet-left-overlay {
		grid-column: 1;
	}

	#bottom-sheet-right-overlay {
		grid-column: 3;
	}

	#handle {
		width: 32px;
		height: 4px;
		background-color: rgb(var(--md-ref-palette-neutral10-rgb), 0.4);
		margin: 10px auto;
		border-radius: 2px;
	}

	#content-container {
		grid-column: 2;
		justify-self: stretch;
		width: 100vw;
		max-width: 640px;
		height: 200px;
		border-radius: 28px 28px 0 0;
		background-color: var(--md-sys-color-surface-light);
	}

	#content {
		width: 100%;
		height: 100%;
		padding: 0 24px;
	}
`