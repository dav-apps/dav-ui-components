module.exports = {
	name: "ProgressBar",
	properties: [
		{
			name: "value",
			type: "Number",
			values: "0 - 100"
		}
	],
	examples: [
		{
			title: "Default ProgressBar",
			template: `
				<div style="width: 200px">
					<dav-progress-bar value="42"></dav-progress-bar>
				</div>
			`
		}
	]
}
