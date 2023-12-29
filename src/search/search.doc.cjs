module.exports = {
	name: "Search",
	examples: [{
		title: "Default Search",
		controller: function (element) {
			const sampleResultData = [
				{
					headline: "The Portrait of a Lady",
					subhead: "Henry James",
					imageSrc: "https://dav-backend.fra1.cdn.digitaloceanspaces.com/db95a259-6da1-4986-82f8-d1af6fc6d4f6",
					imageAspectRatio: "1:1.5"
				},
				{
					headline: "Dombey and Son",
					subhead: "Charles Dickens",
					imageSrc: "https://dav-backend.fra1.cdn.digitaloceanspaces.com/6366cd03-8cd7-4904-974c-e65ee02800e6",
					imageAspectRatio: "1:1.5"
				}
			]

			let openButton = element.getElementsByTagName("dav-button")[0]
			let search = element.getElementsByTagName("dav-search")[0]
			let list = element.getElementsByTagName("dav-list")[0]

			openButton.onclick = () => {
				search.visible = true
			}

			search.addEventListener("dismiss", () => {
				search.visible = false
			})

			search.addEventListener("change", (event) => {
				search.loading = true

				setTimeout(() => {
					search.loading = false

					if (list.children.length == 0) {
						// Show the sample data
						for (let item of sampleResultData) {
							let listItem = document.createElement("dav-list-item")

							listItem.headline = item.headline
							listItem.subhead = item.subhead
							listItem.imageSrc = item.imageSrc
							listItem.imageAspectRatio = item.imageAspectRatio

							list.append(listItem)
						}
					}
				}, 2000)
			})
		},
		template: `
			<dav-button>
				Open search
			</dav-button>

			<dav-search placeholder="Search for...">
				<dav-list></dav-list>
			</dav-search>
		`
	}]
}
