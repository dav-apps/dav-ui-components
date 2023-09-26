import { css } from "@lit/reactive-element"

export const tabStyles = css`
	:host {
		display: inline-flex;
		justify-content: center;
	}

	:host(:hover) {
		cursor: pointer;
	}

	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		width: 100%;
		height: 100%;
		font-size: 18px;
		font-family: var(--dav-font);
		background-color: transparent;
		color: var(--dav-color-on-surface);
		border: none;
		padding: 0 16px;
		transition: all 500ms;
		cursor: pointer;
	}

	p {
		transition: all 200ms;
	}

	.container.active {
		color: var(--dav-color-primary);
	}

	.container:not(.active):hover > p,
	.container:not(.active):focus > p,
	.container:not(.active):active > p {
		color: var(--dav-color-on-surface-variant);
	}

	.border {
		border-bottom: 3px solid;
		border-radius: 3px;
		margin-top: -6px;
		transition: all 200ms;
	}

	.container.active > .border {
		width: 50%;
	}

	.container.active:hover > .border,
	.container.active:focus > .border,
	.container.active:active > .border {
		width: 41%;
	}

	.container:not(.active) > .border {
		width: 0;
	}
`
