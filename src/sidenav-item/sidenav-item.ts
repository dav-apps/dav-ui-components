import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"
import { styleMap } from "lit/directives/style-map.js"
import { ifDefined } from "lit/directives/if-defined.js"
import { Settings, Theme } from "../types.js"
import {
	getGlobalStyleHtml,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	getSettings
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { sidenavItemStyles } from "./sidenav-item.styles.js"

export const sidenavItemTagName = "dav-sidenav-item"

@customElement(sidenavItemTagName)
export class SidenavItem extends LitElement {
	static styles = [globalStyles, sidenavItemStyles]

	@state() private spanStyles = {
		marginLeft: "0px"
	}

	@state() private itemClasses = {
		item: true,
		darkTheme: false
	}

	@state() private theme: Theme = getSettings().theme

	@property() value: string = ""
	@property() icon: string = ""
	@property({ type: Boolean }) indent: boolean = false
	@property() link: string = null

	connectedCallback() {
		super.connectedCallback()
		subscribeSettingsChange(this.settingsChange)
	}

	disconnectedCallback() {
		super.disconnectedCallback()
		unsubscribeSettingsChange(this.settingsChange)
	}

	settingsChange = (settings: Settings) => (this.theme = settings.theme)

	getIcon() {
		if (this.icon.length > 0) {
			return html`
				<i class="ms-Icon ms-Icon--${this.icon}" aria-hidden="true"></i>
			`
		}
	}

	itemClick(event: PointerEvent) {
		event.preventDefault()
	}

	render() {
		this.itemClasses.darkTheme = this.theme == Theme.dark

		if (this.icon.length == 0 && this.indent) {
			this.spanStyles.marginLeft = "12px"
		} else {
			this.spanStyles.marginLeft = "0px"
		}

		return html`
			${getGlobalStyleHtml()}

			<a
				class=${classMap(this.itemClasses)}
				dir="ltr"
				href=${ifDefined(this.link)}
				@click=${this.itemClick}
			>
				${this.getIcon()}

				<span style=${styleMap(this.spanStyles)}>${this.value}</span>
			</a>
		`
	}
}
