module.exports = {
	name: "Dropdown",
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
