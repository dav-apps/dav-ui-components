import { css } from "@lit/reactive-element"

export const contextMenuStyles = css`
	#container {
		display: none;
		position: absolute;
		background-color: var(--dav-color-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.12);
		border-radius: 6px;
		font-size: 16px;
		box-shadow: 0 6.4px 14.4px 0 rgb(0 0 0 / 13%),
			0 1.2px 3.6px 0 rgb(0 0 0 / 11%);
	}

	#container.visible {
		display: inline-block;
	}
`
