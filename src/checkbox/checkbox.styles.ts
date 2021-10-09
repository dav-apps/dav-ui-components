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
	}

	#checkbox:focus {
		outline: 2px solid #878787;
		outline-offset: 2px;
	}

	#checkbox-label {
		cursor: pointer;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 14px;
		padding-left: 10px;
	}

	svg {
		stroke: #2b2b2b;
		stroke-width: 0px;
	}
`