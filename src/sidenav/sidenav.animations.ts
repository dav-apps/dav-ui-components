export function showOverlay(overlay: HTMLDivElement) {
	return overlay.animate(
		[
			{
				opacity: 0
			},
			{
				opacity: 1
			}
		],
		{
			duration: 200,
			fill: "forwards"
		}
	)
}

export function hideOverlay(overlay: HTMLDivElement) {
	return overlay.animate(
		[
			{
				opacity: 1
			},
			{
				opacity: 0
			}
		],
		{
			duration: 200,
			fill: "forwards"
		}
	)
}
