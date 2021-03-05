/*poster cat page tabs*/
$('.poster-cat-tabs__list-item').on('click', function () {
    let idTab = $(this).attr('data-tab');
    $('.poster-cat-tabs__list-item.active').removeClass('active');
    $(this).addClass('active');

    $('.poster-cat-tabs__item.active').removeClass('active');
    $(idTab).addClass('active');
});


/*poster cat page slider*/
/*$('.poster-cat-tabs__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: maxItems,
    slidesToScroll: 5,
    centerMode: false,
    rows: 1,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
*/

var swiperFilterTop = new Swiper('.top-filter-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: false,
    navigation: {
        nextEl: '.top-filter-next',
        prevEl: '.top-filter-prev',
    },
});



var swiperPosterCat = new Swiper('.poster-cat-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,

    navigation: {
        nextEl: '.poster-cat-next',
        prevEl: '.poster-cat-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1300: {
            centeredSlides: true,
        }
    }
});



$('.top-filter-min__item-more').on('click', function () {
    let menu = $(this).parent();

    if ($(this).hasClass('active')) {
        menu.find('.top-filter-min__item.show').addClass('hide').removeClass('show')
    } else {
        menu.find('.top-filter-min__item.hide').addClass('show').removeClass('hide')
    }
    $(this).toggleClass('active');
});
