module.exports = {
	name: 'IconButton',
	properties: [
		{
			name: "selected",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: 'Default Button',
			controller: function (element) {
				let iconButton = element.getElementsByTagName("dav-icon-button")[0]

				element.onclick = () => {
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
