module.exports = {
	name: "TimePicker",
	properties: [
		{
			name: "hour",
			type: "Number"
		},
		{
			name: "minute",
			type: "Number"
		},
		{
			name: "disabled",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default TimePicker",
			template: "<dav-time-picker></dav-time-picker>"
		},
		{
			title: "Disabled TimePicker",
			template: "<dav-time-picker disabled></dav-time-picker>"
		}
	]
}
