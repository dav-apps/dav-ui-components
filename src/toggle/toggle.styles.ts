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

	.slider:hover {
		background-color: var(--dav-color-surface-hover);
	}

	input:focus + .slider,
	input:active + .slider {
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

	.switch:hover .slider:before {
		height: 14px;
		width: 14px;
		margin-left: 3px;
	}

	input:focus + .slider:before {
		height: 14px;
		width: 14px;
		margin-left: 3px;
	}

	.switch:active .slider:before {
		height: 14px;
		width: 17px;
	}

	.switch.checked:active .slider:before {
		margin-left: -0.5px;
	}

	.switch.checked:hover .slider {
		background-color: var(--dav-color-primary-hover);
	}

	.switch.checked input:focus + .slider,
	.switch.checked input:active + .slider {
		background-color: var(--dav-color-primary-focus);
	}

	.switch.checked .slider {
		background-color: var(--dav-color-primary);
		border: 1px solid var(--dav-color-primary);
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
`
