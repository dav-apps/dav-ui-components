import { css } from "@lit/reactive-element"

export const contextMenuStyles = css`
	.container {
		position: absolute;
		background-color: rgb(var(--dav-color-surface-rgb), 0.75);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.12);
		border-radius: 6px;
		font-size: 16px;
		box-shadow: 0px 8px 16px 0px rgb(var(--dav-color-shadow-rgb), 0.2);
		backdrop-filter: blur(4px);
	}
`
