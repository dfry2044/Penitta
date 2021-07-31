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
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    /*navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },*/
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

// template preview
var templateItem = $(".t-list_item");
var templatePreviewCloseBtn = $(".preview-close-btn");
var templatePreviewContent = $(".template-preview");
var storyicoRotationStart = $(".story-select-top");
var storyico = $('.story-select-ico');
var storyicoRotationEnd = $(".story-select-content");

templateItem.click(function(){
    templatePreviewContent.addClass("show");
})
templatePreviewCloseBtn.click(function(){
    templatePreviewContent.removeClass("show");
})

storyicoRotationStart.click(function(){
    storyico.addClass("active");
})
storyicoRotationEnd.click(function(){
    storyico.removeClass("active");
})

storyico.click(function(){
    storyico.addClass("active");
})
storyico.click(function(){
    storyico.removeClass("active");
})

templatePreviewContent.on('scroll touchmove mousewheel', function(e){

    e.preventDefault();
    
    e.stopPropagation(); 
    
    return false;
})


$('.card-etc-tooltip > button:nth-child(3)').click(function(){
    $('.share-popup').addClass('active');
});

$('.share-ico-close').click(function(){
    $('.share-popup').removeClass('active');
});

$('.card-etc-tooltip > button:nth-child(2)').click(function(){
    $('.tag-popup').addClass('active');
});

$('.tag-ico-close').click(function(){
    $('.tag-popup').removeClass('active');
});

$('.list-top > a').click(function(){
    $('.view-popup').addClass('active');
});

$('.view-ico-close').click(function(){
    $('.view-popup').removeClass('active');
});

$('.c4-react > button:nth-child(3)').click(function(){
    $('.comment-popup').addClass('active');
});


$('.comment-ico-close').click(function(){
    $('.comment-popup').removeClass('active');
});