// ----------------------------BURGER-MENU----------------------
let menuBtn = document.querySelector('.media-menu__icon');
let mainMenu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('menu-open');
    mainMenu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
});

// --------------------------TABS----------------------------
const tabsBtn   = document.querySelectorAll(".explore-button");
const tabsItems = document.querySelectorAll(".explore-img");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}
document.querySelector('.explore-button').click();

// ---------------------SWIPER--------------------
// var swiper = new Swiper(".topnft-swiper", {
//     slidesPerView: 3,
//     spaceBetween: 0,
//     breakpoints: {
//       // when window width is >= 300px
//       200: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },
//       // when window width is >= 480px
//       480: {
//         slidesPerView: 2,
//         spaceBetween: 30
//       },
//       // when window width is >= 768px
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 0
//       }
//     }
//   });

  var swiper = new Swiper(".users-swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      // when window width is >= 300px
      200: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });