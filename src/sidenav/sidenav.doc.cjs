module.exports = {
	name: "Sidenav",
	properties: [
		{
			name: "mode",
			type: "String",
			values: `"side", "top", "over"`
		},
		{
			name: "open",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Sidenav (inline) with subitems",
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
				<p>Use node to enable subitems and open to expand them initially.
					Click the arrow or double-click the label to expand or collapse.</p>
				<dav-sidenav>
					<dav-sidenav-item
						value="Startseite"
					></dav-sidenav-item>

					<dav-sidenav-item value="Bücher" node open>
						<dav-sidenav-item
							value="Abenteuer"
							active
						></dav-sidenav-item>

						<dav-sidenav-item value="Fiktion" node>
							<dav-sidenav-item value="Fantasy"></dav-sidenav-item>
							<dav-sidenav-item value="Science-Fiction"></dav-sidenav-item>
						</dav-sidenav-item>

						<dav-sidenav-item
							value="Sachbücher"
							disabled
						></dav-sidenav-item>
					</dav-sidenav-item>

					<dav-sidenav-item
						value="Poesie"
					></dav-sidenav-item>
				</dav-sidenav>
			`
		},
		{
			title: "Sidenav (over) with subitems",
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
				<p>Use node to enable subitems and open to expand them initially.
					Click the arrow or double-click the label to expand or collapse.</p>
				<dav-button>
					Open sidenav
				</dav-button>

				<dav-sidenav mode="over">
					<dav-sidenav-item
						value="Startseite"
					></dav-sidenav-item>

					<dav-sidenav-item value="Bücher" node open>
						<dav-sidenav-item
							value="Abenteuer"
							active
						></dav-sidenav-item>

						<dav-sidenav-item value="Fiktion" node>
							<dav-sidenav-item value="Fantasy"></dav-sidenav-item>
							<dav-sidenav-item value="Science-Fiction"></dav-sidenav-item>
						</dav-sidenav-item>

						<dav-sidenav-item
							value="Sachbücher"
							disabled
						></dav-sidenav-item>
					</dav-sidenav-item>

					<dav-sidenav-item
						value="Poesie"
					></dav-sidenav-item>
				</dav-sidenav>
			`
		}
	]
}
