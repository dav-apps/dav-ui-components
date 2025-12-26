module.exports = {
   name: "FilterGroup",
   examples: [
      {
         title: "Default FilterGroup",
         template: `
            <dav-filter-group>
               <dav-filter-button label="Red" active>
                  <i class="fa-solid fa-truck"></i>
               </dav-filter-button>

               <dav-filter-button label="Green">
                  <i class="fa-solid fa-bag-shopping"></i>
               </dav-filter-button>

               <dav-filter-button label="Blue">
                  <i class="fa-solid fa-utensils"></i>
               </dav-filter-button>
            </dav-filter-group>
         `
      }
   ]
}
