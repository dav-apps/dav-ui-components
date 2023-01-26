module.exports = {
	name: 'NavigationBar',
	examples: [
		{
			title: 'Default NavigationBar',
			controller: function (element) {
				
			},
			template: `
            <dav-navigation-bar>
               <dav-navigation-bar-item id="item1" active="true">Item 1</dav-navigation-bar-item>
               <dav-navigation-bar-item id="item2">Item 2</dav-navigation-bar-item>
               <dav-navigation-bar-item id="item3">Item 3</dav-navigation-bar-item>
            </dav-navigation-bar>
         `
		}
	]
}
