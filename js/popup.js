//popup


var loginItem = $(".login-check > p");

loginItem.click(function(){
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
});

$(function() {           

    $(".login_list input").focus(function(){
      $(this).css("color","#000000");
    });
    $("#test").blur(function(){
    $(this).css("color","#a5a5a5");
  });
   
});

//qna-popup

$('.qna-btn').click(function(){
  $('.qna-popup').addClass('show');
});

$('.qna-esc').click(function(){
  $('.qna-popup').removeClass('show');
});

$(window).scroll(function() {
  console.log($(this).scrollTop());
  // 5007 + 912 > 5919 
  if($(this).scrollTop() + $( window ).height() >= $('footer').offset().top) {
      $('.qna-btn').addClass('add');
  }else {
      $('.qna-btn').removeClass('add');
  }
});