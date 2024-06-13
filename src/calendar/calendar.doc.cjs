module.exports = {
	name: "Calendar",
	properties: [
		{
			name: "date",
			type: "String"
		},
		{
			name: "disabled",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default Calendar",
			template: "<dav-calendar></dav-calendar>"
		},
		{
			title: "Calendar with selected date",
			template: `<dav-calendar date="2020-01-01T21:00:00Z"></dav-calendar>`
		},
		{
			title: "Disabled Calendar",
			template: `<dav-calendar disabled></dav-calendar>`
		}
	]
}
