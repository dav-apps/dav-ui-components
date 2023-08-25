export function slideIn(
	content: HTMLDivElement,
	overlay: HTMLDivElement
): Animation[] {
	const duration = 160

	let contentAnimation = content.animate(
		[
			{
				right: "-20px",
				opacity: 0
			},
			{
				right: "0",
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

	return [contentAnimation, overlayAnimation]
}

export function slideOut(
	content: HTMLDivElement,
	overlay: HTMLDivElement
): Animation[] {
	const duration = 160

	let contentAnimation = content.animate(
		[
			{
				right: "0",
				opacity: 1
			},
			{
				right: "-20px",
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

	return [contentAnimation, overlayAnimation]
}
