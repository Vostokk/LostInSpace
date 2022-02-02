(function() {

   const elem = document.querySelector('.products__list');
   const iso = new Isotope( elem, {
      itemSelector: '.products__item',
      filter: '.new'
   });

   const filter = document.querySelectorAll('.filter__link');
   const filterActive = 'filter__item--active';

   filter.forEach(function(control) {

      control.addEventListener('click', function(a) {
         a.preventDefault();

         const filterName = control.getAttribute("data-filter");

         filter.forEach(function(link) {
            link.closest('.filter__item').classList.remove(filterActive)
         })

         control.closest('.filter__item').classList.add(filterActive);

         iso.arrange ({
            filter: `.${filterName}`
         })

      })


   })

})()