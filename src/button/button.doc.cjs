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
			title: "Tertiary button",
			template: `<dav-button color="tertiary">Hello World</dav-button>`
		},
		{
			title: "Error button",
			template: `<dav-button color="error">Hello World</dav-button>`
		},
		{
			title: "Primary tonal button",
			template: `<dav-button tonal>Hello World</dav-button>`
		},
		{
			title: "Secondary tonal button",
			template: `<dav-button color="secondary" tonal>Hello World</dav-button>`
		},
		{
			title: "Tertiary tonal button",
			template: `<dav-button color="tertiary" tonal>Hello World</dav-button>`
		},
		{
			title: "Error tonal button",
			template: `<dav-button color="error" tonal>Hello World</dav-button>`
		},
	]
}
