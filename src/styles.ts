import { css } from "@lit/reactive-element"

const colorPaletteVariables = css`
	/* Color palette */
	--black-rgb: 0, 0, 0; /* #000000 */
	--white-rgb: 255, 255, 255; /* #ffffff */

	/* primary */
	--dav-color-palette-primary10-rgb: 0, 25, 68; /* #001944 */
	--dav-color-palette-primary20-rgb: 0, 45, 110; /* #002d6e */
	--dav-color-palette-primary25-rgb: 0, 55, 131; /* #003783 */
	--dav-color-palette-primary30-rgb: 0, 66, 154; /* #00429a */
	--dav-color-palette-primary35-rgb: 25, 78, 167; /* #194ea7 */
	--dav-color-palette-primary40-rgb: 43, 91, 180; /* #2b5bb4 */
	--dav-color-palette-primary50-rgb: 72, 116, 207; /* #4874cf */
	--dav-color-palette-primary60-rgb: 100, 142, 235; /* #648eeb */
	--dav-color-palette-primary70-rgb: 132, 170, 255; /* #84aaff */
	--dav-color-palette-primary80-rgb: 176, 198, 255; /* #b0c6ff */
	--dav-color-palette-primary85-rgb: 196, 212, 255; /* #c4d4ff */
	--dav-color-palette-primary90-rgb: 217, 226, 255; /* #d9e2ff */
	--dav-color-palette-primary95-rgb: 237, 240, 255; /* #edf0ff */
	--dav-color-palette-primary98-rgb: 250, 248, 255; /* #faf8ff */
	--dav-color-palette-primary99-rgb: 254, 251, 255; /* #fefbff */

	/* secondary */
	--dav-color-palette-secondary10-rgb: 65, 0, 3; /* #410003 */
	--dav-color-palette-secondary20-rgb: 104, 0, 8; /* #680008 */
	--dav-color-palette-secondary25-rgb: 125, 0, 12; /* #7d000c */
	--dav-color-palette-secondary30-rgb: 147, 0, 16; /* #930010 */
	--dav-color-palette-secondary35-rgb: 168, 6, 21; /* #a80615 */
	--dav-color-palette-secondary40-rgb: 186, 26, 32; /* #ba1a20 */
	--dav-color-palette-secondary50-rgb: 222, 55, 53; /* #de3735 */
	--dav-color-palette-secondary60-rgb: 255, 84, 78; /* #ff544e */
	--dav-color-palette-secondary70-rgb: 255, 137, 128; /* #ff8980 */
	--dav-color-palette-secondary80-rgb: 255, 179, 172; /* #ffb3ac */
	--dav-color-palette-secondary85-rgb: 255, 199, 194; /* #ffc7c2 */
	--dav-color-palette-secondary90-rgb: 255, 218, 214; /* #ffdad6 */
	--dav-color-palette-secondary95-rgb: 255, 237, 235; /* #ffedeb */
	--dav-color-palette-secondary98-rgb: 255, 248, 247; /* #fff8f7 */
	--dav-color-palette-secondary99-rgb: 255, 251, 255; /* #fffbff */

	/* tertiary */
	--dav-color-palette-tertiary10-rgb: 0, 31, 41; /* #001f29 */
	--dav-color-palette-tertiary20-rgb: 0, 53, 69; /* #003545 */
	--dav-color-palette-tertiary25-rgb: 0, 65, 84; /* #004154 */
	--dav-color-palette-tertiary30-rgb: 0, 77, 99; /* #004d63 */
	--dav-color-palette-tertiary35-rgb: 0, 90, 115; /* #005a73 */
	--dav-color-palette-tertiary40-rgb: 0, 103, 131; /* #006783 */
	--dav-color-palette-tertiary50-rgb: 47, 128, 157; /* #2f809d */
	--dav-color-palette-tertiary60-rgb: 78, 154, 184; /* #4e9ab8 */
	--dav-color-palette-tertiary70-rgb: 106, 181, 212; /* #6ab5d4 */
	--dav-color-palette-tertiary80-rgb: 134, 208, 240; /* #86d0f0 */
	--dav-color-palette-tertiary85-rgb: 148, 222, 255; /* #94deff */
	--dav-color-palette-tertiary90-rgb: 188, 233, 255; /* #bce9ff */
	--dav-color-palette-tertiary95-rgb: 223, 244, 255; /* #dff4ff */
	--dav-color-palette-tertiary98-rgb: 243, 250, 255; /* #f3faff */
	--dav-color-palette-tertiary99-rgb: 250, 252, 255; /* #fafcff */

	/* neutral */
	--dav-color-palette-neutral4-rgb: 13, 14, 17; /* #0d0e11 */
	--dav-color-palette-neutral6-rgb: 18, 19, 22; /* #121316 */
	--dav-color-palette-neutral10-rgb: 27, 27, 31; /* #1b1b1f */
	--dav-color-palette-neutral12-rgb: 31, 31, 35; /* #1f1f23 */
	--dav-color-palette-neutral15-rgb: 37, 38, 41; /* #252629 */
	--dav-color-palette-neutral17-rgb: 41, 42, 45; /* #292a2d */
	--dav-color-palette-neutral20-rgb: 48, 48, 52; /* #303034 */
	--dav-color-palette-neutral22-rgb: 52, 52, 56; /* #343438 */
	--dav-color-palette-neutral24-rgb: 56, 57, 60; /* #38393c */
	--dav-color-palette-neutral25-rgb: 59, 59, 63; /* #3b3b3f */
	--dav-color-palette-neutral30-rgb: 70, 70, 74; /* #46464a */
	--dav-color-palette-neutral35-rgb: 82, 82, 86; /* #525256 */
	--dav-color-palette-neutral40-rgb: 94, 94, 98; /* #5e5e62 */
	--dav-color-palette-neutral50-rgb: 119, 119, 122; /* #77777a */
	--dav-color-palette-neutral60-rgb: 145, 144, 148; /* #919094 */
	--dav-color-palette-neutral70-rgb: 172, 171, 175; /* #acabaf */
	--dav-color-palette-neutral80-rgb: 199, 198, 202; /* #c7c6ca */
	--dav-color-palette-neutral85-rgb: 213, 212, 216; /* #d5d4d8 */
	--dav-color-palette-neutral87-rgb: 219, 217, 221; /* #dbd9dd */
	--dav-color-palette-neutral90-rgb: 227, 226, 230; /* #e3e2e6 */
	--dav-color-palette-neutral92-rgb: 233, 231, 236; /* #e9e7ec */
	--dav-color-palette-neutral94-rgb: 239, 237, 241; /* #efedf1 */
	--dav-color-palette-neutral95-rgb: 242, 240, 244; /* #f2f0f4 */
	--dav-color-palette-neutral96-rgb: 245, 243, 247; /* #f5f3f7 */
	--dav-color-palette-neutral98-rgb: 251, 248, 253; /* #fbf8fd */
	--dav-color-palette-neutral99-rgb: 254, 251, 255; /* #fefbff */

	/* neutral-variant */
	--dav-color-palette-neutral-variant10-rgb: 25, 27, 35; /* #191b23 */
	--dav-color-palette-neutral-variant20-rgb: 46, 48, 56; /* #2e3038 */
	--dav-color-palette-neutral-variant25-rgb: 57, 59, 67; /* #393b43 */
	--dav-color-palette-neutral-variant30-rgb: 68, 70, 79; /* #44464f */
	--dav-color-palette-neutral-variant35-rgb: 80, 82, 90; /* #50525a */
	--dav-color-palette-neutral-variant40-rgb: 92, 94, 103; /* #5c5e67 */
	--dav-color-palette-neutral-variant50-rgb: 117, 119, 128; /* #757780 */
	--dav-color-palette-neutral-variant60-rgb: 143, 144, 153; /* #8f9099 */
	--dav-color-palette-neutral-variant70-rgb: 169, 171, 180; /* #a9abb4 */
	--dav-color-palette-neutral-variant80-rgb: 197, 198, 208; /* #c5c6d0 */
	--dav-color-palette-neutral-variant85-rgb: 211, 212, 222; /* #d3d4de */
	--dav-color-palette-neutral-variant90-rgb: 225, 226, 236; /* #e1e2ec */
	--dav-color-palette-neutral-variant95-rgb: 239, 240, 250; /* #eff0fa */
	--dav-color-palette-neutral-variant98-rgb: 250, 248, 255; /* #faf8ff */
	--dav-color-palette-neutral-variant99-rgb: 254, 251, 255; /* #fefbff */

	/* error */
	--dav-color-palette-error10-rgb: 65, 0, 2; /* #410002 */
	--dav-color-palette-error20-rgb: 105, 0, 5; /* #690005 */
	--dav-color-palette-error25-rgb: 126, 0, 7; /* #7e0007 */
	--dav-color-palette-error30-rgb: 147, 0, 10; /* #93000a */
	--dav-color-palette-error35-rgb: 168, 7, 16; /* #a80710 */
	--dav-color-palette-error40-rgb: 186, 26, 26; /* #ba1a1a */
	--dav-color-palette-error50-rgb: 222, 55, 48; /* #de3730 */
	--dav-color-palette-error60-rgb: 255, 84, 73; /* #ff5449 */
	--dav-color-palette-error70-rgb: 255, 137, 125; /* #ff897d */
	--dav-color-palette-error80-rgb: 255, 180, 171; /* #ffb4ab */
	--dav-color-palette-error85-rgb: 255, 199, 192; /* #ffc7c0 */
	--dav-color-palette-error90-rgb: 255, 218, 214; /* #ffdad6 */
	--dav-color-palette-error95-rgb: 255, 237, 234; /* #ffedea */
	--dav-color-palette-error98-rgb: 255, 248, 247; /* #fff8f7 */
	--dav-color-palette-error99-rgb: 255, 251, 255; /* #fffbff */
`

