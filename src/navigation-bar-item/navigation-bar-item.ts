import { LitElement, html } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import {
	getGlobalStyleHtml,
	subscribeSettingsChange,
	unsubscribeSettingsChange
} from '../utils.js'
import { globalStyles } from '../styles.js'
import { navigationBarItemStyles } from './navigation-bar-item.styles.js'

export const navigationBarItemTagName = "dav-navigation-bar-item"

@customElement(navigationBarItemTagName)
export class NavigationBarItem extends LitElement {
   static styles = [globalStyles, navigationBarItemStyles]

   render() {
      return html`
         <slot></slot>
      `
   }
}