import { Toggle, toggleTagName } from './src/toggle/toggle'

declare global {
	interface HTMLElementTagNameMap {
		[toggleTagName]: Toggle,
	}
}

export { Toggle }