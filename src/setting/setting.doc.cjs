module.exports = {
	name: "Setting",
	properties: [
		{
			name: "header",
			type: "String"
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
		}
	]
}
