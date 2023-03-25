import { css } from "@lit/reactive-element"

export const blurhashImageStyles = css`
	:host {
		display: inline-block;
	}

	.blurhash-image-container {
		display: inline-block;
		position: relative;
		border-radius: inherit;
		box-shadow: inherit;
	}

	.progress-ring-container {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: inherit;
		box-shadow: inherit;
	}
`
