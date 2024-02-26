import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { toastStyles } from "./toast.styles.js"
import { slideIn, slideOut } from "./toast.animations.js"

export const toastTagName = "dav-toast"

@customElement(toastTagName)
export class Toast extends LitElement {
	static styles = [globalStyles, toastStyles]

	@property() text: string = ""
	@property({ type: Number }) duration: number = 4000

	static async show(toast: Toast) {
		toast.style.position = "absolute"
		toast.style.bottom = "-50px"
		toast.style.left = "0"
		toast.style.right = "0"
		toast.style.width = "fit-content"
		toast.style.margin = "0 auto"
		toast.style.opacity = "0"

		document.body.appendChild(toast)

		let slideInAnimation = slideIn(toast)
		await slideInAnimation.finished

		// Wait for the timeout to hide the toast
		await new Promise(resolve => setTimeout(resolve, toast.duration))

		let slideOutAnimation = slideOut(toast)
		await slideOutAnimation.finished

		// Remove the toast from the DOM
		toast.remove()
	}

	render() {
		return html`
			<div class="container">
				${this.text}
			</div>
		`
	}
}
