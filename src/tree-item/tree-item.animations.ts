export function slideIn(childrenContainer: HTMLDivElement): Animation[] {
	const duration = 200

	let childrenContainerAnimation = childrenContainer.animate(
		[
			{
				top: "-10px",
				opacity: 0
			},
			{
				top: "0",
				opacity: 1
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)

	return [childrenContainerAnimation]
}

export function slideOut(childrenContainer: HTMLDivElement): Animation[] {
	const duration = 200

	let childrenContainerAnimation = childrenContainer.animate(
		[
			{
				top: "0",
				opacity: 1
			},
			{
				top: "-10px",
				opacity: 0
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)

	return [childrenContainerAnimation]
}
