module.exports = {
	name: "TabBar",
	properties: [
		{
			name: "scrollable",
			type: "Boolean",
			values: "true / false",
			description: "Allow horizontal scrolling when the tabs exceed the available width."
		}
	],
	examples: [
		{
			title: "Default TabBar",
			controller: function(element) {
				let tabBar = element.getElementsByTagName("dav-tab-bar")[0]
				let tabBarItem1 = tabBar.getElementsByTagName("dav-tab-bar-item")[0]
				let tabBarItem2 = tabBar.getElementsByTagName("dav-tab-bar-item")[1]
				let tabBarItem3 = tabBar.getElementsByTagName("dav-tab-bar-item")[2]

				function setActiveItem(itemIndex) {
					tabBarItem1.active = false
					tabBarItem2.active = false
					tabBarItem3.active = false

					if (itemIndex == 1) {
						tabBarItem2.active = true
					} else if (itemIndex == 2) {
						tabBarItem3.active = true
					} else {
						tabBarItem1.active = true
					}
				}

				tabBarItem1.onclick = () => setActiveItem(0)
				tabBarItem2.onclick = () => setActiveItem(1)
				tabBarItem3.onclick = () => setActiveItem(2)
			},
			template: `
            <dav-tab-bar>
               <dav-tab-bar-item id="item1" active="true">Item 1</dav-tab-bar-item>
               <dav-tab-bar-item id="item2">Item 2</dav-tab-bar-item>
               <dav-tab-bar-item id="item3">Item 3</dav-tab-bar-item>
            </dav-tab-bar>
         `
		},
		{
			title: "Scrollable TabBar",
			controller: function (element) {
				const tabs = element.querySelectorAll("dav-tab-bar-item")

				for (const tab of tabs) {
					tab.onclick = () => {
						for (const item of tabs) item.active = item === tab
					}
				}
			},
			template: `
				<div style="width: 240px">
					<dav-tab-bar scrollable>
						<dav-tab-bar-item active>Overview</dav-tab-bar-item>
						<dav-tab-bar-item>Availability</dav-tab-bar-item>
						<dav-tab-bar-item>Settings</dav-tab-bar-item>
					</dav-tab-bar>
				</div>
			`
		}
	]
}
