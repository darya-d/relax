$('.register-tab__item').on('click', function () {
    $('.register-tab__item.active').removeClass('active');
    $(this).addClass('active');
})

$('.dropdown').on('click', function () {
    $(this).toggleClass('active');
});


$(document).mouseup(function (e){
    let dropdown = $(".dropdown");
    if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
        $('.dropdown.active').removeClass('active');
    }
});


