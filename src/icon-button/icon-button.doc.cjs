module.exports = {
	name: "IconButton",
	properties: [
		{
			name: "selected",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "disabled",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "size",
			type: "String",
			values: `"xs", "sm", "md"`
		},
		{
			name: "shape",
			type: "String",
			values: `"round", "square"`
		},
		{
			name: "href",
			type: "String"
		},
		{
			name: "target",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default IconButton",
			controller: function (element) {
				let xsIconButton = element.getElementsByTagName("dav-icon-button")[0]
				let smIconButton = element.getElementsByTagName("dav-icon-button")[1]
				let mdIconButton = element.getElementsByTagName("dav-icon-button")[2]

				xsIconButton.onclick = () => xsIconButton.selected = !xsIconButton.selected
				smIconButton.onclick = () => smIconButton.selected = !smIconButton.selected
				mdIconButton.onclick = () => mdIconButton.selected = !mdIconButton.selected
			},
			template: `
				<div style="display: flex; gap: 16px; align-items: center">
					<dav-icon-button size="xs">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>

					<dav-icon-button size="sm">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>

					<dav-icon-button size="md">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>
				</div>
			`
		},
		{
			title: "Square IconButton",
			controller: function (element) {
				let xsIconButton = element.getElementsByTagName("dav-icon-button")[0]
				let smIconButton = element.getElementsByTagName("dav-icon-button")[1]
				let mdIconButton = element.getElementsByTagName("dav-icon-button")[2]

				xsIconButton.onclick = () => xsIconButton.selected = !xsIconButton.selected
				smIconButton.onclick = () => smIconButton.selected = !smIconButton.selected
				mdIconButton.onclick = () => mdIconButton.selected = !mdIconButton.selected
			},
			template: `
				<div style="display: flex; gap: 16px; align-items: center">
					<dav-icon-button size="xs" shape="square">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>

					<dav-icon-button size="sm" shape="square">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>

					<dav-icon-button size="md" shape="square">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>
				</div>
			`
		},
		{
			title: "IconButton with link",
			template: `
				<div style="display: flex; gap: 16px; align-items: center">
					<dav-icon-button
						size="xs"
						href="https://dav-apps.tech"
						target="blank"
					>
						<i class="fa-solid fa-globe"></i>
					</dav-icon-button>

					<dav-icon-button
						size="sm"
						href="https://dav-apps.tech"
						target="blank"
					>
						<i class="fa-solid fa-globe"></i>
					</dav-icon-button>

					<dav-icon-button
						size="md"
						href="https://dav-apps.tech"
						target="blank"
					>
						<i class="fa-solid fa-globe"></i>
					</dav-icon-button>
				</div>
			`
		},
		{
			title: "Disabled IconButton",
			template: `
				<div style="display: flex; gap: 16px; align-items: center">
					<dav-icon-button size="xs" disabled>
						<i class="fa-solid fa-globe"></i>
					</dav-icon-button>

					<dav-icon-button size="sm" disabled>
						<i class="fa-solid fa-globe"></i>
					</dav-icon-button>

					<dav-icon-button size="md" disabled>
						<i class="fa-solid fa-globe"></i>
					</dav-icon-button>
				</div>
			`
		},
		{
			title: "IconButton with tooltip",
			template: `
				<div style="display: flex; gap: 16px; align-items: center">
					<dav-icon-button size="xs" tooltip="Search">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>

					<dav-icon-button size="sm" tooltip="Search">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>

					<dav-icon-button size="md" tooltip="Search">
						<i class="fa-solid fa-magnifying-glass"></i>
					</dav-icon-button>
				</div>
			`
		}
	]
}
