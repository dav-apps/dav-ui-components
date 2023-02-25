import { css } from "@lit/reactive-element"

export const dialogStyles = css`
	#overlay {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--md-sys-color-scrim-light);
	}

	#dialog {
		background-color: var(--md-sys-color-surface-light);
		margin: 2ex;
		padding: 2ex;
		border-radius: 5pt;
		min-width: 280px;
	}

	#dialog.darkTheme {
		background-color: var(
			--dark-theme-color-tertiary,
			var(--default-dark-theme-color-tertiary)
		);
	}

	#header {
		margin-bottom: 20px;
		font-weight: 100;
		font-family: Roboto, sans-serif;
		color: var(--md-sys-color-on-surface-light);
	}

	#header.darkTheme {
		color: white;
	}

	#content-container {
		font-family: Roboto, sans-serif;
		color: var(--md-sys-color-on-surface-variant-light);
	}
`
