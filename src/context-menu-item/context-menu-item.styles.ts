import { css } from "@lit/reactive-element"

export const contextMenuItemStyles = css`
	button {
		display: flex;
		align-items: center;
		width: 100%;
		height: 37px;
		border: none;
		border-radius: 4px;
		background-color: transparent;
		color: black;
		padding: 4px 10px;
		transition: 0.1s;
	}

	button:hover, button:hover {
		background-color: #e9e9e9;
	}

	i {
		font-size: 16px;
		margin-right: 10px;
	}
`