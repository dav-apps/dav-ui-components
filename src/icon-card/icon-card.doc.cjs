module.exports = {
	name: "IconCard",
	properties: [
		{
			name: "text",
			type: "String"
		},
		{
			name: "href",
			type: "String"
		},
		{
			name: "target",
			type: "String"
		}
	],
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
			title: "IconCard with image and text",
			template: `
				<dav-icon-card text="Tagesschau">
					<img src="https://www.tagesschau.de/resources/assets/image/favicon/apple-icon-152x152.png" />
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
