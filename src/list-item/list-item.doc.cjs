module.exports = {
	name: "ListItem",
	properties: [
		{
			name: "imageSrc",
			type: "String"
		},
		{
			name: "imageFallbackSrc",
			type: "String"
		},
		{
			name: "imageBlurhash",
			type: "String"
		},
		{
			name: "imageAspectRatio",
			type: "String"
		},
		{
			name: "imageTitle",
			type: "String"
		},
		{
			name: "imageAlt",
			type: "String"
		},
		{
			name: "imageRounded",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "headline",
			type: "String"
		},
		{
			name: "subhead",
			type: "String"
		},
		{
			name: "size",
			type: "String",
			values: `"sm", "md"`
		},
		{
			name: "closeButtonVisible",
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
			title: "Default ListItem",
			template: `
				<dav-list-item
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/6366cd03-8cd7-4904-974c-e65ee02800e6"
					imageAspectRatio="1:1.5"
					headline="Dombey and Son"
					subhead="Charles Dickens"
				></dav-list-item>
			`
		},
		{
			title: "Small ListItem",
			template: `
				<dav-list-item
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/99a5fa11-786b-4d32-9154-4478f6b27a9f"
					headline="Victor Hugo"
					imageTitle="Victor Hugo"
					size="sm"
				></dav-list-item>
			`
		},
		{
			title: "Large ListItem",
			template: `
				<dav-list-item
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/99a5fa11-786b-4d32-9154-4478f6b27a9f"
					headline="Victor Hugo"
					imageTitle="Victor Hugo"
					size="lg"
				></dav-list-item>
			`
		},
		{
			title: "ListItem with rounded image",
			template: `
				<dav-list-item
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/99a5fa11-786b-4d32-9154-4478f6b27a9f"
					headline="Victor Hugo"
					imageTitle="Victor Hugo"
					imageRounded
				></dav-list-item>
			`
		},
		{
			title: "Small ListItem with close button",
			controller: function (element) {
				let listItem = element.getElementsByTagName("dav-list-item")[0]

				listItem.addEventListener("click", () => {
					console.log("ListItem click")
				})

				listItem.addEventListener("closeButtonClick", () => {
					console.log("Close button click")
				})
			},
			template: `
				<dav-list-item
					headline="Victor Hugo"
					imageTitle="Victor Hugo"
					size="sm"
					closeButtonVisible
				></dav-list-item>
			`
		},
	]
}
