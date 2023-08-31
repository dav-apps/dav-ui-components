module.exports = {
	name: "Sidenav",
	examples: [
		{
			title: "Sidenav (inline)",
			controller: function (element) {
				let sidenavItems = element.getElementsByTagName("dav-sidenav-item")

				for (let sidenavItem of sidenavItems) {
					sidenavItem.addEventListener("click", () => {
						for (let item of sidenavItems) {
							item.active = false
						}

						sidenavItem.active = true
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
		},
		{
			title: "Sidenav (over)",
			controller: function (element) {
				let sidenav = element.getElementsByTagName("dav-sidenav")[0]
				let sidenavItems = element.getElementsByTagName("dav-sidenav-item")
				let button = element.getElementsByTagName("dav-button")[0]

				sidenav.addEventListener("dismiss", () => {
					sidenav.open = false
				})

				for (let sidenavItem of sidenavItems) {
					sidenavItem.addEventListener("click", () => {
						for (let item of sidenavItems) {
							item.active = false
						}

						sidenavItem.active = true
					})
				}

				button.onclick = () => {
					sidenav.open = true
				}
			},
			template: `
				<dav-button>
					Open sidenav
				</dav-button>

				<dav-sidenav mode="over">
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
