module.exports = {
	name: "BottomSheet",
	examples: [
		{
			title: "Default BottomSheet",
			controller: function (element) {
				let button = element.getElementsByTagName("dav-button")[0]
				let bottomSheet = element.getElementsByTagName("dav-bottom-sheet")[0]

				button.onclick = () => {
					bottomSheet.visible = !bottomSheet.visible
				}

				bottomSheet.addEventListener("dismiss", () => {
					bottomSheet.visible = false
				})
			},
			template: `
				<dav-button>
					Open bottom sheet
				</dav-button>

				<dav-bottom-sheet>
					<h1>Hello World</h1>
				</dav-bottom-sheet>
			`
		}
	]
}