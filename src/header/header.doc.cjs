module.exports = {
	name: "Header",
	examples: [
		{
			title: "Normal Header",
			template: `
				<dav-header
					header="Hello World"
					backButtonVisible
					editButtonVisible
				></dav-header>
			`
		},
		{
			title: "Small Header",
			template: `
				<dav-header
					header="Hello World"
					size="small"
					backButtonVisible
					editButtonVisible
				></dav-header>
			`
		},
		{
			title: "Large Header",
			template: `
				<dav-header
					header="Hello World"
					size="large"
					backButtonVisible
					editButtonVisible
				></dav-header>
			`
		}
	]
}
