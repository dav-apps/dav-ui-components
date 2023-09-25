module.exports = {
	name: "Tree",
	examples: [
		{
			title: "Default Tree",
			template: `
				<dav-tree>
					<dav-tree-item headline="Parent item" node>
						<dav-tree-item headline="Subitem 1" node>
							<dav-tree-item headline="Sub-sub-item 1"></dav-tree-item>
							<dav-tree-item headline="Sub-sub-item 2"></dav-tree-item>
						</dav-tree-item>
						<dav-tree-item headline="Subitem 2"></dav-tree-item>
					</dav-tree-item>
				</dav-tree>
			`
		}
	]
}
