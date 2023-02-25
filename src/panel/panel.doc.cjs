module.exports = {
	name: "Panel",
	examples: [
		{
			title: "Default Panel",
			controller: function(element) {
				let button = element.getElementsByTagName("dav-button")[0]
				let panel = element.getElementsByTagName("dav-panel")[0]

				button.onclick = () => {
					panel.visible = true
				}

				panel.addEventListener("dismiss", () => {
					panel.visible = false
				})
			},
			template: `
				<dav-button>
					Open panel
				</dav-button>

				<dav-panel header="Hello World">
				</dav-panel>
			`
		}
	]
}
