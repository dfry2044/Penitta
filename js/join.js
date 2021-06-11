var joincheckItem = $(".join-check > p");
var nicknameItem = $(".nickname_check");
var $iptWrap    = $('.join-input-wrap'),
    $ipt        = $('.join-input-wrap .join-input'),
    $clearIpt   = $('.icoesc');

var idx;



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


//삭제키
$iptWrap.find(".join-input").keyup(function(){
    idx = $(this).parent().index();
    $(this).next().next().toggle(Boolean($(this).val()));
});

$clearIpt.toggle(Boolean($ipt.val()));
$clearIpt.click(function(){
    idx = $(this).parent().index();
    $(".join-input").eq(idx).val('').focus();
    $(this).hide();
});