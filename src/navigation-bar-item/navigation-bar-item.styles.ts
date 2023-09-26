import { css } from "@lit/reactive-element"

export const navigationBarItemStyles = css`
	.item-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: transparent;
		min-width: 48px;
		padding: 12px 0 16px 0;
		border: none;
		cursor: pointer;
	}

	.icon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--dav-color-on-secondary-container);
		height: 32px;
		width: 64px;
		font-size: 18px;
		border-radius: 18px;
		padding: 2px 0;
		transition: all 200ms;
	}

	.item-container.active .icon-container {
		background-color: var(--dav-color-secondary-container);
	}

	.item-container.active:hover .icon-container {
		box-shadow: inset 0 0 10px 0 rgb(var(--base-rgb), 0.6);
	}

	.item-container:not(.active):hover .icon-container {
		background-color: var(--dav-color-secondary-container-hover);
	}

	.item-container:not(.active):focus .icon-container {
		background-color: var(--dav-color-secondary-container-focus);
	}

	.label-container {
		color: var(--dav-color-on-secondary-container);
		font-family: var(--dav-font);
		margin-top: 6px;
		font-weight: 400;
		font-size: 15px;
	}

	.label-container ::slotted(p) {
		margin: 0;
	}
`
