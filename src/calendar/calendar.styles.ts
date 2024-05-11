import { css } from "@lit/reactive-element"

export const calendarStyles = css`
	.container {
		display: inline-block;
		background-color: var(--dav-color-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.15);
		border-radius: 12px;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		padding: 6px 12px 12px;
	}

	.top-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 6px;
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
