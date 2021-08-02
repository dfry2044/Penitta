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

// template preview
var templateItem = $(".t-list_item");
var templatePreviewCloseBtn = $(".preview-close-btn");
var templatePreviewContent = $(".template-preview");
var storyicoRotationStart = $(".story-select-top");
var storyico = $('.story-select-ico');
var storyicoRotationEnd = $(".story-select-content");

templateItem.click(function(){
    templatePreviewContent.addClass("show");
    scrollDisable();
})
templatePreviewCloseBtn.click(function(){
    templatePreviewContent.removeClass("show");
    scrollAble();
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

$('.c4-react > button.comment-popup-open').click(function(){
    $('.comment-popup').addClass('active');
    scrollDisable();
});

$('.comment-popup-open').click(function(){
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

/*
    main -> sub 이동 (0n)
    sub -> sub 이동 (n)

    mypage -> 나의 스토리 (1)
    mypage -> 나의 댓글 (2)
    mypage -> 미완성스토리 (3)
    mypage -> 담아둔스토리 (4)
    mypage -> 내려받기 (5)
  
    changenickname&pw -> 닉네임 (6)
    changenickname&pw -> 비밀번호 (7)
*/

var MY_PAGE     = 'sub(html)/mypage.html?index=';
var MY_PAGE2    = '../sub(html)/mypage.html?index=';
var NC_PW       = "login(html)/changenickname&pw.html?index=";
var NC_PW2       = "../login(html)/changenickname&pw.html?index=";


function setChilValue(index){
    var url = window.location.href;
    url = url.split("/");
    url = url[url.length -2]
    
    if(
        url == "sub(html)" ||
        url == "login(html)"
    ){
        var href = window.location.href;
        var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
        
        href = href.replace(thisfilefullname,'').slice(0,-1);
        href = href.replace(url,'');
        
        switch (index) {
            case 01: case 02: case 03: case 04: case 05: 
                location = href + MY_PAGE + index;
                break;
    
            case 1: case 2: case 3: case 4: case 5: 
                location = href + MY_PAGE + index;
                break;
    
            case 06: case 07:
                location = href + NC_PW + index;
                break;
    
            case 6: case 7:
                location = href + NC_PW + index;
                break;
    
            default:
                
                break;
        }
    }else{
        var href = window.location.href;
        var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);
        
        href = href.replace(thisfilefullname,'').slice(0,-1);
        href = href.replace(url,'');
        
        switch (index) {
            case 01: case 02: case 03: case 04: case 05: 
                location = MY_PAGE + index;
                break;
    
            case 1: case 2: case 3: case 4: case 5: 
                location = MY_PAGE + index;
                break;
    
            case 06: case 07:
                location = NC_PW + index;
                break;
    
            case 6: case 7:
                location = NC_PW + index;
                break;
    
            default:
                
                break;
        }
    }
}

$(document).ready(function () {
    var val = location.href.substr(
        location.href.lastIndexOf('=') + 1
    );
    var tab = $(".my-tab .my-tab-inner li");

    switch (Number(val)) {
        case 1: case 2: case 3: case 4: case 5:
            tab.removeClass("active");
            tab.eq(val - 1).addClass("active");
            
            break;

        case 01: case 02: case 03: case 04: case 05:
            tab.removeClass("active");
            tab.eq(val - 1).addClass("active");
            
            break;

        case 6: case 7:
            tab.removeClass("active");
            tab.eq(val - 6).addClass("active");

            break;

        case 06: case 07:
            tab.removeClass("active");
            tab.eq(val - 6).addClass("active");

            break;

        default:
            console.log("fail");
            break;
    }
});