module.exports = {
	name: "RadioButton",
	properties: [
		{
			name: "label",
			type: "String"
		},
		{
			name: "name",
			type: "String"
		},
		{
			name: "value",
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
			title: "Default RadioButton",
			template: `
				<dav-radio-button
					label="Option"
				></dav-radio-button>
			`
		}
	]
}
