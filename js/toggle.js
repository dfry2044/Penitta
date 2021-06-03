var toggle = $(".card-toggle");

toggle.click(function(){
    
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(this).addClass("active");
    }

    return false;
})