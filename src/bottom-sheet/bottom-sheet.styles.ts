import { css } from "@lit/reactive-element"

export const bottomSheetStyles = css`
	#container {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}

	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--md-sys-color-scrim-light);
	}
`