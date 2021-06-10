var joincheckItem = $(".join-check > p");
var nicknameItem = $(".nickname_check");

joincheckItem.click(function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
    }
});

$(function () {

    $(".join_wrap input").focus(function () {
        $(this).css("color", "#000000");
    });
    $("#test").blur(function () {
        $(this).css("color", "#a5a5a5");
    });

});

/*버튼*/

nicknameItem.click(function () {
    $(".join-nickname > .icocheck").addClass("check");
});
nicknameItem.blur(function () {
    $(".join-nickname > .icocheck").removeClass("check");
});


$(function () {
    $(".join_wrap input").focus(function () {
        $(this).css("color", "#000000");
    });
    $("#test").blur(function () {
        $(this).css("color", "#a5a5a5");
    });
});

var $ipt = $('.join-input'),
    $clearIpt = $('.icoesc');

$ipt.keyup(function(){
  $(this).next().next().toggle(Boolean($(this).val()));
});

$clearIpt.toggle(Boolean($ipt.val()));
$clearIpt.click(function(){
  $(".join-input").val('').focus();
  $(this).hide();
});

