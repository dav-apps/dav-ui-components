export function move(
	bottomSheet: HTMLDivElement,
	positionY: number,
	duration = 200
): Animation {
	return bottomSheet.animate(
		[
			{
				transform: `translateY(${positionY}px)`
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)
}
