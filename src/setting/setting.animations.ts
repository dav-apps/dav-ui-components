export function slideIn(
	expandedContainer: HTMLDivElement,
	chevronSvgContainer: HTMLDivElement
): Animation[] {
	const duration = 200

	let expandedContainerAnimation = expandedContainer.animate(
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

	let chevronSvgContainerAnimation = chevronSvgContainer.animate(
		[
			{
				transform: "rotate(0)"
			},
			{
				transform: "rotate(180deg)"
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)

	return [expandedContainerAnimation, chevronSvgContainerAnimation]
}

export function slideOut(
	expandedContainer: HTMLDivElement,
	chevronSvgContainer: HTMLDivElement
): Animation[] {
	const duration = 200

	let expandedContainerAnimation = expandedContainer.animate(
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

	let chevronSvgContainerAnimation = chevronSvgContainer.animate(
		[
			{
				transform: "rotate(180deg)"
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

	return [expandedContainerAnimation, chevronSvgContainerAnimation]
}
