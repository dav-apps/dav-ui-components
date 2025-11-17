import { css } from "@lit/reactive-element"

export const radioButtonStyles = css`
	.container {
		display: inline-flex;
		align-items: center;
	}

	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
	}

	label {
		display: inline-flex;
		align-items: center;
		font-family: var(--dav-font);
		font-size: 16px;
		cursor: pointer;
	}

	.background {
		position: relative;
		display: inline-block;
		box-sizing: border-box;
		width: 20px;
		height: 20px;
		cursor: pointer;
		border: 2px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 50%;
		margin-right: 12px;
		background-color: var(--dav-color-surface);
		transition: 200ms border-color cubic-bezier(0, 0, 0.2, 1);
	}

	.background.checked {
		border-color: var(--dav-color-primary);
	}

	.container .background::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: rgb(var(--dav-color-shadow-rgb), 0.04);
		transition: 200ms;
		transform: scale(1);
		opacity: 0;
	}

	.container:hover .background::before {
		transform: scale(2);
		opacity: 1;
	}

	.container:hover .background.checked::before {
		background-color: rgb(var(--dav-color-primary-rgb), 0.1);
	}

	.container:hover .background:not(.checked) {
		border-color: rgb(var(--dav-color-primary-rgb), 0.5);
	}

	.container:hover .background:not(.checked) .inner-circle {
		transform: translate(-50%, -50%) scale(1, 1);
		background-color: rgb(var(--dav-color-primary-rgb), 0.5);
	}

	.inner-circle {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 10px;
		height: 10px;
		background-color: rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 50%;
		transform: translate(-50%, -50%) scale(0, 0);
		transition: transform 200ms cubic-bezier(0, 0, 0.2, 1),
			background-color 200ms cubic-bezier(0, 0, 0.2, 1);
	}

	.background.checked .inner-circle {
		transform: translate(-50%, -50%) scale(1, 1);
		background-color: var(--dav-color-primary);
	}
`
