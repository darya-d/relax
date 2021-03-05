$('.select2').select2();

// carousel
$('.carousel-wrapper').removeClass('hidden');
$('.carousel-wrapper').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 2,
    dotsClass: 'carousel-wrapper-custom-dots',
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                dots: false
            }
        }
    ]
});

// main-poster carousel
var swiperPosterCat = new Swiper('.main-poster-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,

    navigation: {
        nextEl: '.main-poster-next',
        prevEl: '.main-poster-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 15,
            centeredSlides: false,
        },
        1300: {
            centeredSlides: true,
        }
    }
});

