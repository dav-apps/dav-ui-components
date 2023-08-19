import { css } from "@lit/reactive-element"

export const contextMenuStyles = css`
	#container {
		display: none;
		position: absolute;
		background-color: var(--dav-color-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.12);
		border-radius: 6px;
		font-size: 16px;
		box-shadow: 0px 8px 16px 0px rgb(var(--dav-color-shadow-rgb), 0.2);
	}

	#container.visible {
		display: inline-block;
	}
`
