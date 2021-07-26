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
