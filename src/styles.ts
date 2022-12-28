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
		--primary: #0d47a1;
		--secondary: #D32F2F;

		/* primary */
		--md-ref-palette-primary0: #000000;
		--md-ref-palette-primary10: #001944;
		--md-ref-palette-primary20: #002d6e;
		--md-ref-palette-primary25: #003784;
		--md-ref-palette-primary30: #00429a;
		--md-ref-palette-primary35: #194ea7;
		--md-ref-palette-primary40: #2b5bb4;
		--md-ref-palette-primary50: #4874cf;
		--md-ref-palette-primary60: #648eeb;
		--md-ref-palette-primary70: #85aaff;
		--md-ref-palette-primary80: #b0c6ff;
		--md-ref-palette-primary90: #d9e2ff;
		--md-ref-palette-primary95: #edf0ff;
		--md-ref-palette-primary98: #faf8ff;
		--md-ref-palette-primary99: #fefbff;
		--md-ref-palette-primary100: #ffffff;

		/* secondary */
		--md-ref-palette-secondary0: #000000;
		--md-ref-palette-secondary10: #410003;
		--md-ref-palette-secondary20: #680008;
		--md-ref-palette-secondary25: #7d000c;
		--md-ref-palette-secondary30: #930010;
		--md-ref-palette-secondary35: #a80616;
		--md-ref-palette-secondary40: #ba1a20;
		--md-ref-palette-secondary50: #dd3735;
		--md-ref-palette-secondary60: #ff544e;
		--md-ref-palette-secondary70: #ff8980;
		--md-ref-palette-secondary80: #ffb3ac;
		--md-ref-palette-secondary90: #ffdad6;
		--md-ref-palette-secondary95: #ffedeb;
		--md-ref-palette-secondary98: #fff8f7;
		--md-ref-palette-secondary99: #fffbff;
		--md-ref-palette-secondary100: #ffffff;

		/* tertiary */
		--md-ref-palette-tertiary0: #000000;
		--md-ref-palette-tertiary10: #001f2a;
		--md-ref-palette-tertiary20: #003546;
		--md-ref-palette-tertiary25: #004154;
		--md-ref-palette-tertiary30: #004d64;
		--md-ref-palette-tertiary35: #005a73;
		--md-ref-palette-tertiary40: #006783;
		--md-ref-palette-tertiary50: #0081a5;
		--md-ref-palette-tertiary60: #069dc7;
		--md-ref-palette-tertiary70: #40b8e3;
		--md-ref-palette-tertiary80: #65d3ff;
		--md-ref-palette-tertiary90: #bde9ff;
		--md-ref-palette-tertiary95: #e0f4ff;
		--md-ref-palette-tertiary98: #f4faff;
		--md-ref-palette-tertiary99: #fafcff;
		--md-ref-palette-tertiary100: #ffffff;

		/* neutral */
		--md-ref-palette-neutral0: #000000;
		--md-ref-palette-neutral10: #1b1b1f;
		--md-ref-palette-neutral20: #303034;
		--md-ref-palette-neutral25: #3b3b3f;
		--md-ref-palette-neutral30: #46464a;
		--md-ref-palette-neutral35: #525256;
		--md-ref-palette-neutral40: #5e5e62;
		--md-ref-palette-neutral50: #77777a;
		--md-ref-palette-neutral60: #919094;
		--md-ref-palette-neutral70: #acabaf;
		--md-ref-palette-neutral80: #c7c6ca;
		--md-ref-palette-neutral90: #e3e2e6;
		--md-ref-palette-neutral95: #f2f0f4;
		--md-ref-palette-neutral98: #fbf8fd;
		--md-ref-palette-neutral99: #fefbff;
		--md-ref-palette-neutral100: #ffffff;

		/* neutral-variant */
		--md-ref-palette-neutral-variant0: #000000;
		--md-ref-palette-neutral-variant10: #191b23;
		--md-ref-palette-neutral-variant20: #2e3038;
		--md-ref-palette-neutral-variant25: #393b43;
		--md-ref-palette-neutral-variant30: #44464f;
		--md-ref-palette-neutral-variant35: #50525a;
		--md-ref-palette-neutral-variant40: #5c5e67;
		--md-ref-palette-neutral-variant50: #757780;
		--md-ref-palette-neutral-variant60: #8f9099;
		--md-ref-palette-neutral-variant70: #a9abb4;
		--md-ref-palette-neutral-variant80: #c5c6d0;
		--md-ref-palette-neutral-variant90: #e1e2ec;
		--md-ref-palette-neutral-variant95: #eff0fa;
		--md-ref-palette-neutral-variant98: #faf8ff;
		--md-ref-palette-neutral-variant99: #fefbff;
		--md-ref-palette-neutral-variant100: #ffffff;

		/* error */
		--md-ref-palette-error0: #000000;
		--md-ref-palette-error10: #410002;
		--md-ref-palette-error20: #690005;
		--md-ref-palette-error25: #7e0007;
		--md-ref-palette-error30: #93000a;
		--md-ref-palette-error35: #a80710;
		--md-ref-palette-error40: #ba1a1a;
		--md-ref-palette-error50: #de3730;
		--md-ref-palette-error60: #ff5449;
		--md-ref-palette-error70: #ff897d;
		--md-ref-palette-error80: #ffb4ab;
		--md-ref-palette-error90: #ffdad6;
		--md-ref-palette-error95: #ffedea;
		--md-ref-palette-error98: #fff8f7;
		--md-ref-palette-error99: #fffbff;
		--md-ref-palette-error100: #ffffff;

		/* light */
		--md-sys-color-primary-light: #2b5bb4;
		--md-sys-color-on-primary-light: #ffffff;
		--md-sys-color-primary-container-light: #d9e2ff;
		--md-sys-color-on-primary-container-light: #001944;
		--md-sys-color-secondary-light: #ba1a20;
		--md-sys-color-on-secondary-light: #ffffff;
		--md-sys-color-secondary-container-light: #ffdad6;
		--md-sys-color-on-secondary-container-light: #410003;
		--md-sys-color-tertiary-light: #006783;
		--md-sys-color-on-tertiary-light: #ffffff;
		--md-sys-color-tertiary-container-light: #bde9ff;
		--md-sys-color-on-tertiary-container-light: #001f2a;
		--md-sys-color-error-light: #ba1a1a;
		--md-sys-color-error-container-light: #ffdad6;
		--md-sys-color-on-error-light: #ffffff;
		--md-sys-color-on-error-container-light: #410002;
		--md-sys-color-background-light: #fefbff;
		--md-sys-color-on-background-light: #1b1b1f;
		--md-sys-color-surface-light: #fefbff;
		--md-sys-color-on-surface-light: #1b1b1f;
		--md-sys-color-surface-variant-light: #e1e2ec;
		--md-sys-color-on-surface-variant-light: #44464f;
		--md-sys-color-on-surface-variant-light-hover: #44464f14;
		--md-sys-color-outline-light: #757780;
		--md-sys-color-inverse-on-surface-light: #f2f0f4;
		--md-sys-color-inverse-surface-light: #303034;
		--md-sys-color-inverse-primary-light: #b0c6ff;
		--md-sys-color-shadow-light: #000000;
		--md-sys-color-surface-tint-light: #2b5bb4;
		--md-sys-color-outline-variant-light: #c5c6d0;
		--md-sys-color-scrim-light: #000000;

		/* dark */
		--md-sys-color-primary-dark: #b0c6ff;
		--md-sys-color-on-primary-dark: #002d6e;
		--md-sys-color-primary-container-dark: #00429a;
		--md-sys-color-on-primary-container-dark: #d9e2ff;
		--md-sys-color-secondary-dark: #ffb3ac;
		--md-sys-color-on-secondary-dark: #680008;
		--md-sys-color-secondary-container-dark: #930010;
		--md-sys-color-on-secondary-container-dark: #ffdad6;
		--md-sys-color-tertiary-dark: #65d3ff;
		--md-sys-color-on-tertiary-dark: #003546;
		--md-sys-color-tertiary-container-dark: #004d64;
		--md-sys-color-on-tertiary-container-dark: #bde9ff;
		--md-sys-color-error-dark: #ffb4ab;
		--md-sys-color-error-container-dark: #93000a;
		--md-sys-color-on-error-dark: #690005;
		--md-sys-color-on-error-container-dark: #ffdad6;
		--md-sys-color-background-dark: #1b1b1f;
		--md-sys-color-on-background-dark: #e3e2e6;
		--md-sys-color-surface-dark: #1b1b1f;
		--md-sys-color-on-surface-dark: #e3e2e6;
		--md-sys-color-surface-variant-dark: #44464f;
		--md-sys-color-on-surface-variant-dark: #c5c6d0;
		--md-sys-color-outline-dark: #8f9099;
		--md-sys-color-inverse-on-surface-dark: #1b1b1f;
		--md-sys-color-inverse-surface-dark: #e3e2e6;
		--md-sys-color-inverse-primary-dark: #2b5bb4;
		--md-sys-color-shadow-dark: #000000;
		--md-sys-color-surface-tint-dark: #b0c6ff;
		--md-sys-color-outline-variant-dark: #44464f;
		--md-sys-color-scrim-dark: #000000;
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