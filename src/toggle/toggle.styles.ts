import { css } from "@lit/reactive-element"

export const toggleStyles = css`
	#switch {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 20px;
	}

	#switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	#slider {
		position: absolute;
		display: flex;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--md-sys-color-surface-light);
		border: 1px solid var(--md-sys-color-outline-light);
		border-radius: 34px;
		transition: 200ms;
	}

	#slider.darkTheme {
		background-color: #545e66;
	}

	#slider:hover,
	input:focus + #slider {
		background-color: rgb(var(--md-ref-palette-neutral95-rgb));
	}

	#slider:before {
		display: block;
		content: "";
		height: 12px;
		width: 12px;
		align-self: center;
		margin-left: 4px;
		background-color: white;
		transition: 200ms;
		border-radius: 10px;
	}

	#switch:hover #slider:before {
		height: 14px;
		width: 14px;
		margin-left: 3px;
	}

	input:focus + #slider:before {
		height: 14px;
		width: 14px;
		margin-left: 3px;
	}

	#switch:active #slider:before {
		height: 14px;
		width: 17px;
	}

	#switch.checked:active #slider:before {
		margin-left: -0.5px;
	}

	#switch.checked:hover #slider {
		background-color: rgb(var(--md-ref-palette-primary35-rgb));
	}

	#switch.checked input:focus + #slider {
		background-color: rgb(var(--md-ref-palette-primary35-rgb));
	}

	#switch.checked #slider {
		background-color: var(--md-sys-color-primary-light);
		border: 1px solid var(--md-sys-color-primary-light);
	}

	#switch #slider:before {
		background-color: var(--md-sys-color-on-surface-variant-light);
	}

	#switch.checked #slider:before {
		background-color: var(--md-sys-color-on-primary-light);
		transform: translateX(18px);
	}
`
