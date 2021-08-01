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

$(".menu").on('scroll touchmove mousewheel', function(e){
    e.preventDefault();

    e.stopPropagation();

    return false;
})