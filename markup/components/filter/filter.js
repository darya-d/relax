$('.filter__select--header').on('click', function () {
    $(this).parent().toggleClass('active');
});

$('.filter__select--option').on('click', function () {
    $(this).toggleClass('active');
});

$('.filter__close').on('click', function () {
    $('.filter').removeClass('active');
});
