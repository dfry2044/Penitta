$('.popup-button').click("click focus", function () {
    $('.login-popup').addClass('active');
});

$('.login_close img').click(function(){
    $('.login-popup').removeClass('active');
});

$('.userMenu').mouseover(function(){
        $('.no-login-menu').addClass('show');
});


$('.userMenu').mouseout(function(){
        $('.no-login-menu').removeClass('show');
});

$('.popup-button').click("click focus", function () {
    $('.no-login-menu').removeClass('show');
});

$(".ham-btn").click(function(){
    $(".menu").addClass("show");
});

$(".menu-close-btn").click(function(){
    $(".menu").removeClass("show");
})

$('.card-etc-tooltip > button:nth-child(3)').click(function(){
    $('.share-popup').addClass('active');
    scrollDisable();
});

$('.share-ico-close').click(function(){
    $('.share-popup').removeClass('active');
    scrollAble();
});

$('.card-etc-tooltip > button:nth-child(2)').click(function(){
    $('.tag-popup').addClass('active');
    scrollDisable();
});

$('.tag-ico-close').click(function(){
    $('.tag-popup').removeClass('active');
    scrollAble();
});

$('.list-top > a').click(function(){
    $('.view-popup').addClass('active');

    scrollDisable();
});

$('.view-ico-close').click(function(){
    $('.view-popup').removeClass('active');

    scrollAble();
});

$('.c4-react > button:nth-child(3)').click(function(){
    $('.comment-popup').addClass('active');
    scrollDisable();
});

$('.comment-ico-close').click(function(){
    $('.comment-popup').removeClass('active');
    scrollAble();
});

$(".filter-open-btn").click(function(){
    $(".filter-popup").addClass("show");
    scrollDisable();
})

$(".filter-popup-close-btn").click(function(){
    $(".filter-popup").removeClass("show");
    scrollAble();
})

function scrollDisable(){
    $('body').addClass('scrollDisable');
}
function scrollAble(){
    $('body').removeClass('scrollDisable');
}