const swiper = new Swiper(".first-swiper", {
  // Optional parameters
  direction: "horizontal", // 슬라이드 방향
  autoplay: {
    // 자동재생 여부
    delay: 3500,
  },
  loop: true, // 반복재생 여부
  spaceBetween: 25,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".second-swiper", {
  // Optional parameters
  direction: "horizontal", // 슬라이드 방향
  loop: true, // 반복재생 여부
  spaceBetween: 20,
  slidesPerView: 2,
  slidesPerGroup: 2,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

