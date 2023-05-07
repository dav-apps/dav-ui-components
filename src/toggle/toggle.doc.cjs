module.exports = {
	name: "Toggle",
	properties: [
		{
			name: "checked",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default Toggle",
			controller: function(element) {
				let toggle = element.getElementsByTagName("dav-toggle")[0]

				toggle.addEventListener("change", event => {
					toggle.checked = !event.detail.checked
				})
			},
			template: `<dav-toggle></dav-toggle>`
		}
	]
}
