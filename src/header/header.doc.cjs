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
		},
		{
			name: "loading",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Small Header",
			template: `
				<div style="display: flex; flex-direction: column; gap: 16px">
					<dav-header
						size="sm"
						backButtonVisible
						addButtonVisible
						editButtonVisible
						deleteButtonVisible
					>
						Hello World
					</dav-header>

					<dav-header
						size="sm"
						backButtonVisible
						addButtonVisible
						editButtonVisible
						deleteButtonVisible
						loading
					>
						Hello World
					</dav-header>
				</div>
			`
		},
		{
			title: "Normal Header",
			template: `
				<div style="display: flex; flex-direction: column; gap: 16px">
					<dav-header
						backButtonVisible
						addButtonVisible
						editButtonVisible
						deleteButtonVisible
					>
						Hello World
					</dav-header>

					<dav-header
						backButtonVisible
						addButtonVisible
						editButtonVisible
						deleteButtonVisible
						loading
					>
						Hello World
					</dav-header>
				</div>
			`
		},
		{
			title: "Large Header",
			template: `
				<div style="display: flex; flex-direction: column; gap: 16px">
					<dav-header
						size="lg"
						backButtonVisible
						addButtonVisible
						editButtonVisible
						deleteButtonVisible
					>
						Hello World
					</dav-header>

					<dav-header
						size="lg"
						backButtonVisible
						addButtonVisible
						editButtonVisible
						deleteButtonVisible
						loading
					>
						Hello World
					</dav-header>
				</div>
			`
		}
	]
}
