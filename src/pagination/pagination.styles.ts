import { css } from "@lit/reactive-element"

export const paginationStyles = css`
	#container {
		display: flex;
		justify-content: center;
	}

	.pagination-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 38px;
		height: 38px;
		font-size: 16px;
		padding: 0;
		margin: 0px 1px;
		background-color: #f8f9fa;
		border-radius: 0.5rem;
		border: 1px solid #f8f9fa;
		transition: 0.2s;
	}

	.pagination-button:not(.selected):hover {
		background-color: #efefef;
		border-color: #efefef;
	}

	.pagination-button.darkTheme {
		color: white;
		background-color: #1c2938;
		border-color: #1c2938;
	}

	.pagination-button.darkTheme:not(.selected):hover {
		background-color: #232e3c;
		border-color: #232e3c;
	}

	.selected {
		background-color: #d9d9d9;
	}

	.selected.darkTheme {
		background-color: #3d4753;
	}

	.button-placeholder {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 38px;
		margin: 0px 1px;
	}

	.button-placeholder.darkTheme {
		color: white;
	}
`