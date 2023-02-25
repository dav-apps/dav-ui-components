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
		--secondary: #d32f2f;

		--hover-opacity: 0.08;
		--focus-opacity: 0.12;

		--black-rgb: 0, 0, 0; /* #000000 */
		--white-rgb: 255, 255, 255; /* #ffffff */

		/* primary */
		--md-ref-palette-primary10-rgb: 0, 25, 68; /* #001944 */
		--md-ref-palette-primary20-rgb: 0, 45, 110; /* #002d6e */
		--md-ref-palette-primary25-rgb: 0, 55, 132; /* #003784 */
		--md-ref-palette-primary30-rgb: 0, 66, 154; /* #00429a */
		--md-ref-palette-primary35-rgb: 25, 78, 167; /* #194ea7 */
		--md-ref-palette-primary40-rgb: 43, 91, 180; /* #2b5bb4 */
		--md-ref-palette-primary50-rgb: 72, 116, 207; /* #4874cf */
		--md-ref-palette-primary60-rgb: 100, 142, 235; /* #648eeb */
		--md-ref-palette-primary70-rgb: 133, 170, 255; /* #85aaff */
		--md-ref-palette-primary80-rgb: 176, 198, 255; /* #b0c6ff */
		--md-ref-palette-primary85-rgb: 196, 212, 255; /* #c4d4ff */
		--md-ref-palette-primary90-rgb: 217, 226, 255; /* #d9e2ff */
		--md-ref-palette-primary95-rgb: 237, 240, 255; /* #edf0ff */
		--md-ref-palette-primary98-rgb: 250, 248, 255; /* #faf8ff */
		--md-ref-palette-primary99-rgb: 254, 251, 255; /* #fefbff */

		/* secondary */
		--md-ref-palette-secondary10-rgb: 65, 0, 3; /* #410003 */
		--md-ref-palette-secondary20-rgb: 104, 0, 8; /* #680008 */
		--md-ref-palette-secondary25-rgb: 125, 0, 12; /* #7d000c */
		--md-ref-palette-secondary30-rgb: 147, 0, 16; /* #930010 */
		--md-ref-palette-secondary35-rgb: 168, 6, 22; /* #a80616 */
		--md-ref-palette-secondary40-rgb: 186, 26, 32; /* #ba1a20 */
		--md-ref-palette-secondary50-rgb: 221, 55, 53; /* #dd3735 */
		--md-ref-palette-secondary60-rgb: 255, 84, 78; /* #ff544e */
		--md-ref-palette-secondary70-rgb: 255, 137, 128; /* #ff8980 */
		--md-ref-palette-secondary80-rgb: 255, 179, 172; /* #ffb3ac */
		--md-ref-palette-secondary85-rgb: 255, 199, 193; /* #ffc7c1 */
		--md-ref-palette-secondary90-rgb: 255, 218, 214; /* #ffdad6 */
		--md-ref-palette-secondary95-rgb: 255, 237, 235; /* #ffedeb */
		--md-ref-palette-secondary98-rgb: 255, 248, 247; /* #fff8f7 */
		--md-ref-palette-secondary99-rgb: 255, 251, 255; /* #fffbff */

		/* tertiary */
		--md-ref-palette-tertiary10-rgb: 0, 31, 42; /* #001f2a */
		--md-ref-palette-tertiary20-rgb: 0, 53, 70; /* #003546 */
		--md-ref-palette-tertiary25-rgb: 0, 65, 84; /* #004154 */
		--md-ref-palette-tertiary30-rgb: 0, 77, 100; /* #004d64 */
		--md-ref-palette-tertiary35-rgb: 0, 90, 115; /* #005a73 */
		--md-ref-palette-tertiary40-rgb: 0, 103, 131; /* #006783 */
		--md-ref-palette-tertiary50-rgb: 0, 129, 165; /* #0081a5 */
		--md-ref-palette-tertiary60-rgb: 6, 157, 199; /* #069dc7 */
		--md-ref-palette-tertiary70-rgb: 64, 184, 227; /* #40b8e3 */
		--md-ref-palette-tertiary80-rgb: 101, 211, 255; /* #65d3ff */
		--md-ref-palette-tertiary85-rgb: 145, 221, 255; /* #91ddff */
		--md-ref-palette-tertiary90-rgb: 189, 233, 255; /* #bde9ff */
		--md-ref-palette-tertiary95-rgb: 224, 244, 255; /* #e0f4ff */
		--md-ref-palette-tertiary98-rgb: 244, 250, 255; /* #f4faff */
		--md-ref-palette-tertiary99-rgb: 250, 252, 255; /* #fafcff */

		/* neutral */
		--md-ref-palette-neutral10-rgb: 27, 27, 31; /* #1b1b1f */
		--md-ref-palette-neutral20-rgb: 48, 48, 52; /* #303034 */
		--md-ref-palette-neutral25-rgb: 59, 59, 63; /* #3b3b3f */
		--md-ref-palette-neutral30-rgb: 70, 70, 74; /* #46464a */
		--md-ref-palette-neutral35-rgb: 82, 82, 86; /* #525256 */
		--md-ref-palette-neutral40-rgb: 94, 94, 98; /* #5e5e62 */
		--md-ref-palette-neutral50-rgb: 119, 119, 122; /* #77777a */
		--md-ref-palette-neutral60-rgb: 145, 144, 148; /* #919094 */
		--md-ref-palette-neutral70-rgb: 172, 171, 175; /* #acabaf */
		--md-ref-palette-neutral80-rgb: 199, 198, 202; /* #c7c6ca */
		--md-ref-palette-neutral90-rgb: 227, 226, 230; /* #e3e2e6 */
		--md-ref-palette-neutral95-rgb: 242, 240, 244; /* #f2f0f4 */
		--md-ref-palette-neutral98-rgb: 251, 248, 253; /* #fbf8fd */
		--md-ref-palette-neutral99-rgb: 254, 251, 255; /* #fefbff */

		/* neutral-variant */
		--md-ref-palette-neutral-variant10-rgb: 25, 27, 35; /* #191b23 */
		--md-ref-palette-neutral-variant20-rgb: 46, 48, 56; /* #2e3038 */
		--md-ref-palette-neutral-variant25-rgb: 57, 59, 67; /* #393b43 */
		--md-ref-palette-neutral-variant30-rgb: 68, 70, 79; /* #44464f */
		--md-ref-palette-neutral-variant35-rgb: 80, 82, 90; /* #50525a */
		--md-ref-palette-neutral-variant40-rgb: 92, 94, 103; /* #5c5e67 */
		--md-ref-palette-neutral-variant50-rgb: 117, 119, 128; /* #757780 */
		--md-ref-palette-neutral-variant60-rgb: 143, 144, 153; /* #8f9099 */
		--md-ref-palette-neutral-variant70-rgb: 169, 171, 180; /* #a9abb4 */
		--md-ref-palette-neutral-variant80-rgb: 197, 198, 208; /* #c5c6d0 */
		--md-ref-palette-neutral-variant90-rgb: 225, 226, 236; /* #e1e2ec */
		--md-ref-palette-neutral-variant95-rgb: 239, 240, 250; /* #eff0fa */
		--md-ref-palette-neutral-variant98-rgb: 250, 248, 255; /* #faf8ff */
		--md-ref-palette-neutral-variant99-rgb: 254, 251, 255; /* #fefbff */

		/* error */
		--md-ref-palette-error10-rgb: 65, 0, 2; /* #410002 */
		--md-ref-palette-error20-rgb: 105, 0, 5; /* #690005 */
		--md-ref-palette-error25-rgb: 126, 0, 7; /* #7e0007 */
		--md-ref-palette-error30-rgb: 147, 0, 10; /* #93000a */
		--md-ref-palette-error35-rgb: 168, 7, 16; /* #a80710 */
		--md-ref-palette-error40-rgb: 186, 26, 26; /* #ba1a1a */
		--md-ref-palette-error50-rgb: 222, 55, 48; /* #de3730 */
		--md-ref-palette-error60-rgb: 255, 84, 73; /* #ff5449 */
		--md-ref-palette-error70-rgb: 255, 137, 125; /* #ff897d */
		--md-ref-palette-error80-rgb: 255, 180, 171; /* #ffb4ab */
		--md-ref-palette-error85-rgb: 255, 199, 193; /* #ffc7c1 */
		--md-ref-palette-error90-rgb: 255, 218, 214; /* #ffdad6 */
		--md-ref-palette-error95-rgb: 255, 237, 234; /* #ffedea */
		--md-ref-palette-error98-rgb: 255, 248, 247; /* #fff8f7 */
		--md-ref-palette-error99-rgb: 255, 251, 255; /* #fffbff */

		/* light */
		--md-sys-color-primary-light: rgb(var(--md-ref-palette-primary40-rgb));
		--md-sys-color-primary-light-hover: rgb(
			var(--md-ref-palette-primary40-rgb),
			var(--hover-opacity)
		);
		--md-sys-color-primary-light-focus: rgb(
			var(--md-ref-palette-primary40-rgb),
			var(--focus-opacity)
		);
		--md-sys-color-on-primary-light: rgb(var(--white-rgb));
		--md-sys-color-primary-container-light: rgb(
			var(--md-ref-palette-primary90-rgb)
		);
		--md-sys-color-on-primary-container-light: rgb(
			var(--md-ref-palette-primary10-rgb)
		);
		--md-sys-color-secondary-light: rgb(
			var(--md-ref-palette-secondary40-rgb)
		);
		--md-sys-color-secondary-light-hover: rgb(
			var(--md-ref-palette-secondary40-rgb),
			var(--hover-opacity)
		);
		--md-sys-color-secondary-light-focus: rgb(
			var(--md-ref-palette-secondary40-rgb),
			var(--focus-opacity)
		);
		--md-sys-color-on-secondary-light: rgb(var(--white-rgb));
		--md-sys-color-secondary-container-light: rgb(
			var(--md-ref-palette-secondary90-rgb)
		);
		--md-sys-color-secondary-container-light-hover: rgb(
			var(--md-ref-palette-secondary95-rgb)
		);
		--md-sys-color-secondary-container-light-focus: rgb(
			var(--md-ref-palette-secondary95-rgb)
		);
		--md-sys-color-on-secondary-container-light: rgb(
			var(--md-ref-palette-secondary10-rgb)
		);
		--md-sys-color-tertiary-light: rgb(var(--md-ref-palette-tertiary40-rgb));
		--md-sys-color-tertiary-light-hover: rgb(
			var(--md-ref-palette-tertiary40-rgb),
			var(--hover-opacity)
		);
		--md-sys-color-tertiary-light-focus: rgb(
			var(--md-ref-palette-tertiary40-rgb),
			var(--focus-opacity)
		);
		--md-sys-color-on-tertiary-light: rgb(var(--white-rgb));
		--md-sys-color-tertiary-container-light: rgb(
			var(--md-ref-palette-tertiary90-rgb)
		);
		--md-sys-color-on-tertiary-container-light: rgb(
			var(--md-ref-palette-tertiary10-rgb)
		);
		--md-sys-color-error-light: rgb(var(--md-ref-palette-error40-rgb));
		--md-sys-color-error-light-hover: rgb(
			var(--md-ref-palette-error40-rgb),
			var(--hover-opacity)
		);
		--md-sys-color-error-light-focus: rgb(
			var(--md-ref-palette-error40-rgb),
			var(--focus-opacity)
		);
		--md-sys-color-error-container-light: rgb(
			var(--md-ref-palette-error90-rgb)
		);
		--md-sys-color-on-error-light: rgb(var(--white-rgb));
		--md-sys-color-on-error-container-light: rgb(
			var(--md-ref-palette-error10-rgb)
		);
		--md-sys-color-background-light: rgb(var(--md-ref-palette-primary99-rgb));
		--md-sys-color-on-background-light: rgb(
			var(--md-ref-palette-neutral10-rgb)
		);
		--md-sys-color-surface-light: rgb(var(--md-ref-palette-neutral99-rgb));
		--md-sys-color-on-surface-light: rgb(var(--md-ref-palette-neutral10-rgb));
		--md-sys-color-surface-variant-light: rgb(
			var(--md-ref-palette-neutral-variant90-rgb)
		);
		--md-sys-color-on-surface-variant-light: rgb(
			var(--md-ref-palette-neutral-variant30-rgb)
		);
		--md-sys-color-on-surface-variant-light-hover: rgba(
			var(--md-ref-palette-neutral-variant30-rgb),
			var(--hover-opacity)
		);
		--md-sys-color-on-surface-variant-light-focus: rgba(
			var(--md-ref-palette-neutral-variant30-rgb),
			var(--focus-opacity)
		);
		--md-sys-color-outline-light: rgb(
			var(--md-ref-palette-neutral-variant50-rgb)
		);
		--md-sys-color-inverse-on-surface-light: rgb(
			var(--md-ref-palette-neutral95-rgb)
		);
		--md-sys-color-inverse-surface-light: rgb(
			var(--md-ref-palette-neutral20-rgb)
		);
		--md-sys-color-inverse-primary-light: rgb(
			var(--md-ref-palette-primary80-rgb)
		);
		--md-sys-color-shadow-light: rgb(var(--black-rgb));
		--md-sys-color-surface-tint-light: rgb(
			var(--md-ref-palette-primary40-rgb)
		);
		--md-sys-color-outline-variant-light: rgb(
			var(--md-ref-palette-neutral-variant80-rgb)
		);
		--md-sys-color-scrim-light: rgb(var(--black-rgb), 0.5);

		/* dark */
		--md-sys-color-primary-dark: rgb(var(--md-ref-palette-primary80-rgb));
		--md-sys-color-on-primary-dark: rgb(var(--md-ref-palette-primary20-rgb));
		--md-sys-color-primary-container-dark: rgb(
			var(--md-ref-palette-primary30-rgb)
		);
		--md-sys-color-on-primary-container-dark: rgb(
			var(--md-ref-palette-primary90-rgb)
		);
		--md-sys-color-secondary-dark: rgb(var(--md-ref-palette-secondary80-rgb));
		--md-sys-color-on-secondary-dark: rgb(
			var(--md-ref-palette-secondary20-rgb)
		);
		--md-sys-color-secondary-container-dark: rgb(
			var(--md-ref-palette-secondary30-rgb)
		);
		--md-sys-color-on-secondary-container-dark: rgb(
			var(--md-ref-palette-secondary90-rgb)
		);
		--md-sys-color-tertiary-dark: rgb(var(--md-ref-palette-tertiary80-rgb));
		--md-sys-color-on-tertiary-dark: rgb(
			var(--md-ref-palette-tertiary20-rgb)
		);
		--md-sys-color-tertiary-container-dark: rgb(
			var(--md-ref-palette-tertiary30-rgb)
		);
		--md-sys-color-on-tertiary-container-dark: rgb(
			var(--md-ref-palette-tertiary90-rgb)
		);
		--md-sys-color-error-dark: rgb(var(--md-ref-palette-error80-rgb));
		--md-sys-color-error-container-dark: rgb(
			var(--md-ref-palette-error30-rgb)
		);
		--md-sys-color-on-error-dark: rgb(var(--md-ref-palette-error20-rgb));
		--md-sys-color-on-error-container-dark: rgb(
			var(--md-ref-palette-error90-rgb)
		);
		--md-sys-color-background-dark: rgb(var(--md-ref-palette-neutral10-rgb));
		--md-sys-color-on-background-dark: rgb(
			var(--md-ref-palette-neutral90-rgb)
		);
		--md-sys-color-surface-dark: rgb(var(--md-ref-palette-neutral10-rgb));
		--md-sys-color-on-surface-dark: rgb(var(--md-ref-palette-neutral90-rgb));
		--md-sys-color-surface-variant-dark: rgb(
			var(--md-ref-palette-neutral-variant30-rgb)
		);
		--md-sys-color-on-surface-variant-dark: rgb(
			var(--md-ref-palette-neutral-variant80-rgb)
		);
		--md-sys-color-outline-dark: rgb(
			var(--md-ref-palette-neutral-variant60-rgb)
		);
		--md-sys-color-inverse-on-surface-dark: rgb(
			var(--md-ref-palette-neutral10-rgb)
		);
		--md-sys-color-inverse-surface-dark: rgb(
			var(--md-ref-palette-neutral90-rgb)
		);
		--md-sys-color-inverse-primary-dark: rgb(
			var(--md-ref-palette-primary40-rgb)
		);
		--md-sys-color-shadow-dark: rgb(var(--black-rgb));
		--md-sys-color-surface-tint-dark: rgb(
			var(--md-ref-palette-primary80-rgb)
		);
		--md-sys-color-outline-variant-dark: rgb(
			var(--md-ref-palette-neutral-variant30-rgb)
		);
		--md-sys-color-scrim-dark: rgb(var(--black-rgb));
	}

	.modern-vertical-scrollbar::-webkit-scrollbar {
		background-color: var(
			--light-theme-color-primary,
			var(--default-light-theme-color-primary)
		);
		width: 5px;
	}

	.modern-vertical-scrollbar.darkTheme::-webkit-scrollbar {
		background-color: var(
			--dark-theme-color-primary,
			var(--default-dark-theme-color-primary)
		);
	}

	.modern-vertical-scrollbar::-webkit-scrollbar-thumb {
		background-color: var(
			--light-theme-scrollbar-color,
			var(--default-light-theme-scrollbar-color)
		);
		border-radius: 10px;
	}

	.modern-vertical-scrollbar.darkTheme::-webkit-scrollbar-thumb {
		background-color: var(
			--dark-theme-scrollbar-color,
			var(--default-dark-theme-scrollbar-color)
		);
	}

	.slide-down-in {
		animation-duration: 100ms;
		animation-name: animate-slide-down-in;
		animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
	}

	@keyframes animate-slide-down-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`
