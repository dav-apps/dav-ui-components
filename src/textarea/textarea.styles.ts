import { css } from "@lit/reactive-element"

export const textareaStyles = css`
	#textarea-container {
		display: flex;
	}

	#textarea {
		padding: 6px 9px;
		width: 100%;
		background: transparent;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		border: 1px solid #8f8f8fb3;
		border-radius: 4px;
	}

	#textarea.darkTheme {
		color: white;
		border: 1px solid #b5b5b5;
	}

	#textarea:focus {
		outline: 1px solid #878787;
	}
`