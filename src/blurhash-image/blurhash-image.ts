import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { blurhashImageStyles } from "./blurhash-image.styles.js"

export const blurhashImageTagName = "dav-blurhash-image"

@customElement(blurhashImageTagName)
export class BlurhashImage extends LitElement {
	static styles = [globalStyles, blurhashImageStyles]

	render() {
		return html``
	}
}