const lightColorVariables = css`
	/* Other variables */
	--dav-color-scrim-light-opacity: 0.5;

	/* light */
	--base-light-rgb: var(--white-rgb);
	--dav-color-primary-light-rgb: var(--dav-color-palette-primary40-rgb);
	--dav-color-primary-container-light-rgb: var(
		--dav-color-palette-primary90-rgb
	);
	--dav-color-on-primary-light-rgb: var(--white-rgb);
	--dav-color-on-primary-container-light-rgb: var(
		--dav-color-palette-primary10-rgb
	);
	--dav-color-inverse-primary-light-rgb: var(
		--dav-color-palette-primary80-rgb
	);
	--dav-color-secondary-light-rgb: var(--dav-color-palette-secondary40-rgb);
	--dav-color-secondary-container-light-rgb: var(
		--dav-color-palette-secondary90-rgb
	);
	--dav-color-on-secondary-light-rgb: var(--white-rgb);
	--dav-color-on-secondary-container-light-rgb: var(
		--dav-color-palette-secondary10-rgb
	);
	--dav-color-tertiary-light-rgb: var(--dav-color-palette-tertiary40-rgb);
	--dav-color-tertiary-container-light-rgb: var(
		--dav-color-palette-tertiary90-rgb
	);
	--dav-color-on-tertiary-light-rgb: var(--white-rgb);
	--dav-color-on-tertiary-container-light-rgb: var(
		--dav-color-palette-tertiary10-rgb
	);
	--dav-color-surface-light-rgb: var(--dav-color-palette-neutral98-rgb);
	--dav-color-surface-dim-light-rgb: var(--dav-color-palette-neutral87-rgb);
	--dav-color-surface-bright-light-rgb: var(--dav-color-palette-neutral98-rgb);
	--dav-color-surface-container-lowest-light-rgb: var(--white-rgb);
	--dav-color-surface-container-low-light-rgb: var(
		--dav-color-palette-neutral96-rgb
	);
	--dav-color-surface-container-light-rgb: var(
		--dav-color-palette-neutral94-rgb
	);
	--dav-color-surface-container-high-light-rgb: var(
		--dav-color-palette-neutral92-rgb
	);
	--dav-color-surface-container-highest-light-rgb: var(
		--dav-color-palette-neutral90-rgb
	);
	--dav-color-surface-variant-light-rgb: var(
		--dav-color-palette-neutral-variant90-rgb
	);
	--dav-color-on-surface-light-rgb: var(--dav-color-palette-neutral10-rgb);
	--dav-color-on-surface-variant-light-rgb: var(
		--dav-color-palette-neutral-variant30-rgb
	);
	--dav-color-inverse-surface-light-rgb: var(
		--dav-color-palette-neutral20-rgb
	);
	--dav-color-inverse-on-surface-light-rgb: var(
		--dav-color-palette-neutral95-rgb
	);
	--dav-color-background-light-rgb: var(--dav-color-palette-primary98-rgb);
	--dav-color-on-background-light-rgb: var(--dav-color-palette-neutral10-rgb);
	--dav-color-error-light-rgb: var(--dav-color-palette-error40-rgb);
	--dav-color-error-container-light-rgb: var(--dav-color-palette-error90-rgb);
	--dav-color-on-error-light-rgb: var(--white-rgb);
	--dav-color-on-error-container-light-rgb: var(
		--dav-color-palette-error10-rgb
	);
	--dav-color-outline-light-rgb: var(
		--dav-color-palette-neutral-variant50-rgb
	);
	--dav-color-outline-variant-light-rgb: var(
		--dav-color-palette-neutral-variant80-rgb
	);
	--dav-color-shadow-light-rgb: var(--black-rgb);
	--dav-color-surface-tint-light-rgb: var(--dav-color-palette-primary40-rgb);
	--dav-color-scrim-light-rgb: var(--black-rgb);
	--dav-color-scrollbar-light-rgb: var(--dav-color-palette-neutral60-rgb);
	--dav-color-skeleton-light-rgb: var(--dav-color-palette-neutral90-rgb);

	/* light states */
	--dav-color-primary-hover-light-rgb: var(--dav-color-palette-primary35-rgb);
	--dav-color-primary-focus-light-rgb: var(--dav-color-palette-primary30-rgb);
	--dav-color-primary-container-hover-light-rgb: var(
		--dav-color-palette-primary85-rgb
	);
	--dav-color-primary-container-focus-light-rgb: var(
		--dav-color-palette-primary80-rgb
	);
	--dav-color-secondary-hover-light-rgb: var(
		--dav-color-palette-secondary35-rgb
	);
	--dav-color-secondary-focus-light-rgb: var(
		--dav-color-palette-secondary30-rgb
	);
	--dav-color-secondary-container-hover-light-rgb: var(
		--dav-color-palette-secondary85-rgb
	);
	--dav-color-secondary-container-focus-light-rgb: var(
		--dav-color-palette-secondary80-rgb
	);
	--dav-color-tertiary-hover-light-rgb: var(
		--dav-color-palette-tertiary35-rgb
	);
	--dav-color-tertiary-focus-light-rgb: var(
		--dav-color-palette-tertiary30-rgb
	);
	--dav-color-tertiary-container-hover-light-rgb: var(
		--dav-color-palette-tertiary85-rgb
	);
	--dav-color-tertiary-container-focus-light-rgb: var(
		--dav-color-palette-tertiary80-rgb
	);
	--dav-color-error-hover-light-rgb: var(--dav-color-palette-error35-rgb);
	--dav-color-error-focus-light-rgb: var(--dav-color-palette-error30-rgb);
	--dav-color-error-container-hover-light-rgb: var(
		--dav-color-palette-error85-rgb
	);
	--dav-color-error-container-focus-light-rgb: var(
		--dav-color-palette-error80-rgb
	);
	--dav-color-surface-hover-light-rgb: var(--dav-color-palette-neutral95-rgb);
	--dav-color-surface-focus-light-rgb: var(--dav-color-palette-neutral90-rgb);
	--dav-color-surface-variant-hover-light-rgb: var(
		--dav-color-palette-neutral-variant85-rgb
	);
	--dav-color-surface-variant-focus-light-rgb: var(
		--dav-color-palette-neutral-variant80-rgb
	);
`

