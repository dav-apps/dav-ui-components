import { css } from "@lit/reactive-element"

export const toastStyles = css`
	.container {
		display: flex;
		align-items: center;
		background-color: var(--dav-color-primary);
		color: var(--dav-color-on-primary);
		max-width: 250px;
		height: 48px;
		padding: 0 12px;
		border-radius: 14px;
		font-size: 16px;
	}
`
