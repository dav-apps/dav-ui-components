module.exports = {
	name: "MessageBar",
	properties: [
		{
			name: "type",
			type: "String",
			values: `"info", "success", "error"`
		},
		{
			name: "color",
			type: "String",
			values: `"primary", "secondary", "tertiary", "error"`
		}
	],
	examples: [
		{
			title: "Info MessageBar",
			template: `<dav-message-bar>This is an info message bar</dav-message-bar>`
		},
		{
			title: "Success MessageBar",
			template: `<dav-message-bar type="success">This is a success message bar</dav-message-bar>`
		},
		{
			title: "Error MessageBar",
			template: `<dav-message-bar type="error">This is an error message bar</dav-message-bar>`
		},
		{
			title: "MessageBar with secondary colors",
			template: `<dav-message-bar color="secondary">This is a message bar in secondary colors</dav-message-bar>`
		},
		{
			title: "MessageBar with tertiary colors",
			template: `<dav-message-bar color="tertiary">This is a message bar in tertiary colors</dav-message-bar>`
		},
		{
			title: "MessageBar with error colors",
			template: `<dav-message-bar color="error">This is a message bar in error colors</dav-message-bar>`
		}
	]
}