const darkColorVariables = css`
	/* Other variables */
	--dav-color-scrim-dark-opacity: 0.2;

	/* dark */
	--base-dark-rgb: var(--black-rgb);
	--dav-color-primary-dark-rgb: var(--dav-color-palette-primary80-rgb);
	--dav-color-primary-container-dark-rgb: var(
		--dav-color-palette-primary30-rgb
	);
	--dav-color-on-primary-dark-rgb: var(--dav-color-palette-primary20-rgb);
	--dav-color-on-primary-container-dark-rgb: var(
		--dav-color-palette-primary90-rgb
	);
	--dav-color-inverse-primary-dark-rgb: var(--dav-color-palette-primary40-rgb);
	--dav-color-secondary-dark-rgb: var(--dav-color-palette-secondary80-rgb);
	--dav-color-secondary-container-dark-rgb: var(
		--dav-color-palette-secondary30-rgb
	);
	--dav-color-on-secondary-dark-rgb: var(--dav-color-palette-secondary20-rgb);
	--dav-color-on-secondary-container-dark-rgb: var(
		--dav-color-palette-secondary90-rgb
	);
	--dav-color-tertiary-dark-rgb: var(--dav-color-palette-tertiary80-rgb);
	--dav-color-tertiary-container-dark-rgb: var(
		--dav-color-palette-tertiary30-rgb
	);
	--dav-color-on-tertiary-dark-rgb: var(--dav-color-palette-tertiary20-rgb);
	--dav-color-on-tertiary-container-dark-rgb: var(
		--dav-color-palette-tertiary90-rgb
	);
	--dav-color-surface-dark-rgb: var(--dav-color-palette-neutral6-rgb);
	--dav-color-surface-dim-dark-rgb: var(--dav-color-palette-neutral6-rgb);
	--dav-color-surface-bright-dark-rgb: var(--dav-color-palette-neutral24-rgb);
	--dav-color-surface-container-lowest-dark-rgb: var(
		--dav-color-palette-neutral4-rgb
	);
	--dav-color-surface-container-low-dark-rgb: var(
		--dav-color-palette-neutral10-rgb
	);
	--dav-color-surface-container-dark-rgb: var(
		--dav-color-palette-neutral12-rgb
	);
	--dav-color-surface-container-high-dark-rgb: var(
		--dav-color-palette-neutral17-rgb
	);
	--dav-color-surface-container-highest-dark-rgb: var(
		--dav-color-palette-neutral22-rgb
	);
	--dav-color-surface-variant-dark-rgb: var(
		--dav-color-palette-neutral-variant30-rgb
	);
	--dav-color-on-surface-dark-rgb: var(--dav-color-palette-neutral90-rgb);
	--dav-color-on-surface-variant-dark-rgb: var(
		--dav-color-palette-neutral-variant80-rgb
	);
	--dav-color-inverse-surface-dark-rgb: var(--dav-color-palette-neutral90-rgb);
	--dav-color-inverse-on-surface-dark-rgb: var(
		--dav-color-palette-neutral20-rgb
	);
	--dav-color-background-dark-rgb: var(--dav-color-palette-neutral6-rgb);
	--dav-color-on-background-dark-rgb: var(--dav-color-palette-neutral90-rgb);
	--dav-color-error-dark-rgb: var(--dav-color-palette-error80-rgb);
	--dav-color-error-container-dark-rgb: var(--dav-color-palette-error30-rgb);
	--dav-color-on-error-dark-rgb: var(--dav-color-palette-error20-rgb);
	--dav-color-on-error-container-dark-rgb: var(
		--dav-color-palette-error90-rgb
	);
	--dav-color-outline-dark-rgb: var(--dav-color-palette-neutral-variant60-rgb);
	--dav-color-outline-variant-dark-rgb: var(
		--dav-color-palette-neutral-variant30-rgb
	);
	--dav-color-shadow-dark-rgb: var(--black-rgb);
	--dav-color-surface-tint-dark-rgb: var(--dav-color-palette-primary80-rgb);
	--dav-color-scrim-dark-rgb: var(--white-rgb);
	--dav-color-scrollbar-dark-rgb: var(--dav-color-palette-neutral40-rgb);
	--dav-color-skeleton-dark-rgb: var(--dav-color-palette-neutral10-rgb);

	/* dark states */
	--dav-color-primary-hover-dark-rgb: var(--dav-color-palette-primary85-rgb);
	--dav-color-primary-focus-dark-rgb: var(--dav-color-palette-primary90-rgb);
	--dav-color-primary-container-hover-dark-rgb: var(
		--dav-color-palette-primary35-rgb
	);
	--dav-color-primary-container-focus-dark-rgb: var(
		--dav-color-palette-primary40-rgb
	);
	--dav-color-secondary-hover-dark-rgb: var(
		--dav-color-palette-secondary85-rgb
	);
	--dav-color-secondary-focus-dark-rgb: var(
		--dav-color-palette-secondary90-rgb
	);
	--dav-color-secondary-container-hover-dark-rgb: var(
		--dav-color-palette-secondary35-rgb
	);
	--dav-color-secondary-container-focus-dark-rgb: var(
		--dav-color-palette-secondary40-rgb
	);
	--dav-color-tertiary-hover-dark-rgb: var(--dav-color-palette-tertiary85-rgb);
	--dav-color-tertiary-focus-dark-rgb: var(--dav-color-palette-tertiary90-rgb);
	--dav-color-tertiary-container-hover-dark-rgb: var(
		--dav-color-palette-tertiary35-rgb
	);
	--dav-color-tertiary-container-focus-dark-rgb: var(
		--dav-color-palette-tertiary40-rgb
	);
	--dav-color-error-hover-dark-rgb: var(--dav-color-palette-error85-rgb);
	--dav-color-error-focus-dark-rgb: var(--dav-color-palette-error90-rgb);
	--dav-color-error-container-hover-dark-rgb: var(
		--dav-color-palette-error35-rgb
	);
	--dav-color-error-container-focus-dark-rgb: var(
		--dav-color-palette-error40-rgb
	);
	--dav-color-surface-hover-dark-rgb: var(--dav-color-palette-neutral10-rgb);
	--dav-color-surface-focus-dark-rgb: var(--dav-color-palette-neutral15-rgb);
	--dav-color-surface-variant-hover-dark-rgb: var(
		--dav-color-palette-neutral-variant35-rgb
	);
	--dav-color-surface-variant-focus-dark-rgb: var(
		--dav-color-palette-neutral-variant40-rgb
	);
`

