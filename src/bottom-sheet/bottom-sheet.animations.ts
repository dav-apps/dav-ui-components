export function move(
	bottomSheet: HTMLDivElement,
	overlay: HTMLDivElement,
	positionY: number,
	overlayOpacity: number = 1,
	duration: number = 200
): Animation[] {
	let bottomSheetAnimation = bottomSheet.animate(
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

	let overlayAnimation = overlay.animate(
		[
			{
				opacity: overlayOpacity
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)

	return [bottomSheetAnimation, overlayAnimation]
}
