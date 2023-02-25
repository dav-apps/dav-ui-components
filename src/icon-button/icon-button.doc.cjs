module.exports = {
	name: "IconButton",
	properties: [
		{
			name: "selected",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default IconButton",
			controller: function(element) {
				let iconButton = element.getElementsByTagName("dav-icon-button")[0]

				iconButton.onclick = () => {
					iconButton.selected = !iconButton.selected
				}
			},
			template: `
				<dav-icon-button>
					<i class="fa-solid fa-magnifying-glass"></i>
				</dav-icon-button>
			`
		}
	]
}