const defaultRgbColorVariables = css`
	/* Other variables */
	--dav-color-scrim-opacity: var(--dav-color-scrim-light-opacity);

	/* default */
	--base-rgb: var(--white-rgb);
	--dav-color-primary-rgb: var(--dav-color-primary-light-rgb);
	--dav-color-primary-container-rgb: var(
		--dav-color-primary-container-light-rgb
	);
	--dav-color-on-primary-rgb: var(--dav-color-on-primary-light-rgb);
	--dav-color-on-primary-container-rgb: var(
		--dav-color-on-primary-container-light-rgb
	);
	--dav-color-inverse-primary-rgb: var(--dav-color-inverse-primary-light-rgb);
	--dav-color-secondary-rgb: var(--dav-color-secondary-light-rgb);
	--dav-color-secondary-container-rgb: var(
		--dav-color-secondary-container-light-rgb
	);
	--dav-color-on-secondary-rgb: var(--dav-color-on-secondary-light-rgb);
	--dav-color-on-secondary-container-rgb: var(
		--dav-color-on-secondary-container-light-rgb
	);
	--dav-color-tertiary-rgb: var(--dav-color-tertiary-light-rgb);
	--dav-color-tertiary-container-rgb: var(
		--dav-color-tertiary-container-light-rgb
	);
	--dav-color-on-tertiary-rgb: var(--dav-color-on-tertiary-light-rgb);
	--dav-color-on-tertiary-container-rgb: var(
		--dav-color-on-tertiary-container-light-rgb
	);
	--dav-color-surface-rgb: var(--dav-color-surface-light-rgb);
	--dav-color-surface-dim-rgb: var(--dav-color-surface-dim-light-rgb);
	--dav-color-surface-bright-rgb: var(--dav-color-surface-bright-light-rgb);
	--dav-color-surface-container-lowest-rgb: var(
		--dav-color-surface-container-lowest-light-rgb
	);
	--dav-color-surface-container-low-rgb: var(
		--dav-color-surface-container-low-light-rgb
	);
	--dav-color-surface-container-rgb: var(
		--dav-color-surface-container-light-rgb
	);
	--dav-color-surface-container-high-rgb: var(
		--dav-color-surface-container-high-light-rgb
	);
	--dav-color-surface-container-highest-rgb: var(
		--dav-color-surface-container-highest-light-rgb
	);
	--dav-color-surface-variant-rgb: var(--dav-color-surface-variant-light-rgb);
	--dav-color-on-surface-rgb: var(--dav-color-on-surface-light-rgb);
	--dav-color-on-surface-variant-rgb: var(
		--dav-color-on-surface-variant-light-rgb
	);
	--dav-color-inverse-surface-rgb: var(--dav-color-inverse-surface-light-rgb);
	--dav-color-inverse-on-surface-rgb: var(
		--dav-color-inverse-on-surface-light-rgb
	);
	--dav-color-background-rgb: var(--dav-color-background-light-rgb);
	--dav-color-on-background-rgb: var(--dav-color-on-background-light-rgb);
	--dav-color-error-rgb: var(--dav-color-error-light-rgb);
	--dav-color-error-container-rgb: var(--dav-color-error-container-light-rgb);
	--dav-color-on-error-rgb: var(--dav-color-on-error-light-rgb);
	--dav-color-on-error-container-rgb: var(
		--dav-color-on-error-container-light-rgb
	);
	--dav-color-outline-rgb: var(--dav-color-outline-light-rgb);
	--dav-color-outline-variant-rgb: var(--dav-color-outline-variant-light-rgb);
	--dav-color-shadow-rgb: var(--dav-color-shadow-light-rgb);
	--dav-color-surface-tint-rgb: var(--dav-color-surface-tint-light-rgb);
	--dav-color-scrim-rgb: var(--dav-color-scrim-light-rgb);
	--dav-color-scrollbar-rgb: var(--dav-color-scrollbar-light-rgb);
	--dav-color-skeleton-rgb: var(--dav-color-skeleton-light-rgb);

	/* default states */
	--dav-color-primary-hover-rgb: var(--dav-color-primary-hover-light-rgb);
	--dav-color-primary-focus-rgb: var(--dav-color-primary-focus-light-rgb);
	--dav-color-primary-container-hover-rgb: var(
		--dav-color-primary-container-hover-light-rgb
	);
	--dav-color-primary-container-focus-rgb: var(
		--dav-color-primary-container-focus-light-rgb
	);
	--dav-color-secondary-hover-rgb: var(--dav-color-secondary-hover-light-rgb);
	--dav-color-secondary-focus-rgb: var(--dav-color-secondary-focus-light-rgb);
	--dav-color-secondary-container-hover-rgb: var(
		--dav-color-secondary-container-hover-light-rgb
	);
	--dav-color-secondary-container-focus-rgb: var(
		--dav-color-secondary-container-focus-light-rgb
	);
	--dav-color-tertiary-hover-rgb: var(--dav-color-tertiary-hover-light-rgb);
	--dav-color-tertiary-focus-rgb: var(--dav-color-tertiary-focus-light-rgb);
	--dav-color-tertiary-container-hover-rgb: var(
		--dav-color-tertiary-container-hover-light-rgb
	);
	--dav-color-tertiary-container-focus-rgb: var(
		--dav-color-tertiary-container-focus-light-rgb
	);
	--dav-color-error-hover-rgb: var(--dav-color-error-hover-light-rgb);
	--dav-color-error-focus-rgb: var(--dav-color-error-focus-light-rgb);
	--dav-color-error-container-hover-rgb: var(
		--dav-color-error-container-hover-light-rgb
	);
	--dav-color-error-container-focus-rgb: var(
		--dav-color-error-container-focus-light-rgb
	);
	--dav-color-surface-hover-rgb: var(--dav-color-surface-hover-light-rgb);
	--dav-color-surface-focus-rgb: var(--dav-color-surface-focus-light-rgb);
	--dav-color-surface-variant-hover-rgb: var(
		--dav-color-surface-variant-hover-light-rgb
	);
	--dav-color-surface-variant-focus-rgb: var(
		--dav-color-surface-variant-focus-light-rgb
	);
`

