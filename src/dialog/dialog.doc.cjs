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
			name: "primaryButtonColor",
			type: "String",
			values: `"primary", "secondary", "tertiary", "error"`
		},
		{
			name: "primaryButtonDisabled",
			type: "Boolean",
			values: "true / false"
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
		},
		{
			name: "contentHeight",
			type: "String",
			description: "CSS height for independently scrolling content. Use the content-height attribute in HTML. Place a tab bar or other fixed header content in the header slot."
		},
		{
			name: "hideBehindOverlay",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "child",
			type: "Boolean",
			values: "true / false"
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
			title: "Tabs with and without a fixed content height",
			controller: function (element) {
				const dialog = element.querySelector("dav-dialog")
				const tabs = dialog.querySelectorAll("[data-tab]")
				const panels = dialog.querySelectorAll("[data-panel]")
				const close = () => (dialog.visible = false)

				function selectTab(name) {
					for (const tab of tabs) tab.active = tab.dataset.tab === name
					for (const panel of panels)
						panel.hidden = panel.dataset.panel !== name
				}

				for (const tab of tabs) {
					tab.onclick = () => selectTab(tab.dataset.tab)
				}

				for (const button of element.querySelectorAll("[data-height]")) {
					button.onclick = () => {
						dialog.contentHeight = button.dataset.height
						selectTab("summary")
						dialog.visible = true
					}
				}
				dialog.addEventListener("dismiss", close)
				dialog.addEventListener("defaultButtonClick", close)
			},
			template: `
				<p>Open either version, switch between Summary and Items, and scroll through the list.</p>
				<dav-button data-height="">Open with automatic height</dav-button>
				<dav-button data-height="clamp(120px, 40dvh, 280px)">Open with fixed content height</dav-button>

				<dav-dialog headline="Offer details" defaultButtonText="Close">
					<dav-tab-bar slot="header" scrollable>
						<dav-tab-bar-item data-tab="summary" active>Summary</dav-tab-bar-item>
						<dav-tab-bar-item data-tab="items">Items</dav-tab-bar-item>
					</dav-tab-bar>

					<section data-panel="summary">
						<p>Lunch menu with 18 items to choose from.</p>
					</section>

					<section data-panel="items" hidden>
						<ol>
							${Array.from({ length: 18 }, (_, i) => `<li>Menu item ${i + 1}</li>`).join("")}
						</ol>
					</section>
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
