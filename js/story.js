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

$(function(){
			$('.list_item').hide();
			$('.list_item').slice(0, 8).show();
			$('.button').click(function(e){
				e.preventDefault();
				$('.list_item:hidden').slice(0, 4).show();
				if($('.list_item:hidden').length == 0) {
					alert("더이상 항목이 없습니다.")
				}
			})
		})