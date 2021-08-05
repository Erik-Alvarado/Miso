const hamburger = document.querySelector(".hamSelect");
const navMenu = document.querySelector(".misoNav");
const scrollUp = document.querySelector("scroll-up");
const scrollDown = document.querySelector("scroll-down");
let shoppingCarts = document.querySelectorAll(".misoBag");

let lastScroll = 0;

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

shoppingCarts.forEach(function (i) {
    i.addEventListener('click', function() {
      i.classList.toggle('open');
    });
  });

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrolldown);
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ){
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll
})

