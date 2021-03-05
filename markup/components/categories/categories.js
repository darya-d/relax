$('.tab-info').on('click', function () {
   $(this).toggleClass('active');
});

$('.tabs-switch__item').on('click', function () {
    $('.tabs-switch__item.active').removeClass('active');
    $(this).addClass('active');
});

$('.cat-item__photos-slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
});

$('.cat-item__price-slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerMode: true,
});
