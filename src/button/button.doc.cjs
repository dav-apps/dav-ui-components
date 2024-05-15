module.exports = {
	name: "Button",
	properties: [
		{
			name: "size",
			type: "String",
			values: `"md", "sm"`
		},
		{
			name: "color",
			type: "String",
			values: `"primary", "secondary", "tertiary", "error"`
		},
		{
			name: "tonal",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "outline",
			type: "Boolean",
			values: "true / false"
		},
		{
			name: "text",
			type: "Boolean",
			values: "true / false"
		}
	],
	examples: [
		{
			title: "Primary button",
			template: `
				<div style="display: flex; flex-wrap: wrap; gap: 30px">
					<dav-button>Hello World</dav-button>
					<dav-button tonal>Hello World</dav-button>
					<dav-button outline>Hello World</dav-button>
					<dav-button text>Hello World</dav-button>
				</div>

				<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px">
					<dav-button size="sm">Hello World</dav-button>
					<dav-button size="sm" tonal>Hello World</dav-button>
					<dav-button size="sm" outline>Hello World</dav-button>
					<dav-button size="sm" text>Hello World</dav-button>
				</div>
			`
		},
		{
			title: "Secondary button",
			template: `
				<div style="display: flex; flex-wrap: wrap; gap: 30px">
					<dav-button color="secondary">Hello World</dav-button>
					<dav-button color="secondary" tonal>Hello World</dav-button>
					<dav-button color="secondary" outline>Hello World</dav-button>
					<dav-button color="secondary" text>Hello World</dav-button>
				</div>

				<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px">
					<dav-button size="sm" color="secondary">Hello World</dav-button>
					<dav-button size="sm" color="secondary" tonal>Hello World</dav-button>
					<dav-button size="sm" color="secondary" outline>Hello World</dav-button>
					<dav-button size="sm" color="secondary" text>Hello World</dav-button>
				</div>
			`
		},
		{
			title: "Tertiary tonal button",
			template: `
				<div style="display: flex; flex-wrap: wrap; gap: 30px">
					<dav-button color="tertiary">Hello World</dav-button>
					<dav-button color="tertiary" tonal>Hello World</dav-button>
					<dav-button color="tertiary" outline>Hello World</dav-button>
					<dav-button color="tertiary" text>Hello World</dav-button>
				</div>

				<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px">
					<dav-button size="sm" color="tertiary">Hello World</dav-button>
					<dav-button size="sm" color="tertiary" tonal>Hello World</dav-button>
					<dav-button size="sm" color="tertiary" outline>Hello World</dav-button>
					<dav-button size="sm" color="tertiary" text>Hello World</dav-button>
				</div>
			`
		},
		{
			title: "Error button",
			template: `
				<div style="display: flex; flex-wrap: wrap; gap: 30px">
					<dav-button color="error">Hello World</dav-button>
					<dav-button color="error" tonal>Hello World</dav-button>
					<dav-button color="error" outline>Hello World</dav-button>
					<dav-button color="error" text>Hello World</dav-button>
				</div>

				<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px">
					<dav-button size="sm" color="error">Hello World</dav-button>
					<dav-button size="sm" color="error" tonal>Hello World</dav-button>
					<dav-button size="sm" color="error" outline>Hello World</dav-button>
					<dav-button size="sm" color="error" text>Hello World</dav-button>
				</div>
			`
		},
		{
			title: "Disabled button",
			template: `
				<div style="display: flex; flex-wrap: wrap; gap: 30px">
					<dav-button disabled>Hello World</dav-button>
					<dav-button tonal disabled>Hello World</dav-button>
					<dav-button outline disabled>Hello World</dav-button>
					<dav-button text disabled>Hello World</dav-button>
				</div>

				<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px">
					<dav-button size="sm" disabled>Hello World</dav-button>
					<dav-button size="sm" tonal disabled>Hello World</dav-button>
					<dav-button size="sm" outline disabled>Hello World</dav-button>
					<dav-button size="sm" text disabled>Hello World</dav-button>
				</div>
			`
		},
		{
			title: "Button with icon left",
			template: `
				<div style="display: flex; flex-wrap: wrap; gap: 30px">
					<dav-button>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button tonal>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>
					
						Hello World
					</dav-button>

					<dav-button outline>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button text>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>
				</div>

				<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px">
					<dav-button size="sm">
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="sm" tonal>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="sm" outline>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="sm" text>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>
				</div>
			`
		},
		{
			title: "Button with icon right",
			template: `
				<div style="display: flex; flex-wrap: wrap; gap: 30px">
					<dav-button>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button tonal>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>
					
						Hello World
					</dav-button>

					<dav-button outline>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button text>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>
				</div>

				<div style="display: flex; flex-wrap: wrap; gap: 30px; margin-top: 30px">
					<dav-button size="sm">
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="sm" tonal>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="sm" outline>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="sm" text>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>
				</div>
			`
		}
	]
}