const defaultColorVariables = css`
	/* Other variables */
	--dav-color-scrim-opacity: var(--dav-color-scrim-opacity);

	/* default */
	--base: rgb(var(--base-rgb));
	--dav-color-primary: rgb(var(--dav-color-primary-rgb));
	--dav-color-primary-container: rgb(var(--dav-color-primary-container-rgb));
	--dav-color-on-primary: rgb(var(--dav-color-on-primary-rgb));
	--dav-color-on-primary-container: rgb(
		var(--dav-color-on-primary-container-rgb)
	);
	--dav-color-inverse-primary: rgb(var(--dav-color-inverse-primary-rgb));
	--dav-color-secondary: rgb(var(--dav-color-secondary-rgb));
	--dav-color-secondary-container: rgb(
		var(--dav-color-secondary-container-rgb)
	);
	--dav-color-on-secondary: rgb(var(--dav-color-on-secondary-rgb));
	--dav-color-on-secondary-container: rgb(
		var(--dav-color-on-secondary-container-rgb)
	);
	--dav-color-tertiary: rgb(var(--dav-color-tertiary-rgb));
	--dav-color-tertiary-container: rgb(var(--dav-color-tertiary-container-rgb));
	--dav-color-on-tertiary: rgb(var(--dav-color-on-tertiary-rgb));
	--dav-color-on-tertiary-container: rgb(
		var(--dav-color-on-tertiary-container-rgb)
	);
	--dav-color-surface: rgb(var(--dav-color-surface-rgb));
	--dav-color-surface-dim: rgb(var(--dav-color-surface-dim-rgb));
	--dav-color-surface-bright: rgb(var(--dav-color-surface-bright-rgb));
	--dav-color-surface-container-lowest: rgb(
		var(--dav-color-surface-container-lowest-rgb)
	);
	--dav-color-surface-container-low: rgb(
		var(--dav-color-surface-container-low-rgb)
	);
	--dav-color-surface-container: rgb(var(--dav-color-surface-container-rgb));
	--dav-color-surface-container-high: rgb(
		var(--dav-color-surface-container-high-rgb)
	);
	--dav-color-surface-container-highest: rgb(
		var(--dav-color-surface-container-highest-rgb)
	);
	--dav-color-surface-variant: rgb(var(--dav-color-surface-variant-rgb));
	--dav-color-on-surface: rgb(var(--dav-color-on-surface-rgb));
	--dav-color-on-surface-variant: rgb(var(--dav-color-on-surface-variant-rgb));
	--dav-color-inverse-surface: rgb(var(--dav-color-inverse-surface-rgb));
	--dav-color-inverse-on-surface: rgb(var(--dav-color-inverse-on-surface-rgb));
	--dav-color-background: rgb(var(--dav-color-background-rgb));
	--dav-color-on-background: rgb(var(--dav-color-on-background-rgb));
	--dav-color-error: rgb(var(--dav-color-error-rgb));
	--dav-color-error-container: rgb(var(--dav-color-error-container-rgb));
	--dav-color-on-error: rgb(var(--dav-color-on-error-rgb));
	--dav-color-on-error-container: rgb(var(--dav-color-on-error-container-rgb));
	--dav-color-outline: rgb(var(--dav-color-outline-rgb));
	--dav-color-outline-variant: rgb(var(--dav-color-outline-variant-rgb));
	--dav-color-shadow: rgb(var(--dav-color-shadow-rgb));
	--dav-color-surface-tint: rgb(var(--dav-color-surface-tint-rgb));
	--dav-color-scrim: rgba(
		var(--dav-color-scrim-rgb),
		var(--dav-color-scrim-opacity)
	);
	--dav-color-scrollbar: rgb(var(--dav-color-scrollbar-rgb));
	--dav-color-skeleton: rgb(var(--dav-color-skeleton-rgb));

	/* default states */
	--dav-color-primary-hover: rgb(var(--dav-color-primary-hover-rgb));
	--dav-color-primary-focus: rgb(var(--dav-color-primary-focus-rgb));
	--dav-color-primary-container-hover: rgb(
		var(--dav-color-primary-container-hover-rgb)
	);
	--dav-color-primary-container-focus: rgb(
		var(--dav-color-primary-container-focus-rgb)
	);
	--dav-color-secondary-hover: rgb(var(--dav-color-secondary-hover-rgb));
	--dav-color-secondary-focus: rgb(var(--dav-color-secondary-focus-rgb));
	--dav-color-secondary-container-hover: rgb(
		var(--dav-color-secondary-container-hover-rgb)
	);
	--dav-color-secondary-container-focus: rgb(
		var(--dav-color-secondary-container-focus-rgb)
	);
	--dav-color-tertiary-hover: rgb(var(--dav-color-tertiary-hover-rgb));
	--dav-color-tertiary-focus: rgb(var(--dav-color-tertiary-focus-rgb));
	--dav-color-tertiary-container-hover: rgb(
		var(--dav-color-tertiary-container-hover-rgb)
	);
	--dav-color-tertiary-container-focus: rgb(
		var(--dav-color-tertiary-container-focus-rgb)
	);
	--dav-color-error-hover: rgb(var(--dav-color-error-hover-rgb));
	--dav-color-error-focus: rgb(var(--dav-color-error-focus-rgb));
	--dav-color-error-container-hover: rgb(
		var(--dav-color-error-container-hover-rgb)
	);
	--dav-color-error-container-focus: rgb(
		var(--dav-color-error-container-focus-rgb)
	);
	--dav-color-surface-hover: rgb(var(--dav-color-surface-hover-rgb));
	--dav-color-surface-focus: rgb(var(--dav-color-surface-focus-rgb));
	--dav-color-surface-variant-hover: rgb(
		var(--dav-color-surface-variant-hover-rgb)
	);
	--dav-color-surface-variant-focus: rgb(
		var(--dav-color-surface-variant-focus-rgb)
	);
`

export const globalStyles = css`
	body {
		${colorPaletteVariables}

		/* Other variables */
		--dav-font: Roboto, Arial, sans-serif;
	}

	:host {
		/* RGB color variables */
		${lightColorVariables}
		${darkColorVariables}
		${defaultRgbColorVariables}

		/* Non-RGB color variables */
		${defaultColorVariables}
	}

	::-webkit-scrollbar {
		background-color: transparent;
		width: 5px;
	}

	::-webkit-scrollbar-thumb {
		background-color: rgb(var(--dav-color-scrollbar-rgb));
		border-radius: 10px;
	}

	.slide-up-in {
		animation-duration: 100ms;
		animation-name: animate-slide-up-in;
		animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
	}

	.slide-down-in {
		animation-duration: 100ms;
		animation-name: animate-slide-down-in;
		animation-timing-function: cubic-bezier(0.26, 0.53, 0.74, 1.48);
	}

	@keyframes animate-slide-up-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}

		to {
			opacity: 1;
			transform: translateY(0);
		}
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
