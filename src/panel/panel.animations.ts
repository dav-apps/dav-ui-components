export function slideIn(
	content: HTMLDivElement,
	overlay: HTMLDivElement
): Animation {
	let animation = content.animate(
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
			duration: 160,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)

	overlay.animate(
		[
			{
				opacity: 0
			},
			{
				opacity: 1
			}
		],
		{
			duration: 160,
			fill: "forwards"
		}
	)

	return animation
}

export function slideOut(
	content: HTMLDivElement,
	overlay: HTMLDivElement
): Animation {
	let animation = content.animate(
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
			duration: 160,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)

	overlay.animate(
		[
			{
				opacity: 1
			},
			{
				opacity: 0
			}
		],
		{
			duration: 160,
			fill: "forwards"
		}
	)

	return animation
}
