module.exports = {
	name: "Textarea",
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
			name: "resize",
			type: "String",
			values: "none, horizontal, vertical, both, auto"
		},
		{
			name: "errorMessage",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default Textarea",
			template: `
				<dav-textarea
					value="Lorem ipsum dolor sit amet"
					label="Description"
					placeholder="The description of your book"
					resize="vertical"
				></dav-textarea>
			`
		},
		{
			title: "Disabled Textarea",
			template: `
				<dav-textarea
					value="Lorem ipsum dolor sit amet"
					label="Description"
					placeholder="The description of your book"
					resize="none"
					disabled
				></dav-textarea>
			`
		},
		{
			title: "Textarea with error",
			template: `
				<dav-textarea
					value="Lorem ipsum dolor sit amet"
					label="Description"
					placeholder="The description of your book"
					errorMessage="Your description is too long"
				></dav-textarea>
			`
		}
	]
}
