module.exports = {
	name: "IconCard",
	properties: [
		{
			name: "size",
			type: "String",
			values: `"lg", "md", "sm"`
		},
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
				<div style="display: flex; flex-direction: column; gap: 8px;">
					<dav-icon-card size="sm">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>

					<dav-icon-card size="md">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>

					<dav-icon-card size="lg">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>
				</div>
			`
		},
		{
			title: "IconCard with text",
			template: `
				<div style="display: flex; flex-direction: column; gap: 8px;">
					<dav-icon-card text="Hello World" size="sm">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>

					<dav-icon-card text="Hello World" size="md">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>

					<dav-icon-card text="Hello World" size="lg">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>
				</div>
			`
		},
		{
			title: "IconCard with image and text",
			template: `
				<div style="display: flex; flex-direction: column; gap: 8px;">
					<dav-icon-card text="Tagesschau" size="sm">
						<img src="https://www.tagesschau.de/resources/assets/image/favicon/apple-icon-152x152.png" />
					</dav-icon-card>

					<dav-icon-card text="Tagesschau" size="md">
						<img src="https://www.tagesschau.de/resources/assets/image/favicon/apple-icon-152x152.png" />
					</dav-icon-card>

					<dav-icon-card text="Tagesschau" size="lg">
						<img src="https://www.tagesschau.de/resources/assets/image/favicon/apple-icon-152x152.png" />
					</dav-icon-card>
				</div>
			`
		},
		{
			title: "IconCard with link",
			template: `
				<div style="display: flex; flex-direction: column; gap: 8px;">
					<dav-icon-card
						text="Hello World"
						href="https://dav-apps.tech"
						target="blank"
						size="sm"
					>
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>

					<dav-icon-card
						text="Hello World"
						href="https://dav-apps.tech"
						target="blank"
						size="md"
					>
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>

					<dav-icon-card
						text="Hello World"
						href="https://dav-apps.tech"
						target="blank"
						size="lg"
					>
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-card>
				</div>
			`
		}
	]
}
