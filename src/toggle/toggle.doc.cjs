module.exports = {
	name: "Toggle",
	properties: [
		{
			name: "label",
			type: "String"
		},
		{
			name: "checked",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default Toggle",
			template: `<dav-toggle></dav-toggle>`
		},
		{
			title: "Toggle with label",
			template: `<dav-toggle label="Hello World"></dav-toggle>`
		}
	]
}
