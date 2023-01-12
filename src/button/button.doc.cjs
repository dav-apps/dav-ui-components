module.exports = {
	name: 'Button',
	examples: [
		{
			title: 'Default Button',
			controller: function (element) {
				element.onclick = () => alert('Hello!');
			},
			template: `<dav-button>Greet</dav-button>`
		}
	]
}
