module.exports = {
	name: 'Button',
	properties: [
		{
			name: "color",
			type: "String",
			values: `"primary", "secondary"`
		},
		{
			name: "tonal",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: 'Primary button',
			template: `<dav-button>Hello World</dav-button>`
		},
		{
			title: "Secondary button",
			template: `<dav-button color="secondary">Hello World</dav-button>`
		},
		{
			title: "Primary tonal button",
			template: `<dav-button tonal>Hello World</dav-button>`
		},
		{
			title: "Secondary tonal button",
			template: `<dav-button color="secondary" tonal>Hello World</dav-button>`
		}
	]
}
