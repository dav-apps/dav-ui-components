module.exports = {
	name: "Setting",
	properties: [
		{
			name: "header",
			type: "String"
		},
		{
			name: "expandable",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "open",
			type: "Boolean",
			value: "true / false"
		}
	],
	examples: [
		{
			title: "Default Setting",
			template: `
				<dav-setting header="Hello World">
					<dav-toggle></dav-toggle>
				</dav-setting>
			`
		},
		{
			title: "Expandable Setting",
			template: `
				<dav-setting header="Hello World" expandable>
					<div><p style="margin: 0">Hello World</p></div>
				</dav-setting>
			`
		}
	]
}
