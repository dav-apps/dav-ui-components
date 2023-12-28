module.exports = {
	projects: [
		{
			engine: "vanilla",
			collectDocsFrom: "./src"
		}
	],
	colorScheme: {
		onChange: function (scheme) {
			window.davUIComponents.setTheme(scheme)
		}
	},
	scripts: [
		{ src: "./src/doc.importmap.js", type: "importmap", inline: true },
		{ src: "./dist/index.js", type: "module" }
	],
	styles: [
		"./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css",
		"./node_modules/@fortawesome/fontawesome-free/css/all.min.css"
	],
	custom: {
		favicon: {
			filepath: "./assets/favicon.ico"
		},
		logo: {
			filepath: "./assets/dav-logo.png",
			darkVersionFilepath: "./external/assets/dav-logo-white.png",
			width: "125px",
			height: "50px"
		},
		windowTitle: "dav Components"
	},
	other: [
		"./assets/favicon.ico",
		"./assets/dav-logo.png",
		"./assets/dav-logo-white.png",
		"./dist/index.js",
		"./dist/assets/svg/arrow-left-light.js",
		"./dist/assets/svg/chevron-down-light.js",
		"./dist/assets/svg/circle-check-light.js",
		"./dist/assets/svg/circle-exclamation-light.js",
		"./dist/assets/svg/circle-info-light.js",
		"./dist/assets/svg/magnifying-glass-light.js",
		"./dist/assets/svg/pen-light.js",
		"./dist/assets/svg/plus-light.js",
		"./dist/assets/svg/xmark-light.js",
		"./dist/src/locale.js",
		"./dist/src/styles.js",
		"./dist/src/types.js",
		"./dist/src/utils.js",
		"./dist/src/badge/badge.js",
		"./dist/src/badge/badge.styles.js",
		"./dist/src/blurhash-image/blurhash-image.js",
		"./dist/src/blurhash-image/blurhash-image.styles.js",
		"./dist/src/blurhash-image/blurhash-image-cache.js",
		"./dist/src/bottom-sheet/bottom-sheet.js",
		"./dist/src/bottom-sheet/bottom-sheet.styles.js",
		"./dist/src/bottom-sheet/bottom-sheet.animations.js",
		"./dist/src/button/button.js",
		"./dist/src/button/button.styles.js",
		"./dist/src/card/card.js",
		"./dist/src/card/card.styles.js",
		"./dist/src/checkbox/checkbox.js",
		"./dist/src/checkbox/checkbox.styles.js",
		"./dist/src/context-menu/context-menu.js",
		"./dist/src/context-menu/context-menu.animations.js",
		"./dist/src/context-menu/context-menu.styles.js",
		"./dist/src/context-menu-divider/context-menu-divider.js",
		"./dist/src/context-menu-divider/context-menu-divider.styles.js",
		"./dist/src/context-menu-item/context-menu-item.js",
		"./dist/src/context-menu-item/context-menu-item.styles.js",
		"./dist/src/dialog/dialog.js",
		"./dist/src/dialog/dialog.animations.js",
		"./dist/src/dialog/dialog.styles.js",
		"./dist/src/dropdown/dropdown.js",
		"./dist/src/dropdown/dropdown.styles.js",
		"./dist/src/header/header.js",
		"./dist/src/header/header.styles.js",
		"./dist/src/icon-button/icon-button.js",
		"./dist/src/icon-button/icon-button.styles.js",
		"./dist/src/icon-card/icon-card.js",
		"./dist/src/icon-card/icon-card.styles.js",
		"./dist/src/icon-text-button/icon-text-button.js",
		"./dist/src/icon-text-button/icon-text-button.styles.js",
		"./dist/src/link-button/link-button.js",
		"./dist/src/link-button/link-button.styles.js",
		"./dist/src/list/list.js",
		"./dist/src/list/list.styles.js",
		"./dist/src/list-item/list-item.js",
		"./dist/src/list-item/list-item.styles.js",
		"./dist/src/message-bar/message-bar.js",
		"./dist/src/message-bar/message-bar.styles.js",
		"./dist/src/navigation-bar/navigation-bar.js",
		"./dist/src/navigation-bar/navigation-bar.styles.js",
		"./dist/src/navigation-bar-item/navigation-bar-item.js",
		"./dist/src/navigation-bar-item/navigation-bar-item.styles.js",
		"./dist/src/pagination/pagination.js",
		"./dist/src/pagination/pagination.styles.js",
		"./dist/src/panel/panel.js",
		"./dist/src/panel/panel.animations.js",
		"./dist/src/panel/panel.styles.js",
		"./dist/src/profile-card/profile-card.js",
		"./dist/src/profile-card/profile-card.styles.js",
		"./dist/src/progress-bar/progress-bar.js",
		"./dist/src/progress-bar/progress-bar.styles.js",
		"./dist/src/progress-ring/progress-ring.js",
		"./dist/src/progress-ring/progress-ring.styles.js",
		"./dist/src/search/search.js",
		"./dist/src/search/search.styles.js",
		"./dist/src/search/search.animations.js",
		"./dist/src/setting/setting.js",
		"./dist/src/setting/setting.styles.js",
		"./dist/src/sidenav/sidenav.js",
		"./dist/src/sidenav/sidenav.animations.js",
		"./dist/src/sidenav/sidenav.styles.js",
		"./dist/src/sidenav-item/sidenav-item.js",
		"./dist/src/sidenav-item/sidenav-item.styles.js",
		"./dist/src/tab-bar/tab-bar.js",
		"./dist/src/tab-bar/tab-bar.styles.js",
		"./dist/src/tab-bar-item/tab-bar-item.js",
		"./dist/src/tab-bar-item/tab-bar-item.styles.js",
		"./dist/src/textarea/textarea.js",
		"./dist/src/textarea/textarea.styles.js",
		"./dist/src/textfield/textfield.js",
		"./dist/src/textfield/textfield.styles.js",
		"./dist/src/toggle/toggle.js",
		"./dist/src/toggle/toggle.styles.js",
		"./dist/src/tree/tree.js",
		"./dist/src/tree/tree.styles.js",
		"./dist/src/tree-item/tree-item.js",
		"./dist/src/tree-item/tree-item.styles.js",
		"./dist/src/tree-item/tree-item.animations.js",
		"./node_modules/@lit/reactive-element/reactive-element.js",
		"./node_modules/@lit/reactive-element/reactive-element.js.map",
		"./node_modules/@lit/reactive-element/css-tag.js",
		"./node_modules/@lit/reactive-element/css-tag.js.map",
		"./node_modules/@lit/reactive-element/decorators/base.js",
		"./node_modules/@lit/reactive-element/decorators/base.js.map",
		"./node_modules/@lit/reactive-element/decorators/custom-element.js",
		"./node_modules/@lit/reactive-element/decorators/custom-element.js.map",
		"./node_modules/@lit/reactive-element/decorators/property.js",
		"./node_modules/@lit/reactive-element/decorators/property.js.map",
		"./node_modules/@lit/reactive-element/decorators/state.js",
		"./node_modules/@lit/reactive-element/decorators/state.js.map",
		"./node_modules/@lit/reactive-element/decorators/event-options.js",
		"./node_modules/@lit/reactive-element/decorators/event-options.js.map",
		"./node_modules/@lit/reactive-element/decorators/query.js",
		"./node_modules/@lit/reactive-element/decorators/query.js.map",
		"./node_modules/@lit/reactive-element/decorators/query-all.js",
		"./node_modules/@lit/reactive-element/decorators/query-all.js.map",
		"./node_modules/@lit/reactive-element/decorators/query-async.js",
		"./node_modules/@lit/reactive-element/decorators/query-async.js.map",
		"./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js",
		"./node_modules/@lit/reactive-element/decorators/query-assigned-elements.js.map",
		"./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js",
		"./node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js.map",
		"./node_modules/lit/index.js",
		"./node_modules/lit/index.js.map",
		"./node_modules/lit/decorators.js",
		"./node_modules/lit/decorators.js.map",
		"./node_modules/lit/decorators/query.js",
		"./node_modules/lit/decorators/query.js.map",
		"./node_modules/lit/directives/class-map.js",
		"./node_modules/lit/directives/class-map.js.map",
		"./node_modules/lit/directives/if-defined.js",
		"./node_modules/lit/directives/if-defined.js.map",
		"./node_modules/lit/directives/style-map.js",
		"./node_modules/lit/directives/style-map.js.map",
		"./node_modules/lit-html/lit-html.js",
		"./node_modules/lit-html/lit-html.js.map",
		"./node_modules/lit-html/is-server.js",
		"./node_modules/lit-html/is-server.js.map",
		"./node_modules/lit-html/directive.js",
		"./node_modules/lit-html/directive.js.map",
		"./node_modules/lit-html/directives/class-map.js",
		"./node_modules/lit-html/directives/class-map.js.map",
		"./node_modules/lit-html/directives/if-defined.js",
		"./node_modules/lit-html/directives/if-defined.js.map",
		"./node_modules/lit-html/directives/style-map.js",
		"./node_modules/lit-html/directives/style-map.js.map",
		"./node_modules/lit-element/lit-element.js",
		"./node_modules/lit-element/lit-element.js.map",
		"./node_modules/autosize/dist/autosize.esm.js",
		"./node_modules/blurhash/dist/esm/index.js",
		"./node_modules/@fortawesome/fontawesome-free/webfonts/"
	],
	outputDirectory: "./docs"
}
