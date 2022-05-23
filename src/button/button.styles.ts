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

	button.darkTheme {
		background-color: #22313e;
		color: white;
	}

	button.disabled {
		cursor: not-allowed;
		background-color: #edededb3;
		color: #00000080;
	}

	button.disabled.darkTheme {
		color: #ffffff80;
		background-color: #2e3b46;
	}

	button:not(.disabled):hover, button:not(.disabled):active {
		background-color: #e5e5e5;
	}

	button.darkTheme:not(.disabled):hover, button.darkTheme:not(.disabled):active {
		background-color: #1c2938;
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