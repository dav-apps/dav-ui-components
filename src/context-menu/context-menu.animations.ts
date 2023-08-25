export function slideIn(container: HTMLDivElement): Animation {
	return container.animate(
		[
			{
				transform: "scale(0.9) translate(-8px, -8px)",
				opacity: 0
			},
			{
				transform: "scale(1) translate(0, 0)",
				opacity: 1
			}
		],
		{
			duration: 100,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)
}

export function slideOut(container: HTMLDivElement): Animation {
	return container.animate(
		[
			{
				transform: "translateY(0)",
				opacity: 1
			},
			{
				transform: "translateY(8px)",
				opacity: 0
			}
		],
		{
			duration: 100,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)
}
