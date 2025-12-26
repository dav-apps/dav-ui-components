import { LitElement, html } from "lit"
import { customElement } from "lit/decorators.js"
import { globalStyles } from "../styles.js"
import { filterButtonStyles } from "./filter-button.styles.js"

export const filterButtonTagName = "dav-filter-button"

@customElement(filterButtonTagName)
export class FilterButton extends LitElement {
   static styles = [globalStyles, filterButtonStyles]

   render() {
      return html`<slot></slot>`
   }
}
