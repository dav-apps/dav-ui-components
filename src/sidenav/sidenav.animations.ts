export function slideIn(
	content: HTMLDivElement,
	overlay: HTMLDivElement,
	side: "left" | "right" = "left"
): Animation[] {
	const duration = 160

	let contentAnimation = content.animate(
		[
			{
				[side]: "-20px",
				opacity: 0
			},
			{
				[side]: "0",
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
	overlay: HTMLDivElement,
	side: "left" | "right" = "left"
): Animation[] {
	const duration = 160

	let contentAnimation = content.animate(
		[
			{
				[side]: "0",
				opacity: 1
			},
			{
				[side]: "-20px",
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
