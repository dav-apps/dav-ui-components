module.exports = {
	name: "Header",
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
