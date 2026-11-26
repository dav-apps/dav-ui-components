module.exports = {
	name: "RadioGroup",
	properties: [
		{
			name: "horizontal",
			type: "Boolean",
			values: "true / false",
			description: "Lay out options in a row that wraps in narrow containers."
		}
	],
	examples: [
		{
			title: "Default RadioGroup",
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
		},
		{
			title: "Horizontal RadioGroup",
			template: `
				<div style="max-width: 240px">
					<dav-radio-group horizontal>
						<dav-radio-button label="Small" value="small" checked></dav-radio-button>
						<dav-radio-button label="Medium" value="medium"></dav-radio-button>
						<dav-radio-button label="Large" value="large"></dav-radio-button>
					</dav-radio-group>
				</div>
			`
		}
	]
}
