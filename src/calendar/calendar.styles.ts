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

	.bottom-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.arrow-right svg {
		transform: rotate(180deg);
	}

	.weekdays-container {
		display: flex;
		gap: 8px;
		font-weight: 500;
	}

	.month-container {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.week-container {
		display: flex;
		justify-content: space-between;
	}

	.day-container {
		display: flex;
		justify-content: center;
		width: 18px;
	}
`
