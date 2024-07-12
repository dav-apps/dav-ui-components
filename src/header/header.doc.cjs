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
			name: "deleteButtonVisible",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "size",
			type: "String",
			values: `"sm", "md", "lg"`
		}
	],
	examples: [
		{
			title: "Small Header",
			template: `
				<dav-header
					size="sm"
					backButtonVisible
					addButtonVisible
					editButtonVisible
					deleteButtonVisible
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
					deleteButtonVisible
				>
					Hello World
				</dav-header>
			`
		},
		{
			title: "Large Header",
			template: `
				<dav-header
					size="lg"
					backButtonVisible
					addButtonVisible
					editButtonVisible
					deleteButtonVisible
				>
					Hello World
				</dav-header>
			`
		}
	]
}
