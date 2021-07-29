var categoryItem    = $(".category li");
var filterItem      = $(".text-right button");
var checkItem       = $(".check p");

categoryItem.eq(0).addClass("active");
filterItem.eq(0).addClass("active");
checkItem.eq(0).addClass("active");

categoryItem.click(function(){
    if($(this).text() == "전체"){
        categoryItem.removeClass("active");
        $(this).addClass("active");
    }else if($(this).text() != "전체"){
        categoryItem.eq(0).removeClass("active");
        
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        }
    }
});

filterItem.click(function(){
    filterItem.removeClass("active");
    $(this).addClass("active");
});

checkItem.click(function(){
    checkItem.removeClass("active");
    $(this).addClass("active");
});

$(function () {
    $("input").focus(function () {
        $(this).css("color", "#000000");
    });
});

$('.input-stlye input[type="text"]').on('input propertychange', function() {
	var $this = $(this);
	var visible = Boolean($this.val());
	$this.siblings('.form-control-clear').toggleClass('hidden', !visible);
  }).trigger('propertychange');
  
  $('.form-control-clear').click(function() {
	$(this).siblings('input[type="text"]').val('')
	  .trigger('propertychange').focus();
  });