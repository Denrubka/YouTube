const swiperChannel = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-1',
    prevEl: '.channel-button-prev-1',
  },
});

const swiperChannelRec = new Swiper('.channel-slider__rec', {
  // Optional parameters
  loop: true,
  slidesPerView: 2,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-2',
    prevEl: '.channel-button-prev-2',
  },
});

const swiperChannelRecChannel = new Swiper('.channel-slider__rec-channel', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-3',
    prevEl: '.channel-button-prev-3',
  },
});