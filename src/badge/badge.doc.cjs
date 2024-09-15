module.exports = {
	name: "Badge",
	properties: [
		{
			name: "size",
			type: "String",
			values: `"sm", "md"`
		},
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

				<div style="display: flex; gap: 20px; margin-top: 30px">
					<dav-badge size="sm">Hello World</dav-badge>
					<dav-badge size="sm" tonal>Hello World</dav-badge>
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

				<div style="display: flex; gap: 20px; margin-top: 30px">
					<dav-badge size="sm" color="secondary">Hello World</dav-badge>
					<dav-badge size="sm" color="secondary" tonal>Hello World</dav-badge>
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

				<div style="display: flex; gap: 20px; margin-top: 30px">
					<dav-badge size="sm" color="tertiary">Hello World</dav-badge>
					<dav-badge size="sm" color="tertiary" tonal>Hello World</dav-badge>
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

				<div style="display: flex; gap: 20px; margin-top: 30px;">
					<dav-badge size="sm" color="error">Hello World</dav-badge>
					<dav-badge size="sm" color="error" tonal>Hello World</dav-badge>
				</div>
			`
		},
		{
			title: "Badge with link",
			template: `
				<dav-badge
					color="error"
					href="https://dav-apps.tech"
					target="blank"
				>
					Hello World
				</dav-badge>
			`
		}
	]
}
