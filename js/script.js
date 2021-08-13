const hamburger = document.querySelector(".hamSelect");
const navMenu = document.querySelector(".misoNav");
let shoppingCarts = document.querySelectorAll(".misoBag");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

shoppingCarts.forEach(function (i) {
    i.addEventListener('click', function() {
      i.classList.toggle('open');
    });
  });

  let didScroll;
  let lastScrollTop = 0;
  const delta = 5;
  const navbarHeight = $("header").outerHeight();
  
  $(window).scroll(function (event) {
    didScroll = true;
  });
  
  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  
  function hasScrolled() {
    const st = $(this).scrollTop();
    if (Math.abs(lastScrollTop - st) <= delta) return;
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("header").removeClass("nav-down").addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("header").removeClass("nav-up").addClass("nav-down");
      }
    }
  
    lastScrollTop = st;
  }

