module.exports = {
	name: "Header",
	examples: [
		{
			title: "Normal Header",
			template: `
				<dav-header
					backButtonVisible
					editButtonVisible
				>
					Hello World
				</dav-header>
			`
		},
		{
			title: "Small Header",
			template: `
				<dav-header
					size="small"
					backButtonVisible
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
					editButtonVisible
				>
					Hello World
				</dav-header>
			`
		}
	]
}
