
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
  focusAt: '0',
  peek: {
    before: 25,
    after: 25
  }

})
glideFeature.mount();
