module.exports = {
	name: "Textfield",
	properties: [
		{
			name: "value",
			type: "String"
		},
		{
			name: "label",
			type: "String"
		},
		{
			name: "placeholder",
			type: "String"
		},
		{
			name: "errorMessage",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default Textfield",
			template: `
				<dav-textfield
					value="Monty"
					label="Name"
					placeholder="Your name"
					autocomplete="given-name"
				></dav-textfield>
			`
		},
		{
			title: "Textfield with error",
			template: `
				<dav-textfield
					value="Monty"
					label="Name"
					placeholder="Your name"
					autocomplete="given-name"
					errorMessage="Please enter your real name"
				></dav-textfield>
			`
		}
	]
}
