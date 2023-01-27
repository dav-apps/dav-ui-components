import { css } from "@lit/reactive-element"

export const navigationBarItemStyles = css`
	:host {
		flex-grow: 1;
	}

	:host(:hover) {
		cursor: pointer;
	}

	.item-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 48px;
		padding: 12px 0 16px 0;
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
	}

	.item-container.active .icon-container {
		background-color: var(--md-sys-color-secondary-container-light);
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