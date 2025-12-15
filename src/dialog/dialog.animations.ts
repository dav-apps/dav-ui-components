const duration = 180

export function slideInDialog(dialog: HTMLDivElement): Animation {
	return dialog.animate(
		[
			{
				transform: "translateY(10px)",
				opacity: 0
			},
			{
				transform: "translateY(0px)",
				opacity: 1
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)
}

export function slideInOverlay(overlay: HTMLDivElement): Animation {
	return overlay.animate(
		[
			{
				opacity: 0
			},
			{
				opacity: 1
			}
		],
		{
			duration,
			fill: "forwards"
		}
	)
}

export function slideOutDialog(dialog: HTMLDivElement): Animation {
	return dialog.animate(
		[
			{
				transform: "scale(1)",
				opacity: 1
			},
			{
				transform: "scale(0.95)",
				opacity: 0
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)
}

export function slideOutOverlay(overlay: HTMLDivElement): Animation {
	return overlay.animate(
		[
			{
				opacity: 1
			},
			{
				opacity: 0
			}
		],
		{
			duration,
			fill: "forwards"
		}
	)
}
