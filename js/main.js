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

// ------------------ACCORDION--------------------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.firstElementChild;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// ---------------------SWIPER--------------------
var swiper = new Swiper(".topnft-swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

  var swiper = new Swiper(".users-swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });