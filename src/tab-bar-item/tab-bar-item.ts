import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { globalStyles } from '../styles.js'
import { tabStyles } from './tab-bar-item.styles.js'

export const tabBarItemTagName = "dav-tab-bar-item"

@customElement(tabBarItemTagName)
export class TabBarItem extends LitElement {
   static styles = [globalStyles, tabStyles]

   render() {
      return html`
         <div id="container">
            <p><slot></slot></p>
         </div>
      `
   }
}