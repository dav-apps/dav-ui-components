import { css } from "@lit/reactive-element"

export const textareaStyles = css`
	.textarea-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.textarea-label {
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		margin: 0 0 4px;
		cursor: pointer;
		color: #212529;
	}

	.textarea-label.darkTheme {
		color: #f3f3f3;
	}

	.textarea-label.disabled {
		cursor: not-allowed;
		color: #212529b3;
	}

	.textarea-label.disabled.darkTheme {
		color: #f3f3f3b3;
	}

	.textarea {
		padding: 6px 9px;
		width: 100%;
		background: transparent;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		border: 1px solid #8f8f8fb3;
		border-radius: 4px;
	}

	.textarea.darkTheme {
		color: white;
		border: 1px solid #b5b5b5;
	}

	.textarea.disabled {
		cursor: not-allowed;
		border: 1px solid #c3c3c3;
		color: #8d8d8d;
	}

	.textarea.disabled.darkTheme {
		border: 1px solid #707070;
		color: #c5c5c5;
	}

	.textarea.darkTheme::-ms-reveal {
		filter: invert(100%);
	}

	.textarea.darkTheme::placeholder {
		color: #919090;
	}

	.textarea.disabled::placeholder {
		color: #d6d6d6;
	}

	.textarea.disabled.darkTheme::placeholder {
		color: #767676;
	}

	.textarea:focus {
		outline: 1px solid #878787;
	}

	.textarea-error-message {
		max-width: 200px;
		margin: 0px 0px 0px 4px;
		color: #a80000;
		font-size: 12.5px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}
`
