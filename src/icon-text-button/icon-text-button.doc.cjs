module.exports = {
	name: "IconTextButton",
	properties: [
		{
			name: "label",
			type: "String"
		}
	],
	examples: [
		{
			title: "Default IconTextButton",
			template: `
				<dav-icon-text-button label="Search">
					<i class="fa-solid fa-magnifying-glass"></i>
				</dav-icon-text-button>
			`
		}
	]
}