module.exports = {
   name: "FilterGroup",
   examples: [
      {
         title: "Default FilterGroup",
         template: `
            <dav-filter-group>
               <dav-filter-button label="Red" active>
                  <i class="fa-solid fa-magnifying-glass"></i>
               </dav-filter-button>

               <dav-filter-button label="Green">
                  <i class="fa-solid fa-magnifying-glass"></i>
               </dav-filter-button>

               <dav-filter-button label="Blue">
                  <i class="fa-solid fa-magnifying-glass"></i>
               </dav-filter-button>
            </dav-filter-group>
         `
      }
   ]
}
