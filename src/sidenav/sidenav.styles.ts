import { css } from "@lit/reactive-element"

export const sidenavStyles = css`
	#container {
		width: max-content;
		height: 100%;
		padding: 10px 6px;
		background-color: var(
			--light-theme-color-secondary,
			var(--default-light-theme-color-secondary)
		);
		transition: 0.2s;
		overflow-y: auto;
	}

	#container.darkTheme {
		background-color: var(
			--dark-theme-color-secondary,
			var(--default-dark-theme-color-secondary)
		);
	}

	#container.over {
		position: fixed;
	}

	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--overlay-color, var(--default-overlay-color));
	}
`
