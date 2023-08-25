module.exports = {
	name: "Dialog",
	properties: [
		{
			name: "headline",
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
				let openButton = element.getElementsByTagName("dav-button")[0]
				let dialog = element.getElementsByTagName("dav-dialog")[0]

				openButton.onclick = () => {
					dialog.visible = true
				}

				dialog.addEventListener("dismiss", () => {
					dialog.visible = false
				})

				dialog.addEventListener("primaryButtonClick", () => {
					dialog.loading = true

					setTimeout(() => {
						dialog.visible = false
						dialog.loading = false
					}, 2000)
				})

				dialog.addEventListener("defaultButtonClick", () => {
					dialog.visible = false
				})
			},
			template: `
				<dav-button>
					Open dialog
				</dav-button>

				<dav-dialog
					headline="Hello World"
					primaryButtonText="Save"
					defaultButtonText="Close"
				>
					<p>This is a dialog</p>
				</dav-dialog>
			`
		},
		{
			title: "Dialog with error button",
			controller: function (element) {
				let openButton = element.getElementsByTagName("dav-button")[0]
				let dialog = element.getElementsByTagName("dav-dialog")[0]

				openButton.onclick = () => {
					dialog.visible = true
				}

				dialog.addEventListener("dismiss", () => {
					dialog.visible = false
				})

				dialog.addEventListener("primaryButtonClick", () => {
					dialog.loading = true

					setTimeout(() => {
						dialog.visible = false

						setTimeout(() => {
							dialog.loading = false
						}, 400)
					}, 2000)
				})

				dialog.addEventListener("defaultButtonClick", () => {
					dialog.visible = false
				})
			},
			template: `
				<dav-button>
					Open dialog
				</dav-button>

				<dav-dialog
					headline="Log out?"
					primaryButtonText="Log out"
					primaryButtonColor="error"
					defaultButtonText="Cancel"
				>
					<p>All your local data will be removed.</p>
				</dav-dialog>
			`
		}
	]
}
