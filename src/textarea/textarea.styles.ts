import { css } from "@lit/reactive-element"

export const textareaStyles = css`
	.textarea-container {
		display: flex;
		flex-direction: column;
	}

	.textarea-label {
		font-family: Roboto, Arial, sans-serif;
		font-size: 14px;
		font-weight: 400;
		padding-bottom: 8px;
		cursor: pointer;
		color: var(--dav-color-on-surface);
	}

	.textarea-label.disabled {
		cursor: not-allowed;
		color: rgb(var(--dav-color-on-surface-rgb), 0.6);
	}

	#textarea {
		padding: 6px 8px;
		font-family: Roboto, Arial, sans-serif;
		font-size: 14px;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 6px;
		transition: 200ms;
	}

	#textarea:not(.disabled):hover,
	#textarea:not(.disabled):focus,
	#textarea:not(.disabled):active {
		background-color: var(--dav-color-surface-hover);
		border: 1px solid var(--dav-color-primary);
		outline: 1px solid var(--dav-color-primary);
	}

	#textarea.disabled {
		cursor: not-allowed;
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.3);
		background-color: rgb(var(--dav-color-surface-rgb), 0.6);
	}

	#textarea.disabled::placeholder {
		color: rgb(var(--dav-color-on-surface-rgb), 0.4);
	}

	.textarea-error-message {
		max-width: 200px;
		margin: 4px 0px 0px 4px;
		color: var(--dav-color-error);
		font-size: 13px;
		font-family: Roboto, Arial, sans-serif;
	}
`
