import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import {
	getGlobalStyleHtml,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from '../utils.js'
import { globalStyles } from '../styles.js'
import { navigationBarStyles } from './navigation-bar.styles.js'

export const navigationBarTagName = "dav-navigation-bar"

@customElement(navigationBarTagName)
export class NavigationBar extends LitElement {
   static styles = [globalStyles, navigationBarStyles]

   render() {
      return html`
         ${getGlobalStyleHtml()}

         <div id="container">
            <slot></slot>
         </div>
      `
   }
}