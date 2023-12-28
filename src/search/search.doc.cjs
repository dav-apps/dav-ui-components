module.exports = {
	name: "Search",
	examples: [{
		title: "Default Search",
		controller: function (element) {
			let openButton = element.getElementsByTagName("dav-button")[0]
			let search = element.getElementsByTagName("dav-search")[0]

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
				}, 2000)
			})
		},
		template: `
			<dav-button>
				Open search
			</dav-button>

			<dav-search
				placeholder="Search for..."
			></dav-search>
		`
	}]
}
