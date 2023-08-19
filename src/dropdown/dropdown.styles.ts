import { css } from "@lit/reactive-element"

export const dropdownStyles = css`
	#dropdown {
		position: relative;
		display: inline-flex;
		flex-direction: column;
	}

	#dropdown-button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: white;
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.4);
		border-radius: 6px;
		padding: 5px 10px;
		font-family: Roboto, sans-serif;
		font-size: 14px;
		background-color: var(--dav-color-surface);
		transition: 200ms;
		cursor: pointer;
	}

	#dropdown-button:hover,
	#dropdown-button:focus,
	#dropdown-button:active {
		border: 1px solid var(--dav-color-primary);
		background-color: var(--dav-color-surface-hover);
	}

	#dropdown-button.disabled {
		cursor: not-allowed;
		background-color: #edededb3;
		border: none;
	}

	#dropdown-button span {
		height: 21px;
		line-height: 21px;
		overflow: hidden;
		color: var(--dav-color-on-surface);
	}

	#dropdown-button i {
		padding-top: 1px;
		font-size: 12px;
	}

	#dropdown-label {
		font-family: Roboto, sans-serif;
		margin-bottom: 8px;
		font-size: 14px;
	}

	#chevron-svg-container {
		display: flex;
		width: 12px;
		fill: var(--dav-color-on-surface);
		transition: 200ms;
	}

	#dropdown-button:active #chevron-svg-container,
	#dropdown-button.active #chevron-svg-container {
		transform: translateY(2px);
	}

	#dropdown-content {
		display: none;
		position: absolute;
		overflow: auto;
		z-index: 1;
		background-color: var(--dav-color-surface);
		box-shadow: 0px 8px 16px 0px rgb(var(--dav-color-shadow-rgb), 0.2);
		font-family: Roboto, sans-serif;
		font-size: 16px;
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.12);
		border-radius: 6px;
	}

	#dropdown-content.visible {
		display: block;
	}

	.dropdown-option {
		margin: 0px;
		padding: 6px 10px;
		display: block;
		border: none;
		width: 100%;
		text-align: left;
		background-color: var(--dav-color-surface);
		color: var(--dav-color-on-surface);
		border-radius: 6px;
		margin: 4px;
		width: -webkit-fill-available;
		width: -moz-available;
		transition: 200ms;
		cursor: pointer;
		font-family: Roboto, sans-serif;
		font-size: 15px;
	}

	.dropdown-option:hover {
		background-color: var(--dav-color-surface-hover);
	}

	.dropdown-option:focus,
	.dropdown-option:active,
	.dropdown-option.selected {
		background-color: var(--dav-color-surface-focus);
	}

	.dropdown-divider {
		background-color: white;
		border: none;
		margin: 0;
		padding: 0.5rem;
	}

	.dropdown-divider hr {
		margin: 0;
	}
`
