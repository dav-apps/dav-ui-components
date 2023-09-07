module.exports = {
	name: "IconCard",
	examples: [
		{
			title: "Default IconCard",
			template: `
				<dav-icon-card>
					<i class="fa-solid fa-magnifying-glass"></i>
				</dav-icon-card>
			`
		},
		{
			title: "IconCard with text",
			template: `
				<dav-icon-card text="Hello World">
					<i class="fa-solid fa-magnifying-glass"></i>
				</dav-icon-card>
			`
		},
		{
			title: "IconCard with link",
			template: `
				<dav-icon-card
					text="Hello World"
					href="https://dav-apps.tech"
					target="blank"
				>
					<i class="fa-solid fa-magnifying-glass"></i>
				</dav-icon-card>
			`
		}
	]
}
