module.exports = {
	name: "Toggle",
	properties: [
		{
			name: "label",
			type: "String"
		},
		{
			name: "checked",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "disabled",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default Toggle",
			template: `<dav-toggle></dav-toggle>`
		},
		{
			title: "Toggle with label",
			template: `<dav-toggle label="Hello World"></dav-toggle>`
		},
		{
			title: "Disabled Toggle with label",
			template: `
				<div style="display: flex; flex-direction: column; gap: 8px;">
					<dav-toggle
						label="Hello World"
						disabled
					></dav-toggle>

					<dav-toggle
						label="Hello World"
						checked
						disabled
					></dav-toggle>
				</div>
			`
		}
	]
}
