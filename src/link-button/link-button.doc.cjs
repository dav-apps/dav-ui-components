module.exports = {
	name: "LinkButton",
	properties: [
		{
			name: "url",
			type: "String"
		},
		{
			name: "target",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default LinkButton",
			template: `
				<dav-link-button url="https://dav-apps.tech">
					Hello World
				</dav-link-button>
			`
		}
	]
}
