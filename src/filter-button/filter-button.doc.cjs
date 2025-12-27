module.exports = {
   name: "FilterButton",
   properties: [
      {
         name: "name",
         type: "String"
      }
   ],
   examples: [
      {
         title: "Default FilterButton",
         template: `
            <dav-filter-button name="example">
               <i class="fa-solid fa-star"></i>
            </dav-filter-button>
         `
      },
      {
         title: "FilterButton with label",
         template: `
            <dav-filter-button name="example" label="Example Label">
               <i class="fa-solid fa-star"></i>
            </dav-filter-button>
         `
      }
   ]
}
