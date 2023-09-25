module.exports = {
	name: "TreeItem",
	properties: [
		{
			name: "headline",
			type: "String"
		},
		{
			name: "node",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "open",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default TreeItem",
			template: `
				<dav-tree-item
					headline="Hello World"
				></dav-tree-item>
			`
		}
	]
}
