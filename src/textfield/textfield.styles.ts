import { css } from "@lit/reactive-element"

export const textfieldStyles = css`
	.container {
		display: flex;
		flex-direction: column;
	}

	.textfield-label {
		font-family: var(--dav-font);
		font-size: 14px;
		font-weight: 400;
		padding-bottom: 8px;
		cursor: pointer;
		color: var(--dav-color-on-surface);
	}

	.textfield-label.disabled {
		cursor: not-allowed;
		color: rgb(var(--dav-color-on-surface-rgb), 0.6);
	}

	#textfield {
		margin: 0;
		padding: 0px 9px;
		height: 28px;
		background: transparent;
		font-family: var(--dav-font);
		font-size: 14px;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 6px;
		transition-duration: 200ms;
		transition-property: background-color, border;
	}

	#textfield:not(.disabled):hover,
	#textfield:not(.disabled):focus,
	#textfield:not(.disabled):active {
		background-color: var(--dav-color-surface-hover);
		border: 1px solid var(--dav-color-primary);
		outline: 1px solid var(--dav-color-primary);
	}

	#textfield.disabled {
		cursor: not-allowed;
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.3);
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
		background-color: rgb(var(--dav-color-surface-rgb), 0.6);
	}

	#textfield::placeholder {
		color: rgb(var(--dav-color-on-surface-rgb), 0.6);
	}

	#textfield.disabled::placeholder {
		color: rgb(var(--dav-color-on-surface-rgb), 0.4);
	}

	#textfield.no-arrows::-webkit-outer-spin-button,
	#textfield.no-arrows::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	#textfield.no-arrows {
		-moz-appearance: textfield;
	}

	.textfield-error-message {
		max-width: 200px;
		margin: 4px 0px 0px 4px;
		color: var(--dav-color-error);
		font-size: 13px;
		font-family: var(--dav-font);
	}
`
