$('.main-map__footer--btn').on('click', function () {
    if ($('.main-map').hasClass('active')) {
        $('.main-map').removeClass('active');
    } else {
        $('.main-map').addClass('active');
    }
});

$('a[data-map-menu]').on('click', function () {
    let menu = $(this).attr('data-map-menu');
    $('.second-map-menu.active').removeClass('active');
    $(menu).addClass('active')
})
