import { LitElement, html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { profileCardStyles } from "./profile-card.styles.js"

export const profileCardTagName = "dav-profile-card"

@customElement(profileCardTagName)
export class ProfileCard extends LitElement {
	static styles = [globalStyles, profileCardStyles]

	render() {
		return html``
	}
}
