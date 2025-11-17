module.exports = {
	name: "SearchTextfield",
	examples: [
		{
			title: "Default SearchTextfield",
			controller: function (element) {
				const searchResults = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"]

				element.style.height = "200px"
				const searchTextfield = element.getElementsByTagName("dav-search-textfield")[0]
				searchTextfield.searchResults = searchResults

				searchTextfield.addEventListener("change", (event) => {
					const value = event.detail.value

					if (value.length === 0) {
						searchTextfield.searchResults = searchResults
						return
					}

					const filteredResults = searchResults.filter((item) =>
						item.toLowerCase().includes(value.toLowerCase())
					)

					searchTextfield.searchResults = filteredResults
				})

				searchTextfield.addEventListener("select", (event) => {
					searchTextfield.value = event.detail.result
					searchTextfield.searchResults = []
				})
			},
			template: `
				<dav-search-textfield></dav-search-textfield>
			`
		}
	]
}
