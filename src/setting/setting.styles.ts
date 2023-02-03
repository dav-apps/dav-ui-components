import { css } from "@lit/reactive-element"

export const settingStyles = css`
	:host {
		width: 100%;
	}

	#setting-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		padding: 26px 36px;
		background-color: var(--md-sys-color-surface-light);
		color: var(--md-sys-color-on-surface-light);
		font-family: Roboto;
		border-radius: 6px;
		box-shadow: rgb(var(--md-ref-palette-neutral-variant80-rgb)) 0px 0px 2px 0px;
	}

	#setting-header {
		margin: 0;
	}
`