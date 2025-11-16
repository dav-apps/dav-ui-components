module.exports = {
	name: "RadioButton",
	examples: [
		{
			title: "Default RadioButton",
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
		}
	]
}
