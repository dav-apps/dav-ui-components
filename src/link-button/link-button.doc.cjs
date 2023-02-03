module.exports = {
	name: 'LinkButton',
	properties: [
		{
			name: "url",
			type: "String"
		}
	],
	examples: [
		{
			title: 'Default LinkButton',
			controller: function (element) {},
			template: `
				<dav-link-button url="https://dav-apps.tech">
					Hello World
				</dav-link-button>
			`
		}
	]
}
