module.exports = {
	name: "Badge",
	properties: [
		{
			name: "color",
			type: "String",
			values: `"primary", "secondary", "tertiary", "error"`
		},
		{
			name: "tonal",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Primary badge",
			template: `
				<div style="display: flex; gap: 20px">
					<dav-badge>Hello World</dav-badge>
					<dav-badge tonal>Hello World</dav-badge>
				</div>
			`
		},
		{
			title: "Secondary badge",
			template: `
				<div style="display: flex; gap: 20px">
					<dav-badge color="secondary">Hello World</dav-badge>
					<dav-badge color="secondary" tonal>Hello World</dav-badge>
				</div>
			`
		},
		{
			title: "Tertiary badge",
			template: `
				<div style="display: flex; gap: 20px">
					<dav-badge color="tertiary">Hello World</dav-badge>
					<dav-badge color="tertiary" tonal>Hello World</dav-badge>
				</div>
			`
		},
		{
			title: "Error badge",
			template: `
				<div style="display: flex; gap: 20px">
					<dav-badge color="error">Hello World</dav-badge>
					<dav-badge color="error" tonal>Hello World</dav-badge>
				</div>
			`
		},
		{
			title: "Badge with link",
			template: `
				<dav-badge color="error" href="https://dav-apps.tech" target="blank">Hello World</dav-badge>
			`
		}
	]
}
