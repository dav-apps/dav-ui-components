module.exports = {
	name: "BlurhashImage",
	properties: [
		{
			name: "src",
			type: "String",
			required: true
		},
		{
			name: "width",
			type: "Number"
		},
		{
			name: "height",
			type: "Number"
		},
		{
			name: "fallbackSrc",
			type: "String"
		},
		{
			name: "blurhash",
			type: "String"
		},
		{
			name: "aspectRatio",
			type: "String"
		},
		{
			name: "loading",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "title",
			type: "String"
		},
		{
			name: "alt",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default BlurhashImage",
			template: `
				<dav-blurhash-image
					src="https://dav-backend.fra1.cdn.digitaloceanspaces.com/fde9bba0-962c-467b-9ae2-8f4e1b8ae69e"
					blurhash="LLD9O_IVRjR+~oIVkCa#?bM{M{s:"
					title="The Secret of Father Brown"
					width="127"
					height="190"
				></dav-blurhash-image>
			`
		}
	]
}
