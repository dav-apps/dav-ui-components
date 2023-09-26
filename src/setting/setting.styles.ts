import { css } from "@lit/reactive-element"

export const settingStyles = css`
	:host {
		width: 100%;
	}

	.setting-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding: 26px 36px;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		font-family: var(--dav-font);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 12px;
	}

	.setting-header {
		margin: 0;
	}
`
