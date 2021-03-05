$('.main-nav__item').hover(function () {
    let menuId = $(this).attr('data-menu');

    if (typeof menuId !== typeof undefined && menuId !== false) {
        $(".main-nav__menu.show").removeClass('show');
        $("#" + menuId).addClass('show');
    } else {
        $(".main-nav__menu").removeClass('show');
    }
});

$('.main-nav__menu').mouseout(function () {
    $(".main-nav__menu.show").removeClass('show');
});
