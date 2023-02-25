import { css } from "@lit/reactive-element"

export const iconTextButtonStyles = css`
	button {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 72px;
		padding: 10px 8px;
		color: var(--md-sys-color-on-surface-variant-light);
		background-color: transparent;
		border: none;
		border-radius: 6px;
		cursor: pointer;
		transition: 200ms;
	}

	button:hover {
		background-color: var(--md-sys-color-on-surface-variant-light-hover);
	}

	button:focus,
	button:active {
		background-color: var(--md-sys-color-on-surface-variant-light-focus);
	}

	#icon-container {
		font-size: 18px;
	}

	#label {
		font-family: Roboto, sans-serif;
		font-size: 12px;
		margin-top: 10px;
	}
`
