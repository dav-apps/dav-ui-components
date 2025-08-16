module.exports = {
	name: "Card",
	properties: [
		{
			name: "headline",
			type: "String"
		},
		{
			name: "subhead",
			type: "String"
		},
		{
			name: "imageSrc",
			type: "String"
		},
		{
			name: "altImageSrc",
			type: "String"
		},
		{
			name: "subheadImageSrc",
			type: "String"
		},
		{
			name: "orientation",
			type: "String",
			values: `"vertical", "horizontal"`
		},
		{
			name: "clickable",
			type: "Boolean",
			values: "true / false"
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
			title: "Card with headline and subhead",
			template: `
				<dav-card
					headline="A Daughter of the Samurai"
					subhead="by Etsu Inagaki Sugimoto"
					style="width: 220px"
				></dav-card>
			`
		},
		{
			title: "Card with image",
			template: `
				<dav-card
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/984ff5b9-adbf-4446-8d0f-9b766b6a1c1a?etag=d3e936db6342522f7f790b0e74575069"
					headline="Short Works"
					subhead="Epictetus"
					style="width: 220px"
				></dav-card>
			`
		},
		{
			title: "Card with image and subhead image",
			template: `
				<dav-card
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/984ff5b9-adbf-4446-8d0f-9b766b6a1c1a?etag=d3e936db6342522f7f790b0e74575069"
					headline="Short Works"
					subhead="Epictetus"
					subheadImageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/e89fddb7-947b-4896-96dc-837757076bf1"
					style="width: 220px"
				></dav-card>
			`
		},
		{
			title: "Horizontal card with image",
			template: `
				<dav-card
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/984ff5b9-adbf-4446-8d0f-9b766b6a1c1a?etag=d3e936db6342522f7f790b0e74575069"
					headline="Short Works"
					subhead="Epictetus"
					orientation="horizontal"
					style="width: 220px"
				></dav-card>
			`
		},
		{
			title: "Card with link",
			template: `
				<dav-card
					headline="A Daughter of the Samurai"
					subhead="by Etsu Inagaki Sugimoto"
					href="https://dav-apps.tech"
					target="_blank"
					style="width: 220px"
				></dav-card>
			`
		},
		{
			title: "Card with button",
			template: `
				<dav-card
					headline="A Daughter of the Samurai"
					subhead="by Etsu Inagaki Sugimoto"
					style="width: 220px"
				>
					<div>
						<dav-button size="sm">Buy now</dav-button>
					</div>
				</dav-card>
			`
		}
	]
}
