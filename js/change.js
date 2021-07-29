
$(function () {
    $("input").focus(function () {
        $(this).css("color", "#000000");
    });
});

// 삭제키
$('.has-clear input[type="text"]').on('input propertychange', function() {
	var $this = $(this);
	var visible = Boolean($this.val());
	$this.siblings('.form-control-clear').toggleClass('hidden', !visible);
  }).trigger('propertychange');
  
  $('.form-control-clear').click(function() {
	$(this).siblings('input[type="text"]').val('')
	  .trigger('propertychange').focus();
  });


  //유효성 js

  var pw1 = document.querySelector('#pswd1');
  var pwMsg = document.querySelector('#alertTxt');