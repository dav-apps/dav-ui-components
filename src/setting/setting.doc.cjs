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
				<dav-setting header="Hello World" expandable="true">
					<div><p>Hello World</p></div>
				</dav-setting>
			`
		}
	]
}
