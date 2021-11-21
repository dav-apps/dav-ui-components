import { css } from "@lit/reactive-element"

export const globalStyles = css`
	:host {
		--default-light-theme-color-primary: #ffffff;
		--default-light-theme-color-secondary: #ffffff;
		--default-light-theme-color-tertiary: #ffffff;
		--default-light-theme-hover-background-color: #f1f1f1;
		--default-light-theme-scrollbar-color: #eaeaea;
		--default-dark-theme-color-primary: #15202b;
		--default-dark-theme-color-secondary: #1c2938;
		--default-dark-theme-color-tertiary: #2e3b46;
		--default-dark-theme-hover-background-color: #26313a;
		--default-dark-theme-scrollbar-color: #303644;
		--default-overlay-color: #3b3b3b67;
	}

	.modern-vertical-scrollbar::-webkit-scrollbar {
		background-color: var(--light-theme-color-primary, var(--default-light-theme-color-primary));
		width: 5px;
	}

	.modern-vertical-scrollbar.darkTheme::-webkit-scrollbar {
		background-color: var(--dark-theme-color-primary, var(--default-dark-theme-color-primary));
	}

	.modern-vertical-scrollbar::-webkit-scrollbar-thumb {
		background-color: var(--light-theme-scrollbar-color, var(--default-light-theme-scrollbar-color));
		border-radius: 10px;
	}

	.modern-vertical-scrollbar.darkTheme::-webkit-scrollbar-thumb {
		background-color: var(--dark-theme-scrollbar-color, var(--default-dark-theme-scrollbar-color));
	}
`