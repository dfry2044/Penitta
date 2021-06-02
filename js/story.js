//header
 $(window).scroll(function () {
     var browserT = $(window).scrollTop();
    //  console.log(browserT);

    //  $('header').addClass('on');
    //  if (browserT == 0) {
    //      $('header').removeClass('on');
    //  }
    
    if( browserT <= 150){
        $("header.fixed").removeClass("show");
    }else if(browserT >= 150){
        $("header.fixed").addClass("show");
    }
 });

//  $(window).scroll(function () {
//      var browserT = $(window).scrollTop();
//      console.log(browserT);

//      $('header').addClass('active');
//      if (browserT == 0) {
//          $('header').removeClass('active');
//      }
//  });

//  $(window).scroll(function () {
//         var browserT = $(window).scrollTop();
//         console.log(browserT);

//         $('.header-left').addClass('active');
//         if (browserT == 0) {
//             $('.header-left').removeClass('active');
//         }
//     });

//  $(window).scroll(function () {
//         var browserT = $(window).scrollTop();
//         console.log(browserT);

//         $('header div.header-right > div.userMenu').addClass('active');
//         if (browserT == 0) {
//             $('header div.header-right > div.userMenu').removeClass('active');
//         }
//     });

 /*$(window).scroll(function () {
     var browserT = $(window).scrollTop();
     console.log(browserT);

     $('.wrap').addClass('active');
     if (browserT == 0) {
         $('.wrap').removeClass('active');
     }
 });*/

//c2 swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
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


