const glideHero = new Glide('#miso-carousel', {
  type: 'carousel',
  animationDuration: 2000,
  autoplay: 4500,
  focusAt: '1',
  startAt: 1,
  perView: 1,
});
glideHero.mount();

const glideFeature = new Glide('#miso-signature', {
  type: 'slider',
  perView: 4,
  gap: 10,
  focusAt: '1',
  peek: {
    before: 0,
    after: 0
  },
  breakpoints: {
    500: {
      perView: 3,
      gap: 10,
      focusAt: 1.15,
      peek: {
        before: 25,
        after: 25
      }
    },
    425: { 
      perView: 2,
      focusAt: 2,
      peek: {
        before: 0,
        after: 0
      }
     },
  }
});
glideFeature.mount();


