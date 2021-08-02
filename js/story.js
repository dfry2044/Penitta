//header

$(window).scroll(function () {

    var browserT = $(window).scrollTop();

    if (browserT > 300) {
        $('header').addClass('ani_fixed')
    } else if (browserT == 0) {
        $('header').removeClass('ani_fixed')
    }


});

$(window).scroll(function () {
    var browserT = $(window).scrollTop();

    $('.header-left').addClass('active');
    if (browserT == 0) {
        $('.header-left').removeClass('active');
    }
});

$(window).scroll(function () {
    var browserT = $(window).scrollTop();

    $('header div.header-right > div.userMenu').addClass('active');
    if (browserT == 0) {
        $('header div.header-right > div.userMenu').removeClass('active');
    }
});


//c2 swiper
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 36,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1920: {
            slidesPerView: '3',
            slidesPerGroup: 3,
            freeMode: false,
            spaceBetween: 27,
        },
        1024: {
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 20,
        },
      },
});

//c4 button

$(function () {
    $('.list_item').hide();
    $('.list_item').slice(0, 8).show();
    $('.button').click(function (e) {
        e.preventDefault();
        $('.list_item:hidden').slice(0, 4).show();
        if ($('.list_item:hidden').length == 0) {
            alert("더이상 항목이 없습니다.")
        }
    })
})
