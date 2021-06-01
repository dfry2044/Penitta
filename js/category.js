var categoryItem    = $(".category li");
var filterItem      = $(".text-right button");

categoryItem.eq(0).addClass("active");
filterItem.eq(0).addClass("active");

categoryItem.click(function(){
    if($(this).text() == "전체"){
        categoryItem.removeClass("active");
        $(this).addClass("active");
    }else if($(this).text() != "전체"){
        categoryItem.eq(0).removeClass("active");
    }
    $(this).addClass("active");
})

filterItem.click(function(){
    filterItem.removeClass("active");
    $(this).addClass("active");
})