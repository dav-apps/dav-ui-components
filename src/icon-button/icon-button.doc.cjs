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
		},
		{
			title: "Small IconButton",
			controller: function(element) {
				let iconButton = element.getElementsByTagName("dav-icon-button")[0]

				iconButton.onclick = () => {
					iconButton.selected = !iconButton.selected
				}
			},
			template: `
				<dav-icon-button size="sm">
					<i class="fa-solid fa-magnifying-glass"></i>
				</dav-icon-button>
			`
		},
		{
			title: "IconButton with link",
			template: `
				<dav-icon-button href="https://dav-apps.tech" target="blank">
					<i class="fa-solid fa-globe"></i>
				</dav-icon-button>
			`
		},
		{
			title: "Small IconButton with link",
			template: `
				<dav-icon-button size="sm" href="https://dav-apps.tech" target="blank">
					<i class="fa-solid fa-globe"></i>
				</dav-icon-button>
			`
		},
		{
			title: "Disabled IconButton",
			template: `
				<dav-icon-button disabled>
					<i class="fa-solid fa-globe"></i>
				</dav-icon-button>
			`
		}
	]
}
