import { Theme } from "./src/types"

declare global {
	interface Window {
		getWindowSegments?: () => DOMRect[]
		visualViewport: VisualViewport
		davUIComponents: {
			setLocale: (lang: string) => void
			setTheme: (theme: Theme) => void
		}
	}

	interface VisualViewport {
		segments?: DOMRect[]
	}
}

export {}
