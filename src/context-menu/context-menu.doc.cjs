module.exports = {
	name: "ContextMenu",
	properties: [
		{
			name: "visible",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "posX",
			type: "Number"
		},
		{
			name: "posY",
			type: "Number"
		}
	],
	examples: [
		{
			title: "Default ContextMenu",
			controller: function (element) {
				let div = element.getElementsByTagName("div")[0]
				let contextMenu = element.getElementsByTagName("dav-context-menu")[0]

				div.addEventListener("contextmenu", (event) => {
					event.preventDefault()

					contextMenu.posX = event.pageX
					contextMenu.posY = event.pageY
					contextMenu.visible = true
				})
			},
			template: `
				<div style="display: flex; justify-content: center; align-items: center; width: 300px; height: 100px; background-color: gray; color: white; border-radius: 4px">
					<p>Right-click me</p>
				</div>

				<dav-context-menu>
					<dav-context-menu-item value="Export">
						<i slot="icon" class="fa-solid fa-file-export"></i>
					</dav-context-menu-item>

					<dav-context-menu-divider></dav-context-menu-divider>

					<dav-context-menu-item value="Rename">
						<i slot="icon" class="fa-solid fa-pen"></i>
					</dav-context-menu-item>
					<dav-context-menu-item value="Remove">
						<i slot="icon" class="fa-solid fa-trash-can"></i>
					</dav-context-menu-item>
				</dav-context-menu>
			`
		}
	]
}