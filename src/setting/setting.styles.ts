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

	button.setting-container {
		background-color: transparent;
		transition: 200ms;
		cursor: pointer;
	}

	button.setting-container:hover {
		background-color: var(--dav-color-surface-hover);
	}

	button.setting-container:focus,
	button.setting-container:active {
		background-color: var(--dav-color-surface-focus);
	}

	.setting-container.expanded {
		border-bottom: 1px solid rgb(var(--dav-color-outline-rgb), 0.3);
		border-radius: 12px 12px 0 0;
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
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-top: none;
		border-radius: 0 0 12px 12px;
		padding: 26px 36px;
	}
`
