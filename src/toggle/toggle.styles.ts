import { css } from "@lit/reactive-element"

export const toggleStyles = css`
	.container {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 20px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		display: flex;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--dav-color-surface);
		border: 1px solid var(--dav-color-outline);
		border-radius: 34px;
		transition: 200ms;
		cursor: pointer;
	}

	.switch.disabled .slider {
		background-color: rgb(var(--dav-color-surface-rgb), 0.38);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.38);
	}

	.switch:not(.disabled) .slider:hover {
		background-color: var(--dav-color-surface-hover);
	}

	.switch:not(.disabled) input:focus + .slider,
	.switch:not(.disabled) input:active + .slider {
		background-color: var(--dav-color-surface-focus);
	}

	.slider:before {
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

	.switch.disabled .slider:before {
		background-color: rgb(var(--dav-color-on-surface-variant-rgb), 0.38);
	}

	.switch:not(.disabled):hover .slider:before {
		height: 14px;
		width: 14px;
		margin-left: 3px;
	}

	.switch:not(.disabled) input:focus + .slider:before {
		height: 14px;
		width: 14px;
		margin-left: 3px;
	}

	.switch:not(.disabled):active .slider:before {
		height: 14px;
		width: 17px;
	}

	.switch.checked:not(.disabled):active .slider:before {
		margin-left: -0.5px;
	}

	.switch:not(.disabled).checked:hover .slider {
		background-color: var(--dav-color-primary-hover);
	}

	.switch:not(.disabled).checked input:focus + .slider,
	.switch:not(.disabled).checked input:active + .slider {
		background-color: var(--dav-color-primary-focus);
	}

	.switch.checked .slider {
		background-color: var(--dav-color-primary);
		border: 1px solid var(--dav-color-primary);
	}

	.switch.checked.disabled .slider {
		background-color: rgb(var(--dav-color-primary-rgb), 0.38);
		border: none;
	}

	.switch .slider:before {
		background-color: var(--dav-color-on-surface-variant);
	}

	.switch.checked .slider:before {
		background-color: var(--dav-color-on-primary);
		transform: translateX(18px);
	}

	.label {
		color: var(--dav-color-on-surface);
		margin-left: 12px;
		font-family: var(--dav-font);
	}

	.label.disabled {
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
	}
`
