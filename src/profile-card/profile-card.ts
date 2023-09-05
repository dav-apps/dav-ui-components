import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { Settings } from "../types.js"
import {
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { profileCardStyles } from "./profile-card.styles.js"

export const profileCardTagName = "dav-profile-card"

@customElement(profileCardTagName)
export class ProfileCard extends LitElement {
	static styles = [globalStyles, profileCardStyles]

	@property() imageSrc: string = ""
	@property() imageFallbackSrc: string = ""
	@property() imageBlurhash: string = ""
	@property() name: string = ""

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => {
		setThemeColorVariables(this.style, settings.theme)
	}

	render() {
		return html`
			<button class="container">
				<dav-blurhash-image
					src=${this.imageSrc}
					fallbackSrc=${this.imageFallbackSrc}
					imageBlurhash=${this.imageBlurhash}
					title=${this.name}
					alt=${this.name}
					width="36"
					height="36"
				></dav-blurhash-image>

				<p>${this.name}</p>
			</button>
		`
	}
}
