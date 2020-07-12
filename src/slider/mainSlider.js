function addSwipers(){
  let swiperScrptOne = document.createElement('script'),
      swiperScriptTwo = document.createElement('script'),
      bundle = document.getElementById('bandle');
      swiperScrptOne.setAttribute('src', "https://unpkg.com/swiper/swiper-bundle.js");
      swiperScriptTwo.setAttribute('src', "https://unpkg.com/swiper/swiper-bundle.min.js");

      bundle.before(swiperScrptOne);
      bundle.before(swiperScriptTwo);
}
let swiperOne = new Swiper('.swiper-container-one', {

  slidesPerView: 1,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});


let swiperTwo = new Swiper('.swiper-container-two', {
  slidesPerView: 3,
  spaceBetween: 50,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});




export {swiperOne, swiperTwo, addSwipers};
