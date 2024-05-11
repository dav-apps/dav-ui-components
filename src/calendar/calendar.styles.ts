import { css } from "@lit/reactive-element"

export const calendarStyles = css`
	.container {
		display: inline-block;
		background-color: var(--dav-color-surface);
	}

	.top-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
	}

	.arrow-right svg {
		transform: rotate(180deg);
	}

	.weekdays-container {
		display: flex;
		gap: 8px;
	}

	.month-container {
		display: flex;
		justify-content: space-between;
	}

	.day-container {
		display: flex;
		justify-content: center;
	}
`
