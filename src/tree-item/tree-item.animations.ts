export function slideIn(
	childrenContainer: HTMLDivElement,
	iconContainer: HTMLDivElement
): Animation[] {
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

	let iconContainerAnimation = iconContainer.animate(
		[
			{
				transform: "rotate(-90deg)"
			},
			{
				transform: "rotate(0)"
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)

	return [childrenContainerAnimation, iconContainerAnimation]
}

export function slideOut(
	childrenContainer: HTMLDivElement,
	iconContainer: HTMLDivElement
): Animation[] {
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

	let iconContainerAnimation = iconContainer.animate(
		[
			{
				transform: "rotate(0)"
			},
			{
				transform: "rotate(-90deg)"
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)

	return [childrenContainerAnimation, iconContainerAnimation]
}
