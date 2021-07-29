var toggle = $(".card-toggle");

toggle.click(function(){
    
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(this).addClass("active");
    }
})

var etcTooltipBtn = $(".card-etc");
var etcTooltip = $(".card-etc-tooltip");

$(document).on('click',function(e){
    if(e.target.parentElement.classList.value == `card-etc`){
        e.target.parentElement.nextElementSibling.classList.add("show")
    }else{
        etcTooltip.removeClass("show");
    }
})