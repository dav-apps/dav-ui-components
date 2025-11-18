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
				<dav-radio-group>
					<dav-radio-button
						name="animals"
						label="Elephant"
						checked
					></dav-radio-button>

					<dav-radio-button
						name="animals"
						label="Lion"
					></dav-radio-button>

					<dav-radio-button
						name="animals"
						label="Tiger"
					></dav-radio-button>
				</dav-radio-group>
			`
		}
	]
}
