import { css } from "@lit/reactive-element"

export const sidenavItemStyles = css`
	.sidenav-item {
		display: flex;
		align-items: center;
		width: 100%;
		height: 34px;
		border: none;
		border-radius: 20px;
		background-color: transparent;
		color: var(--dav-color-on-surface);
		padding: 0 16px;
		transition: 200ms;
		text-decoration: none;
		cursor: pointer;
		font-size: 13px;
		font-family: var(--dav-font);
		font-weight: 400;
	}

	.sidenav-item.active {
		background-color: var(--dav-color-primary);
		color: var(--dav-color-on-primary);
	}

	.sidenav-item.disabled {
		cursor: not-allowed;
		background-color: rgb(var(--dav-color-on-surface-rgb), 0.12);
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
	}

	.sidenav-item:not(.disabled):hover {
		background-color: var(--dav-color-surface-hover);
	}

	.sidenav-item:not(.disabled):focus,
	.sidenav-item:not(.disabled):active {
		background-color: var(--dav-color-surface-focus);
	}

	.sidenav-item.active:not(.disabled):hover {
		background-color: var(--dav-color-primary-hover);
	}

	.sidenav-item.active:not(.disabled):focus,
	.sidenav-item.active:not(.disabled):active {
		background-color: var(--dav-color-primary-focus);
	}
`
