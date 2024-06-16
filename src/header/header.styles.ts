import { css } from "@lit/reactive-element"

export const headerStyles = css`
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container.start {
		justify-content: start;
	}

	.container.end {
		justify-content: end;
	}

	.header {
		display: flex;
		justify-content: center;
		margin: 0;
		font-family: var(--dav-font);
		font-weight: 400;
		text-align: center;
		color: var(--dav-color-on-surface);
	}

	.right-button-container {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
		margin-left: 10px;
	}

	.back-button {
		margin-right: 12px;
	}
`
