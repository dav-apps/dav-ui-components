import { css } from "@lit/reactive-element"

export const textfieldStyles = css`
	.container {
		display: flex;
		flex-direction: column;
	}

	.textfield-label {
		font-family: Roboto, Arial, sans-serif;
		font-size: 14px;
		font-weight: 400;
		margin-bottom: 6px;
		cursor: pointer;
		color: var(--dav-color-on-surface);
	}

	.textfield-label.disabled {
		cursor: not-allowed;
		color: rgb(var(--dav-color-on-surface-rgb), 0.6);
	}

	.textfield-input {
		margin: 2px 0px;
		padding: 0px 9px;
		height: 28px;
		background: transparent;
		font-family: Roboto, Arial, sans-serif;
		font-size: 14px;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 6px;
		transition: 200ms;
	}

	.textfield-input:not(.disabled):hover,
	.textfield-input:not(.disabled):focus,
	.textfield-input:not(.disabled):active {
		background-color: var(--dav-color-surface-hover);
		border: 1px solid var(--dav-color-primary);
		outline: 1px solid var(--dav-color-primary);
	}

	.textfield-input.disabled {
		cursor: not-allowed;
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.3);
		background-color: rgb(var(--dav-color-surface-rgb), 0.6);
	}

	.textfield-input::placeholder {
		color: rgb(var(--dav-color-on-surface-rgb), 0.6);
	}

	.textfield-input.disabled::placeholder {
		color: rgb(var(--dav-color-on-surface-rgb), 0.4);
	}

	.textfield-error-message {
		max-width: 200px;
		margin: 4px 0px 0px 4px;
		color: var(--dav-color-error);
		font-size: 13px;
		font-family: Roboto, Arial, sans-serif;
	}
`
