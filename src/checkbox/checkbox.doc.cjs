module.exports = {
	name: "Checkbox",
	properties: [
		{
			name: "checked",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "label",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default Checkbox",
			template: `<dav-checkbox label="Hello World"></dav-checkbox>`
		}
	]
}
