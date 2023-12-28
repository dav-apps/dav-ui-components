export function slideIn(
	contentContainer: HTMLDivElement,
	overlay: HTMLDivElement
): Animation[] {
	const duration = 180

	let contentContainerAnimation = contentContainer.animate(
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

	let overlayAnimation = overlay.animate(
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

	return [contentContainerAnimation, overlayAnimation]
}

export function slideOut(
	contentContainer: HTMLDivElement,
	overlay: HTMLDivElement
): Animation[] {
	const duration = 150

	let contentContainerAnimation = contentContainer.animate(
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

	let overlayAnimation = overlay.animate(
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

	return [contentContainerAnimation, overlayAnimation]
}
