import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
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
	@state() private loadedBlurhash: string = ""
	@state() private loadedImage: string = ""

	@property({ type: String }) src: string = ""
	@property({ type: Number }) width: number = 0
	@property({ type: Number }) height: number = 0
	@property({ type: String }) fallbackSrc: string = ""
	@property({ type: String }) blurhash: string = ""
	@property({ type: Boolean }) loading: boolean = false
	@property({ type: String }) title: string = ""
	@property({ type: String }) alt: string = ""

	private loadBlurhash() {
		if (
			this.blurhash == this.loadedBlurhash ||
			this.blurhash == null ||
			this.blurhash.length < 6
		) {
			if (this.imageSrc.length == 0) {
				this.imageSrc = this.fallbackSrc
			}

			return
		}

		this.loadedBlurhash = this.blurhash
		this.imageSrc = this.fallbackSrc

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

	private loadImage() {
		if (
			this.src == this.loadedImage ||
			this.src == null ||
			this.src.length == 0
		) {
			return
		}

		this.loadedImage = this.src

		const intersectionObserver = new IntersectionObserver(entries => {
			if (entries[0].intersectionRatio <= 0) return

			// Start loading the proper image
			let img = document.createElement("img")
			img.src = this.src

			img.onload = () => {
				// Show the proper image
				this.imageSrc = this.src
			}

			intersectionObserver.disconnect()
		})

		intersectionObserver.observe(this)
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
		this.loadBlurhash()
		this.loadImage()

		if (this.width > 0) {
			this.blurhashImageContainerStyles.width = `${this.width}px`
		} else {
			this.blurhashImageContainerStyles.width = "unset"
		}

		if (this.height > 0) {
			this.blurhashImageContainerStyles.height = `${this.height}px`
		} else {
			this.blurhashImageContainerStyles.height = "unset"
		}

		return html`
			<div
				class="blurhash-image-container"
				style=${styleMap(this.blurhashImageContainerStyles)}
			>
				${this.getProgressRing()}

				<img src=${this.imageSrc} title=${this.title} alt=${this.alt} />
			</div>
		`
	}
}
