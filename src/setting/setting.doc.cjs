module.exports = {
	name: 'Setting',
	properties: [
		{
			name: "header",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default Setting",
			controller: function (element) {
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
			template: `
				<dav-setting header="Hello World">
					<dav-toggle></dav-toggle>
				</dav-setting>
			`
		}
	]
}