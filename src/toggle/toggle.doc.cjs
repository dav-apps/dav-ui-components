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
				let timeoutRunning = false

				toggle.onclick = () => {
					if (timeoutRunning) return
					timeoutRunning = true

					toggle.checked = !toggle.checked

					setTimeout(() => {
						timeoutRunning = false
					}, 100)
				}
			},
			template: `<dav-toggle></dav-toggle>`
		}
	]
}
