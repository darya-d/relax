var swiperPosterBlock = new Swiper('.poster-block-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    centeredSlides: false,

    navigation: {
        nextEl: '.poster-cat-next',
        prevEl: '.poster-cat-prev',
    },
    breakpoints: {
        1300: {
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
    }
});
