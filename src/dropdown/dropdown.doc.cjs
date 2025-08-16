module.exports = {
	name: "Dropdown",
	properties: [
		{
			name: "label",
			type: "String"
		},
		{
			name: "options",
			type: "Array<{ key: string, value: string, type: 'option' | 'divider' | 'color' }>"
		},
		{
			name: "selectedKey",
			type: "String"
		},
		{
			name: "position",
			type: "String",
			values: `"top", "bottom"`
		},
		{
			name: "width",
			type: "Number"
		},
		{
			name: "disabled",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "compact",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Default Dropdown",
			controller: function (element) {
				element.style.height = "200px"
				let dropdown = element.getElementsByTagName("dav-dropdown")[0]

				dropdown.options = [
					{
						key: "system",
						value: "System default",
						type: "option"
					},
					{
						type: "divider"
					},
					{
						key: "light",
						value: "Light",
						type: "option"
					},
					{
						key: "dark",
						value: "Dark",
						type: "option"
					}
				]
			},
			template: `
				<dav-dropdown label="Theme"></dav-dropdown>
			`
		},
		{
			title: "Dropdown with position top",
			controller: function (element) {
				let dropdown = element.getElementsByTagName("dav-dropdown")[0]

				dropdown.options = [
					{
						key: "system",
						value: "System default",
						type: "option"
					},
					{
						type: "divider"
					},
					{
						key: "light",
						value: "Light",
						type: "option"
					},
					{
						key: "dark",
						value: "Dark",
						type: "option"
					}
				]
			},
			template: `
				<div style="margin-top: 100px;">
					<dav-dropdown
						label="Theme"
						position="top"
					></dav-dropdown>
				</div>
			`
		},
		{
			title: "Disabled Dropdown",
			template: `
				<dav-dropdown
					label="Theme"
					disabled
				></dav-dropdown>
			`
		},
		{
			title: "Color Dropdown",
			controller: function (element) {
				element.style.height = "200px"
				let dropdown = element.getElementsByTagName("dav-dropdown")[0]

				dropdown.options = [
					{
						key: "green",
						value: "#008000",
						type: "color"
					},
					{
						key: "red",
						value: "#ff0000",
						type: "color"
					},
					{
						key: "blue",
						value: "#0000ff",
						type: "color"
					}
				]
			},
			template: `
				<dav-dropdown label="Color" selectedKey="red"></dav-dropdown>
			`
		},
		{
			title: "Compact color Dropdown",
			controller: function (element) {
				element.style.height = "200px"
				let dropdown = element.getElementsByTagName("dav-dropdown")[0]

				dropdown.options = [
					{
						key: "green",
						value: "#008000",
						type: "color"
					},
					{
						key: "red",
						value: "#ff0000",
						type: "color"
					},
					{
						key: "blue",
						value: "#0000ff",
						type: "color"
					}
				]
			},
			template: `
				<dav-dropdown label="Color" selectedKey="red" compact></dav-dropdown>
			`
		}
	]
}
