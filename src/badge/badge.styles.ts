import { css } from "@lit/reactive-element"

export const badgeStyles = css`
	:host {
		display: inline-block;
	}

	.container {
		display: inline-flex;
		background-color: var(--dav-color-primary);
		color: var(--dav-color-on-primary);
		padding: 4px 12px;
		border: none;
		border-radius: 14px;
		font-size: 14px;
		cursor: pointer;
		transition: 200ms;
	}

	a.container {
		text-decoration: none;
	}

	.container:hover,
	.container:focus {
		transform: translateY(-3px);
		box-shadow: 0px 4px 8px 0px rgb(var(--dav-color-shadow-rgb), 0.1);
	}

	.container.tonal {
		background-color: var(--dav-color-primary-container);
		color: var(--dav-color-on-primary-container);
	}

	.container.secondary {
		background-color: var(--dav-color-secondary);
		color: var(--dav-color-on-secondary);
	}

	.container.secondary.tonal {
		background-color: var(--dav-color-secondary-container);
		color: var(--dav-color-on-secondary-container);
	}

	.container.tertiary {
		background-color: var(--dav-color-tertiary);
		color: var(--dav-color-on-tertiary);
	}

	.container.tertiary.tonal {
		background-color: var(--dav-color-tertiary-container);
		color: var(--dav-color-on-tertiary-container);
	}

	.container.error {
		background-color: var(--dav-color-error);
		color: var(--dav-color-on-error);
	}

	.container.error.tonal {
		background-color: var(--dav-color-error-container);
		color: var(--dav-color-on-error-container);
	}
`
