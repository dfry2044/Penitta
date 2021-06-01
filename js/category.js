var categoryItem = $(".category li");

categoryItem.eq(0).addClass("active");

categoryItem.click(function(){
    if($(this).text() == "전체"){
        categoryItem.removeClass("active");
        $(this).addClass("active");
    }else if($(this).text() != "전체"){
        categoryItem.eq(0).removeClass("active");
    }
    $(this).addClass("active");
})