module.exports = {
	name: "Checkbox",
	properties: [
		{
			name: "label",
			type: "String"
		},
		{
			name: "checked",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "disabled",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "strikeThrough",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default Checkbox",
			template: `<dav-checkbox label="Hello World"></dav-checkbox>`
		},
		{
			title: "Strike through Checkbox",
			template: `<dav-checkbox label="Hello World" checked strikeThrough></dav-checkbox>`
		},
		{
			title: "Disabled Checkbox",
			template: `<dav-checkbox label="Hello World" checked disabled></dav-checkbox>`
		}
	]
}
