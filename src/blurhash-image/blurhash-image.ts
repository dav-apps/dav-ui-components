import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { decode } from "blurhash"
import { globalStyles } from "../styles.js"
import { blurhashImageStyles } from "./blurhash-image.styles.js"
import { BlurhashImageCache } from "./blurhash-image-cache.js"

export const blurhashImageTagName = "dav-blurhash-image"

@customElement(blurhashImageTagName)
export class BlurhashImage extends LitElement {
	static styles = [globalStyles, blurhashImageStyles]

	@state() private blurhashImageContainerStyles = {
		width: "100px",
		height: "100px"
	}
	@state() private imageSrc: string = ""
	@state() private imageLoaded: boolean = false
	@state() private intersectionObserverInitialized: boolean = false

	@property({ type: String }) src: string = ""
	@property({ type: Number }) width: number = 100
	@property({ type: Number }) height: number = 100
	@property({ type: String }) fallbackSrc: string = ""
	@property({ type: String }) blurhash: string = ""
	@property({ type: Boolean }) loading: boolean = false

	private loadImage() {
		if (this.imageLoaded) return
		this.imageSrc = this.fallbackSrc

		if (this.blurhash.length >= 6) {
			let cacheKey = BlurhashImageCache.GetBlurhashImageCacheKey(
				this.blurhash,
				this.width,
				this.height
			)
			let cacheItem = BlurhashImageCache.GetBlurhashImageCacheItem(cacheKey)

			if (cacheItem != null) {
				this.imageSrc = cacheItem
			} else {
				// Generate the blurhash
				let canvas = document.createElement("canvas")
				canvas.width = this.width
				canvas.height = this.height

				if (
					canvas.getContext &&
					Number.isFinite(this.width) &&
					Number.isFinite(this.height)
				) {
					// Decode the blurhash and set the canvas
					let ctx = canvas.getContext("2d")
					let pixels = decode(this.blurhash, this.width, this.height)
					let imageData = ctx.createImageData(this.width, this.height)
					imageData.data.set(pixels)
					ctx.putImageData(imageData, 0, 0)

					//  Convert the canvas content to base64 url
					this.imageSrc = canvas.toDataURL()

					BlurhashImageCache.SetBlurhashImageCacheItem(
						cacheKey,
						this.imageSrc
					)
				}
			}
		}

		if (
			this.src != null &&
			this.src.length > 0 &&
			!this.intersectionObserverInitialized
		) {
			const intersectionObserver = new IntersectionObserver(entries => {
				if (entries[0].intersectionRatio <= 0) return

				// Start loading the proper image
				let img = document.createElement("img")
				img.src = this.src

				img.onload = () => {
					// Show the proper image
					this.imageSrc = this.src
					this.imageLoaded = true
				}

				intersectionObserver.disconnect()
			})

			intersectionObserver.observe(this)
			this.intersectionObserverInitialized = true
		}
	}

	getProgressRing() {
		if (this.loading) {
			return html`
				<div class="progress-ring-container">
					<dav-progress-ring size="20"></dav-progress-ring>
				</div>
			`
		}
	}

	render() {
		this.loadImage()
		this.blurhashImageContainerStyles.width = `${this.width}px`
		this.blurhashImageContainerStyles.height = `${this.height}px`

		return html`
			<div
				class="blurhash-image-container"
				style=${styleMap(this.blurhashImageContainerStyles)}
			>
				${this.getProgressRing()}

				<img src=${this.imageSrc} />
			</div>
		`
	}
}
