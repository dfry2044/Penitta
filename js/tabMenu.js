var tabBtn = $(".my-tab-inner li");
var tabContent = $(".my-card .card-list");

tabBtn.click(function(){
    var idx = $(this).index();

    tabContent.removeClass("show");
    tabBtn.removeClass("active");

    tabContent.eq(idx).addClass("show");
    tabBtn.eq(idx).addClass("active");
});