module.exports = {
	name: "ProfileCard",
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
			name: "name",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default ProfileCard",
			template: `
				<dav-profile-card
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/49a47350-4aa0-4be2-8e45-33f815bab768"
					imageBlurhash="LwMQ*I%M?bof~qWBayWBt7WBRjWB"
					name="Edward Payson Roe"
				></dav-profile-card>
			`
		},
		{
			title: "ProfileCard with link",
			template: `
				<dav-profile-card
					imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/49a47350-4aa0-4be2-8e45-33f815bab768"
					imageBlurhash="LwMQ*I%M?bof~qWBayWBt7WBRjWB"
					name="Edward Payson Roe"
					href="https://en.wikipedia.org/wiki/Edward_Payson_Roe"
					target="blank"
				></dav-profile-card>
			`
		}
	]
}
