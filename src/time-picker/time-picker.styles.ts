import { css } from "@lit/reactive-element"

export const timePickerStyles = css`
	.container {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}

	.hour-input-container,
	.minute-input-container {
		width: 36px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	span {
		height: 24px;
	}

	.up-button-container,
	.down-button-container {
		display: flex;
		justify-content: center;
	}

	.up-button-container svg {
		transform: rotate(180deg);
	}
`
