import { css } from "@lit/reactive-element"

export const iconButtonStyles = css`
	:host {
		display: inline-block;
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 48px;
		width: 48px;
		font-size: 24px;
		background-color: #F5F5F5;
		color: #4b4c4e;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		transition: 200ms;
	}
`