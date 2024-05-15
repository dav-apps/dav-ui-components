module.exports = {
	name: "BottomSheet",
	examples: [
		{
			title: "Default BottomSheet",
			controller: function (element) {
				const touchStart = "touchstart"
				const touchMove = "touchmove"
				const touchEnd = "touchend"

				let touchStartY = 0
				let touchDiffY = 0
				let swipeStart = false
				let startPosition = 0

				let openButton = element.getElementsByTagName("dav-button")[0]
				let openNonDismissableButton =
					element.getElementsByTagName("dav-button")[1]
				let closeButton = element.getElementsByTagName("dav-button")[2]
				let bottomSheet =
					element.getElementsByTagName("dav-bottom-sheet")[0]

				openButton.onclick = () => {
					bottomSheet.dismissable = true
					bottomSheet.snap("top")
				}

				openNonDismissableButton.onclick = () => {
					bottomSheet.dismissable = false
					bottomSheet.snap("top")
				}

				closeButton.onclick = () => {
					bottomSheet.hide()
				}

				bottomSheet.addEventListener("dismiss", () => {
					bottomSheet.hide()
				})

				bottomSheet.addEventListener(touchStart, handleTouch)
				bottomSheet.addEventListener(touchMove, handleTouch)
				bottomSheet.addEventListener(touchEnd, handleTouch)

				function handleTouch(event) {
					if (event.touches.length > 1) return

					if (event.type == touchStart) {
						touchStartY = event.touches.item(0).screenY
						swipeStart = true
					} else if (event.type == touchMove) {
						touchDiffY = touchStartY - event.touches.item(0).screenY

						if (swipeStart) {
							startPosition = bottomSheet.position
							swipeStart = false
						}

						bottomSheet.setPosition(touchDiffY + startPosition)
					} else if (event.type == touchEnd) {
						touchStartY = 0
						touchDiffY = 0
						startPosition = 0

						bottomSheet.snap()
					}
				}
			},
			template: `
				<div style="display: flex; gap: 12px">
					<dav-button>
						Open bottom sheet
					</dav-button>

					<dav-button>
						Open non-dismissable bottom sheet
					</dav-button>
				</div>

				<dav-bottom-sheet>
					<div style="display: flex; flex-direction: column; align-items: center">
						<h1>Hello World</h1>
						<dav-button
							style="margin-bottom: 24px"
							size="sm"
						>Hide</dav-button>
					</div>
				</dav-bottom-sheet>
			`
		}
	]
}
