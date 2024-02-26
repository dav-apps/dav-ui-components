import { Toast } from "./toast.js"

const paddingBottom = 20
const animationDistance = 20

export function slideIn(toast: Toast): Animation {
	const duration = 160
	const bottom = paddingBottom + toast.paddingBottom
	const initialBottom = bottom - animationDistance

	return toast.animate(
		[
			{
				bottom: `${initialBottom}px`,
				opacity: "0"
			},
			{
				bottom: `${bottom}px`,
				opacity: "1"
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)
}

export function slideOut(toast: Toast): Animation {
	const duration = 160
	const bottom = paddingBottom + toast.paddingBottom - animationDistance

	return toast.animate(
		[
			{
				bottom: `${bottom}px`,
				opacity: "0"
			}
		],
		{
			duration,
			easing: "ease-in-out",
			fill: "forwards"
		}
	)
}
