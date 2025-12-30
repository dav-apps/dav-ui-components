import { css } from "@lit/reactive-element"

export const calendarStyles = css`
	.container {
		display: inline-block;
		background-color: var(--dav-color-surface);
		border: 1px solid rgb(var(--dav-color-outline-rgb), 0.15);
		border-radius: 12px;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		padding: 6px 12px 12px;
		font-family: var(--dav-font);
	}

	.top-container {
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 6px;
	}

	.date-container {
		color: var(--dav-color-on-surface);
	}

	.date-container.disabled {
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
	}

	.bottom-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.arrow-right svg {
		transform: rotate(180deg);
	}

	.weekdays-container {
		display: flex;
		gap: 18px;
		font-weight: 500;
		color: rgb(var(--dav-color-on-surface-rgb), 0.6);
	}

	.weekdays-container.disabled {
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
	}

	.month-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.week-container {
		display: flex;
		justify-content: space-between;
	}

	.day-button {
		width: 28px;
		height: 28px;
		padding: 0;
		font-size: 14px;
		border-radius: 50%;
		border: none;
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
		background-color: var(--dav-color-surface);
		transition: 200ms;
		font-family: var(--dav-font);
	}

	.day-button.current-month:not(.disabled):hover {
		background-color: rgb(var(--dav-color-surface-variant-hover-rgb), 0.4);
	}

	.day-button.current-day {
		background-color: rgb(var(--dav-color-primary-rgb), 0.08);
	}

	.day-button.current-month {
		color: var(--dav-color-on-surface);
		cursor: pointer;
	}

	.day-button.selected {
		background-color: rgb(var(--dav-color-surface-variant-focus-rgb), 0.4);
	}

	.day-button.disabled {
		cursor: not-allowed;
		color: rgb(var(--dav-color-on-surface-rgb), 0.38);
	}
`
