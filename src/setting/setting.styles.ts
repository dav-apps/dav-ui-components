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
		family: var(--dav-font);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 12px;
		width: 100%;
		box-sizing: border-box;
	}

	.setting-container.expandable {
		flex-direction: column;
		padding: 0;
	}

	.setting-content-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: none;
		background-color: transparent;
		gap: 16px;
		width: 100%;
		padding: 26px 36px;
		border-radius: 12px;
		transition: 200ms;
		cursor: pointer;
	}

	.setting-content-container:hover {
		background-color: var(--dav-color-surface-hover);
	}

	.setting-content-container:focus,
	.setting-content-container:active {
		background-color: var(--dav-color-surface-focus);
	}

	.setting-header {
		margin: 0;
		color: var(--dav-color-on-surface);
		font-family: var(--dav-font);
		font-size: 16px;
	}

	.chevron-svg-container {
		display: flex;
		width: 16px;
		fill: var(--dav-color-on-surface);
		transition: 200ms;
	}

	.expanded-container {
	}
`
