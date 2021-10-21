import { css } from "@lit/reactive-element"

export const textareaStyles = css`
	#textarea-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	#textarea-label {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		margin: 0 0 4px;
		cursor: pointer;
		color: #212529;
	}

	#textarea-label.darkTheme {
		color: #f3f3f3;
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

	#textarea-error-message {
		max-width: 200px;
		margin: 0px 0px 0px 4px;
		color: #A80000;
		font-size: 12.5px;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
`