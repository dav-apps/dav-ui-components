import { css } from "@lit/reactive-element"

export const textfieldStyles = css`
	#textfield-label {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		margin: 0 0 4px;
		cursor: pointer;
	}

	#textfield-input {
		margin: 2px 0px;
		padding: 0px 9px;
		width: 92%;
		height: 28px;
		background: transparent;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		border: 1px solid #8f8f8fb3;
		border-radius: 4px;
	}

	#textfield-input:focus {
		outline: 1px solid #787878;
	}
`