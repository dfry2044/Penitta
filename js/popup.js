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