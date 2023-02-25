module.exports = {
	name: "BottomSheet",
	examples: [
		{
			title: "Default BottomSheet",
			controller: function(element) {
				const touchStart = "touchstart"
				const touchMove = "touchmove"
				const touchEnd = "touchend"

				let touchStartY = 0
				let touchDiffY = 0
				let swipeStart = false
				let startPosition = 0

				let openButton = document.getElementById("open-button")
				let openNonDismissableButton = document.getElementById(
					"open-non-dismissable-button"
				)
				let closeButton = document.getElementById("close-button")
				let bottomSheet = document.getElementsByTagName(
					"dav-bottom-sheet"
				)[0]

				openButton.onclick = () => {
					bottomSheet.dismissable = true
					bottomSheet.visible = true
				}

				openNonDismissableButton.onclick = () => {
					bottomSheet.dismissable = false
					bottomSheet.visible = true
				}

				closeButton.onclick = () => {
					bottomSheet.visible = false
				}

				bottomSheet.addEventListener("dismiss", () => {
					bottomSheet.visible = false
				})

				bottomSheet.addEventListener(touchStart, handleTouch)
				bottomSheet.addEventListener(touchMove, handleTouch)
				bottomSheet.addEventListener(touchEnd, handleTouch)

				function handleTouch(event) {
					if (event.touches.length > 1) return

					if (event.type == touchStart) {
						touchStartY = event.touches.item(0).screenY
						swipeStart = true
						bottomSheet.animatePosition = false
					} else if (event.type == touchMove) {
						touchDiffY = touchStartY - event.touches.item(0).screenY

						if (swipeStart) {
							startPosition = bottomSheet.position
							swipeStart = false
						}

						bottomSheet.position = touchDiffY + startPosition
					} else if (event.type == touchEnd) {
						touchStartY = 0
						touchDiffY = 0
						startPosition = 0
						bottomSheet.animatePosition = true
					}
				}
			},
			template: `
				<dav-button id="open-button">
					Open bottom sheet
				</dav-button>

				<dav-button id="open-non-dismissable-button" style="margin-top: 24px">
					Open non-dismissable bottom sheet
				</dav-button>

				<dav-bottom-sheet position="100">
					<h1>Hello World</h1>
					<dav-button
						id="close-button"
						style="margin-bottom: 24px"
						size="small"
					>Hide</dav-button>
				</dav-bottom-sheet>
			`
		}
	]
}
