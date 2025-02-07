document.addEventListener('DOMContentLoaded', function() {
  const gridItems = document.querySelectorAll('.grid-item');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('[data-modal-close]');

  const menuItems = document.querySelectorAll('header nav ul li a');

  function closeModal(modal) {
      modal.style.display = 'none';
  }

  closeButtons.forEach(btn => {
      btn.addEventListener('click', function(e) {
          const modal = e.target.closest(".modal");
          closeModal(modal);
      });
  });

  gridItems.forEach(item => {
      item.addEventListener('click', function() {
        const modalTarget = this.dataset.modalTarget;
        if (modalTarget){
              const modal = document.querySelector(modalTarget);
              if(modal){
                 modal.style.display = "flex";
              }
        }

      });
  });
  window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
      }
    });


    function scrollToSection(sectionId) {
         const section = document.querySelector(sectionId);
              if (section) {
                  section.scrollIntoView({behavior: 'smooth', block: 'start'});
              }
       }

       function handleMenuClick(event) {
            event.preventDefault();
             const targetId = this.getAttribute('href');
             scrollToSection(targetId);
      }

  menuItems.forEach(menuItem => {
      menuItem.addEventListener('click', handleMenuClick);
  });

  function updateActiveMenuItem(){
        const scrollY = window.scrollY;
        let closestSection = document.querySelector(".services-container");
        let closestDist = Math.abs(closestSection.offsetTop - scrollY);
           for (let i = 0; i < menuItems.length; i++){
                const item = menuItems[i];
               const section = document.querySelector(item.getAttribute('href'));
                if(section){
                    const dist = Math.abs(section.offsetTop - scrollY);
                    if (dist < closestDist){
                       closestDist = dist;
                       closestSection = section;
                    }
                }
              }

         menuItems.forEach(item => {
               item.parentElement.classList.remove('active');
           });

      let activeMenuItem = document.querySelector(`header nav ul li a[href="#${closestSection.id}"]`);
        if(activeMenuItem){
            activeMenuItem.parentElement.classList.add("active");
        }
  }
      updateActiveMenuItem();

  window.addEventListener('scroll', function () {
      updateActiveMenuItem();
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const selectableWords = document.querySelectorAll('.selectable-word');

    selectableWords.forEach(word => {
        word.addEventListener('click', function() {
            // Remove 'selected' class from all words
            selectableWords.forEach(w => w.classList.remove('selected'));

            // Add 'selected' class to the clicked word
            this.classList.add('selected');
        });
    });
});

});