module.exports = {
	name: "SearchTextfield",
	properties: [
		{
			name: "value",
			type: "String"
		},
		{
			name: "label",
			type: "String"
		},
		{
			name: "searchResults",
			type: "Array<{ key: string, value: string }>"
		}
	],
	examples: [
		{
			title: "Default SearchTextfield",
			controller: function (element) {
				const searchResults = [
					{
						key: "apple",
						value: "Apple"
					},
					{
						key: "banana",
						value: "Banana"
					},
					{
						key: "cherry",
						value: "Cherry"
					},
					{
						key: "date",
						value: "Date"
					},
					{
						key: "elderberry",
						value: "Elderberry"
					},
					{
						key: "fig",
						value: "Fig"
					},
					{
						key: "grape",
						value: "Grape"
					}
				]

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
						item.value.toLowerCase().includes(value.toLowerCase())
					)

					searchTextfield.searchResults = filteredResults
				})

				searchTextfield.addEventListener("select", (event) => {
					searchTextfield.value = event.detail.result.value
					searchTextfield.searchResults = []
				})
			},
			template: `
				<dav-search-textfield></dav-search-textfield>
			`
		}
	]
}
