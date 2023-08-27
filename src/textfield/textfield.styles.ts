import { css } from "@lit/reactive-element"

export const textfieldStyles = css`
	.textfield-label {
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		margin: 0 0 4px;
		cursor: pointer;
		color: #212529;
	}

	.textfield-label.darkTheme {
		color: #f3f3f3;
	}

	.textfield-label.disabled {
		cursor: not-allowed;
		color: #212529b3;
	}

	.textfield-label.disabled.darkTheme {
		color: #f3f3f3b3;
	}

	.textfield-input {
		margin: 2px 0px;
		padding: 0px 9px;
		width: 100%;
		height: 28px;
		background: transparent;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		border: 1px solid #8f8f8fb3;
		border-radius: 4px;
	}

	.textfield-input.darkTheme {
		color: white;
		border: 1px solid #b5b5b5;
	}

	.textfield-input.disabled {
		cursor: not-allowed;
		border: 1px solid #c3c3c3;
		color: #8d8d8d;
	}

	.textfield-input.disabled.darkTheme {
		border: 1px solid #707070;
		color: #c5c5c5;
	}

	.textfield-input.darkTheme::-ms-reveal {
		filter: invert(100%);
	}

	.textfield-input.darkTheme::placeholder {
		color: #919090;
	}

	.textfield-input.disabled::placeholder {
		color: #d6d6d6;
	}

	.textfield-input.disabled.darkTheme::placeholder {
		color: #767676;
	}

	.textfield-input:focus {
		outline: 1px solid #878787;
	}

	.textfield-error-message {
		max-width: 200px;
		margin: 0px 0px 0px 4px;
		color: #a80000;
		font-size: 12.5px;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	}
`
