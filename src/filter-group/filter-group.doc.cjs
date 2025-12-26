module.exports = {
   name: "FilterGroup",
   examples: [
      {
         title: "Default FilterGroup",
         template: `
            <dav-filter-group>
               <dav-filter-button
                  name="colors"
                  label="Red"
                  active
               ></dav-filter-button>

               <dav-filter-button
                  name="colors"
                  label="Green"
               ></dav-filter-button>

               <dav-filter-button
                  name="colors"
                  label="Blue"
               ></dav-filter-button>
            </dav-filter-group>
         `
      }
   ]
}
