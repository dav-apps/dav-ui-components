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
		color: var(--md-sys-color-on-secondary-container-light);
		height: 32px;
		width: 64px;
		font-size: 18px;
		border-radius: 18px;
		padding: 2px 0;
		transition: all 200ms;
	}

	.item-container.active .icon-container {
		background-color: var(--md-sys-color-secondary-container-light);
	}

	.item-container.active:hover .icon-container {
		box-shadow: inset 0 0 10px 0 rgb(var(--md-ref-palette-secondary95-rgb));
	}

	.item-container:not(.active):hover .icon-container {
		background-color: var(--md-sys-color-secondary-container-light-hover);
	}

	.item-container:not(.active):focus .icon-container {
		background-color: var(--md-sys-color-secondary-container-light-focus);
	}

	.label-container {
		color: var(--md-sys-color-on-secondary-container-light);
		font-family: Roboto;
		margin-top: 6px;
		font-weight: 400;
		font-size: 15px;
	}

	.label-container ::slotted(p) {
		margin: 0;
	}
`
