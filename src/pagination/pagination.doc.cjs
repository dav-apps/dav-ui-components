module.exports = {
	name: "Pagination",
	properties: [
		{
			name: "pages",
			type: "Number"
		},
		{
			name: "currentPage",
			type: "Number"
		}
	],
	examples: [
		{
			title: "Default Pagination",
			controller: function(element) {
				let pagination = document.getElementsByTagName("dav-pagination")[0]

				pagination.addEventListener("pageChange", event => {
					let page = event.detail.page
					pagination.currentPage = page
				})
			},
			template: `
				<dav-pagination
					pages="6"
					currentPage="3">
				</dav-pagination>
			`
		}
	]
}
