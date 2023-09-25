module.exports = {
	name: "Button",
	properties: [
		{
			name: "size",
			type: "String",
			values: `"normal", "small"`
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
					<dav-button size="small">Hello World</dav-button>
					<dav-button size="small" tonal>Hello World</dav-button>
					<dav-button size="small" outline>Hello World</dav-button>
					<dav-button size="small" text>Hello World</dav-button>
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
					<dav-button size="small" color="secondary">Hello World</dav-button>
					<dav-button size="small" color="secondary" tonal>Hello World</dav-button>
					<dav-button size="small" color="secondary" outline>Hello World</dav-button>
					<dav-button size="small" color="secondary" text>Hello World</dav-button>
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

				<div style="display: flex; gap; flex-wrap: wrap: 30px; margin-top: 30px">
					<dav-button size="small" color="tertiary">Hello World</dav-button>
					<dav-button size="small" color="tertiary" tonal>Hello World</dav-button>
					<dav-button size="small" color="tertiary" outline>Hello World</dav-button>
					<dav-button size="small" color="tertiary" text>Hello World</dav-button>
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
					<dav-button size="small" color="error">Hello World</dav-button>
					<dav-button size="small" color="error" tonal>Hello World</dav-button>
					<dav-button size="small" color="error" outline>Hello World</dav-button>
					<dav-button size="small" color="error" text>Hello World</dav-button>
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
					<dav-button size="small" disabled>Hello World</dav-button>
					<dav-button size="small" tonal disabled>Hello World</dav-button>
					<dav-button size="small" outline disabled>Hello World</dav-button>
					<dav-button size="small" text disabled>Hello World</dav-button>
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
					<dav-button size="small">
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="small" tonal>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="small" outline>
						<i
							slot="icon-left"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="small" text>
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
					<dav-button size="small">
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="small" tonal>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="small" outline>
						<i
							slot="icon-right"
							class="fa-solid fa-magnifying-glass"
						></i>

						Hello World
					</dav-button>

					<dav-button size="small" text>
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
