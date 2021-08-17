const glideMenu = new Glide('#miso-menu', {
    type: 'slider',
    perView: 4,
    gap: 10,
    focusAt: '1',
    peek: {
      before: 0,
      after: 0
    }
  });
  glideMenu.mount();