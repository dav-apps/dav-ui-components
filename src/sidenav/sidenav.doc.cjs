module.exports = {
	name: "Sidenav",
	examples: [
		{
			title: "Inline Sidenav",
			controller: function (element) {
				let sidenavItems = element.getElementsByTagName("dav-sidenav-item")

				for (let item of sidenavItems) {
					item.addEventListener("click", () => {
						for (let sidenavItem of sidenavItems) {
							sidenavItem.active = false
						}

						item.active = true
					})
				}
			},
			template: `
				<dav-sidenav>
					<dav-sidenav-item
						value="Startseite"
					></dav-sidenav-item>

					<dav-sidenav-item
						value="Abenteuer"
						active
					></dav-sidenav-item>

					<dav-sidenav-item
						value="Fiktion"
					></dav-sidenav-item>

					<dav-sidenav-item
						value="Sachbücher"
					></dav-sidenav-item>

					<dav-sidenav-item
						value="Poesie"
					></dav-sidenav-item>
				</dav-sidenav>
			`
		}
	]
}
