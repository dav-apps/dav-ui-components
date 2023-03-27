module.exports = {
	name: "List",
	examples: [
		{
			title: "Default List",
			template: `
				<dav-list>
					<dav-list-item
						imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/db95a259-6da1-4986-82f8-d1af6fc6d4f6"
						headline="The Portrait of a Lady"
						subhead="Henry James"
					></dav-list-item>

					<dav-list-item
						imageSrc="https://dav-backend.fra1.cdn.digitaloceanspaces.com/6366cd03-8cd7-4904-974c-e65ee02800e6"
						headline="Dombey and Son"
						subhead="Charles Dickens"
					></dav-list-item>
				</dav-list>
			`
		}
	]
}
