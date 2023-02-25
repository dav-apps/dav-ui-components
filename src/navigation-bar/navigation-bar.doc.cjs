module.exports = {
	name: "NavigationBar",
	examples: [
		{
			title: "Default NavigationBar",
			controller: function(element) {
				let navigationBar = element.getElementsByTagName(
					"dav-navigation-bar"
				)[0]
				let navigationBarItem1 = navigationBar.getElementsByTagName(
					"dav-navigation-bar-item"
				)[0]
				let navigationBarItem2 = navigationBar.getElementsByTagName(
					"dav-navigation-bar-item"
				)[1]
				let navigationBarItem3 = navigationBar.getElementsByTagName(
					"dav-navigation-bar-item"
				)[2]

				function setActiveItem(itemIndex) {
					navigationBarItem1.active = false
					navigationBarItem2.active = false
					navigationBarItem3.active = false

					if (itemIndex == 1) {
						navigationBarItem2.active = true
					} else if (itemIndex == 2) {
						navigationBarItem3.active = true
					} else {
						navigationBarItem1.active = true
					}
				}

				navigationBarItem1.onclick = () => setActiveItem(0)
				navigationBarItem2.onclick = () => setActiveItem(1)
				navigationBarItem3.onclick = () => setActiveItem(2)
			},
			template: `
				<dav-navigation-bar>
					<dav-navigation-bar-item id="item1" active="true">
						<i slot="icon" class="fa-solid fa-house"></i>
						<p slot="label">Label</p>
					</dav-navigation-bar-item>
					<dav-navigation-bar-item id="item2">
						<i slot="icon" class="fa-solid fa-image"></i>
						<p slot="label">Label</p>
					</dav-navigation-bar-item>
					<dav-navigation-bar-item id="item3">
						<i slot="icon" class="fa-solid fa-magnifying-glass"></i>
						<p slot="label">Label</p>
					</dav-navigation-bar-item>
				</dav-navigation-bar>
			`
		}
	]
}
