import { css } from "@lit/reactive-element"

export const checkboxStyles = css`
	:host {
		display: flex;
		align-items: center;
		margin: 4px 0px;
	}

	#checkbox {
		display: inherit;
		border: 1px solid #949494;
		border-radius: 20%;
		cursor: pointer;
	}

	#checkbox.disabled {
		border: 1px solid #94949480;
		cursor: not-allowed;
	}

	#checkbox:not(.disabled):focus {
		outline: 2px solid #878787;
		outline-offset: 2px;
	}

	#checkbox-label {
		cursor: pointer;
		font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		padding-left: 10px;
		color: #212529;
	}

	#checkbox-label.empty {
		padding: 0;
	}

	#checkbox-label.darkTheme {
		color: #f3f3f3;
	}

	#checkbox-label.disabled {
		cursor: not-allowed;
		color: #21252980;
	}

	#checkbox-label.disabled.darkTheme {
		color: #f3f3f380;
	}

	#checkmark {
		fill: #2b2b2b;
		stroke-width: 0px;
	}

	#checkmark.darkTheme {
		fill: #f3f3f3;
	}

	#checkbox.disabled > #checkmark {
		fill: #2b2b2b80;
	}

	#checkbox.disabled > #checkmark.darkTheme {
		fill: #f3f3f380;
	}
`
