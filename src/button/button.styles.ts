import { css } from "@lit/reactive-element"

export const buttonStyles = css`
	:host {
		display: inline-block;
	}

	button {
		display: flex;
		align-items: center;
		height: 32px;
		padding: 0px 10px;
		font-size: 14px;
		font-family: "Segoe UI";
		border: none;
		border-radius: 4px;
		background-color: #ededed;
		color: black;
		cursor: pointer;
		transition: 200ms;
	}

	button.disabled {
		cursor: not-allowed;
		background-color: #edededb3;
	}

	button:not(.disabled):hover, button:not(.disabled):active {
		background-color: #e5e5e5;
	}

	button.accent {
		color: white;
		background-color: #0078d4;
	}

	button.accent.disabled {
		background-color: #0078d4b3;
	}

	button.accent:not(.disabled):hover, button.accent:not(.disabled):active {
		background-color: #006cbe;
	}

	button.danger {
		color: white;
		background-color: #dc3545;
	}

	button.danger.disabled {
		background-color: #dc3545b3;
	}

	button.danger:not(.disabled):hover, button.danger:not(.disabled):active {
		background-color: #c82333;
	}
`