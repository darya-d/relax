$('.photo-reports__tabs-item').on('click', function () {
    $(this).toggleClass('active');
});

$('.aside-slider__wrap').slick({
    infinite: true,
    slidesToShow: 1,
});
