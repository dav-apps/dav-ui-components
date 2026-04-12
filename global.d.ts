import { Theme } from "./src/types"

declare global {
	interface Window {
		davUIComponents: {
			setLocale: (lang: string) => void
			setTheme: (theme: Theme) => void
		}
	}
}

export {}
