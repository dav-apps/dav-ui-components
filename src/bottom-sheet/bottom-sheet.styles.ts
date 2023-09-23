import { css } from "@lit/reactive-element"

export const bottomSheetStyles = css`
	.container {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		width: 0;
	}

	.overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 0;
		background-color: rgb(var(--dav-color-scrim-rgb), 0.5);
		backdrop-filter: blur(4px);
	}

	.overlay.visible {
		width: unset;
	}

	.bottom-sheet-container {
		position: fixed;
		bottom: 0;
		width: 100%;
		display: grid;
		grid-template-columns: auto max-content auto;
		background-color: transparent;
	}

	.bottom-sheet-left-overlay {
		grid-column: 1;
	}

	.bottom-sheet-right-overlay {
		grid-column: 3;
	}

	.handle-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 24px;
		cursor: ns-resize;
	}

	.handle {
		width: 32px;
		height: 4px;
		background-color: rgb(var(--dav-color-on-surface-variant-rgb), 0.4);
		border-radius: 2px;
	}

	.bottom-sheet {
		grid-column: 2;
		justify-self: stretch;
		width: 100vw;
		max-width: 640px;
		border-radius: 28px 28px 0 0;
		background-color: var(--dav-color-surface);
	}

	.content-container {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	.buttons-container {
		padding: 0 24px;
	}

	.buttons-container ::slotted(div) {
		display: flex;
		gap: 12px;
	}

	.inner-content-container {
		overflow-y: auto;
	}
`
