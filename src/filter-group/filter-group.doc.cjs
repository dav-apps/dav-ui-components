module.exports = {
   name: "FilterGroup",
   examples: [
      {
         title: "Default FilterGroup",
         template: `
            <dav-filter-group>
               <dav-filter-button name="truck" active>
                  <i class="fa-solid fa-truck"></i>
               </dav-filter-button>

               <dav-filter-button name="shopping">
                  <i class="fa-solid fa-bag-shopping"></i>
               </dav-filter-button>

               <dav-filter-button name="utensils">
                  <i class="fa-solid fa-utensils"></i>
               </dav-filter-button>
            </dav-filter-group>
         `
      }
   ]
}
