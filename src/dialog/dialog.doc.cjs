module.exports = {
	name: "Dialog",
	properties: [
		{
			name: "header",
			type: "String"
		},
		{
			name: "primaryButtonText",
			type: "String"
		},
		{
			name: "defaultButtonText",
			type: "String"
		},
		{
			name: "visible",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "loading",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "maxWidth",
			type: "Number"
		}
	],
	examples: [
		{
			title: "Default Dialog",
			controller: function (element) {
				let openButton = document.getElementById("open-button")
				let dialog = document.getElementsByTagName("dav-dialog")[0]

				openButton.onclick = () => {
					dialog.visible = true
				}

				dialog.addEventListener("dismiss", () => {
					dialog.visible = false
				})

				dialog.addEventListener("primaryButtonClick", () => {
					dialog.visible = false
				})
			},
			template: `
				<dav-button id="open-button">
					Open dialog
				</dav-button>

				<dav-dialog
					header="Hello World"
					primaryButtonText="Close"
				>
					<p>This is a dialog</p>
				</dav-dialog>
			`
		}
	]
}
