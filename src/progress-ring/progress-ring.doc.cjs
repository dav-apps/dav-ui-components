module.exports = {
	name: "ProgressRing",
	properties: [
		{
			name: "size",
			type: "Number"
		},
		{
			name: "color",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default ProgressRing",
			template: `
				<dav-progress-ring size="42">
				</dav-progress-ring>
			`
		}
	]
}
