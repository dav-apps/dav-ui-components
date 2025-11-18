module.exports = {
	name: "RadioGroup",
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
		}
	]
}
