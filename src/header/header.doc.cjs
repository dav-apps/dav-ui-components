module.exports = {
	name: "Header",
	properties: [
		{
			name: "alignment",
			type: "String",
			values: `"start", "center", "end"`
		},
		{
			name: "backButtonVisible",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "addButtonVisible",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "editButtonVisible",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "size",
			type: "String",
			values: `"small", "normal", "large"`
		}
	],
	examples: [
		{
			title: "Small Header",
			template: `
				<dav-header
					size="small"
					backButtonVisible
					addButtonVisible
					editButtonVisible
				>
					Hello World
				</dav-header>
			`
		},
		{
			title: "Normal Header",
			template: `
				<dav-header
					backButtonVisible
					addButtonVisible
					editButtonVisible
				>
					Hello World
				</dav-header>
			`
		},
		{
			title: "Large Header",
			template: `
				<dav-header
					size="large"
					backButtonVisible
					addButtonVisible
					editButtonVisible
				>
					Hello World
				</dav-header>
			`
		}
	]
}
