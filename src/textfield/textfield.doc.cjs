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
			name: "disabled",
			type: "Boolean",
			values: "true / false"
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
			title: "Disabled Textfield",
			template: `
				<dav-textfield
					value="Monty"
					label="Name"
					placeholder="Your name"
					autocomplete="given-name"
					disabled
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
		},
		{
			title: "Textfield for numeric values only",
			template: `
				<dav-textfield
					value="20"
					label="Age"
					placeholder="Your age"
					type="number"
					min="10"
					max="100"
				></dav-textfield>
			`
		}
	]
}
