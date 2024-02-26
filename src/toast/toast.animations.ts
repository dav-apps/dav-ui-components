import { Toast } from "./toast.js"

export function slideIn(toast: Toast): Animation {
	const duration = 160

	return toast.animate(
		[
			{
				bottom: "20px",
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

	return toast.animate(
		[
			{
				bottom: "-50px",
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
