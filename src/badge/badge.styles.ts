import { css } from "@lit/reactive-element"

export const badgeStyles = css`
	:host {
		display: inline-block;
	}

	.container {
		background-color: var(--dav-color-primary-container);
		color: var(--dav-color-on-primary-container);
		padding: 4px 12px;
		border-radius: 14px;
		font-size: 14px;
	}
`
