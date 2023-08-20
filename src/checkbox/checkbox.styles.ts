import { css } from "@lit/reactive-element"

export const checkboxStyles = css`
	:host {
		display: flex;
		align-items: center;
		margin: 4px 0px;
	}

	#checkbox {
		display: inherit;
		background-color: var(--dav-color-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.5);
		border-radius: 25%;
		cursor: pointer;
	}

	#checkbox.disabled {
		border-color: rgb(var(--dav-color-outline-rgb), 0.25);
		cursor: not-allowed;
	}

	#checkbox:focus {
		outline: 2px solid var(--dav-color-outline);
		outline-offset: 2px;
	}

	#checkbox-label {
		color: var(--dav-color-on-surface);
		font-family: Roboto, Arial, sans-serif;
		font-size: 14px;
		padding-left: 10px;
		cursor: pointer;
	}

	#checkbox-label.empty {
		padding: 0;
	}

	#checkbox-label.disabled {
		color: rgb(var(--dav-color-on-surface-rgb), 0.5);
		cursor: not-allowed;
	}

	#checkmark {
		fill: var(--dav-color-on-surface);
		stroke-width: 0px;
	}

	#checkbox.disabled > #checkmark {
		fill: rgb(var(--dav-color-on-surface-rgb), 0.5);
	}
`
