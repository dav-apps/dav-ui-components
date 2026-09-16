module.exports = {
	name: "SidenavItem",
	properties: [
		{ name: "value", type: "String" },
		{ name: "active", type: "Boolean", values: "true / false" },
		{ name: "disabled", type: "Boolean", values: "true / false" },
		{ name: "node", type: "Boolean", values: "true / false" },
		{ name: "open", type: "Boolean", values: "true / false" }
	],
	examples: [
		{
			title: "Default SidenavItem",
			template: `<dav-sidenav-item value="Startseite"></dav-sidenav-item>`
		},
		{
			title: "Active SidenavItem",
			template: `<dav-sidenav-item value="Startseite" active></dav-sidenav-item>`
		},
		{
			title: "Disabled SidenavItem",
			template: `<dav-sidenav-item value="Startseite" disabled></dav-sidenav-item>`
		},
		{
			title:
				"Nested SidenavItems (node enables children, open expands them initially)",
			controller: function(element) {
				const items = element.getElementsByTagName("dav-sidenav-item")
				for (const item of items) {
					item.addEventListener("click", () => {
						for (const other of items) other.active = false
						item.active = true
					})
				}
			},
			template: `
				<p>Click the arrow or double-click the label to expand or collapse.
					Click a label to select an item. Children use the default slot.</p>
				<dav-sidenav>
					<dav-sidenav-item value="Startseite"></dav-sidenav-item>
					<dav-sidenav-item value="Bücher" node open>
						<dav-sidenav-item value="Abenteuer" active></dav-sidenav-item>
						<dav-sidenav-item value="Fiktion" node>
							<dav-sidenav-item value="Fantasy"></dav-sidenav-item>
							<dav-sidenav-item value="Science-Fiction"></dav-sidenav-item>
						</dav-sidenav-item>
						<dav-sidenav-item value="Sachbücher" disabled></dav-sidenav-item>
					</dav-sidenav-item>
					<dav-sidenav-item value="Archiv" node disabled>
						<dav-sidenav-item value="2025"></dav-sidenav-item>
					</dav-sidenav-item>
				</dav-sidenav>
			`
		}
	]
}
