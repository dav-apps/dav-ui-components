import { LitElement, html } from "lit"
import { customElement, property, state } from "lit/decorators.js"
import { query } from "lit/decorators/query.js"
import { classMap } from "lit/directives/class-map.js"
import { Settings, ButtonSize, IconButtonShape } from "../types.js"
import {
	getPositionOfElement,
	setThemeColorVariables,
	subscribeSettingsChange,
	unsubscribeSettingsChange,
	convertStringToButtonSize,
	convertStringToIconButtonShape
} from "../utils.js"
import { globalStyles } from "../styles.js"
import { iconButtonStyles } from "./icon-button.styles.js"

export const iconButtonTagName = "dav-icon-button"

@customElement(iconButtonTagName)
export class IconButton extends LitElement {
	static styles = [globalStyles, iconButtonStyles]

	@query("button.icon-button") button: HTMLButtonElement

	@state() private iconButtonClasses = {
		"icon-button": true,
		selected: false,
		disabled: false,
		sm: false,
		xs: false,
		square: false
	}

	@property({ type: Boolean }) selected: boolean = false
	@property({ type: Boolean }) disabled: boolean = false
	@property({
		type: String,
		converter: (value: string) => convertStringToButtonSize(value)
	})
	size: ButtonSize = ButtonSize.md
	@property({
		type: String,
		converter: value => convertStringToIconButtonShape(value)
	})
	shape: IconButtonShape = IconButtonShape.round
	@property({ type: String }) href: string = ""
	@property({ type: String }) target: string = ""

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

	buttonClick(event: PointerEvent) {
		event.stopPropagation()
		if (this.disabled) return

		let pos = getPositionOfElement(this.shadowRoot.host)

		this.dispatchEvent(
			new CustomEvent("click", {
				detail: {
					originalEvent: event,
					contextMenuPosition: {
						x: pos.x,
						y: pos.y + this.button.clientHeight + 4
					}
				}
			})
		)
	}

	render() {
		this.iconButtonClasses.selected = this.selected
		this.iconButtonClasses.disabled = this.disabled
		this.iconButtonClasses.sm = this.size == ButtonSize.sm
		this.iconButtonClasses.xs = this.size == ButtonSize.xs
		this.iconButtonClasses.square = this.shape == IconButtonShape.square

		if (this.href.length > 0 && !this.disabled) {
			return html`
				<a
					class=${classMap(this.iconButtonClasses)}
					href=${this.href}
					target=${this.target}
				>
					<slot></slot>
				</a>
			`
		}

		return html`
			<button
				class=${classMap(this.iconButtonClasses)}
				?aria-disabled=${this.disabled}
				@click="${this.buttonClick}"
			>
				<slot></slot>
			</button>
		`
	}
}
