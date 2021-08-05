var tabBtn = $(".my-tab-inner li");
var tabContent = $(".my-card .card-list");
var editButton1 = $(".comment-popup .edit-button");
var editButton2 = $(".card-list .edit-button");
var commentEdit = $(".comment-edit");
var commentBox = $(".comment-edit-click");
var editButtonAfter1 = $(".comment-popup .edit-button-box > button");
var editButtonAfter2 = $(".card-list .edit-button-box > button");
var editButtonEsc1= $(".comment-popup .noedit-button-box > button");
var editButtonEsc2 = $(".card-list .noedit-button-box > button");
var editButtonClear = $(".comment-edit-click2");
var removeButton = $(".comment-clear");
var titleBox = $(".title-left > em");
var titleIcon = $(".accIcon > i");
var idx;
var titleIdx;
var removeIdx;
var togleBox;

tabBtn.click(function(){
    idx = $(this).index();

    tabContent.removeClass("show");
    tabBtn.removeClass("active");

    tabContent.eq(idx).addClass("show");
    tabBtn.eq(idx).addClass("active");
});

editButton1.click(function(){
    titleIdx = $(this).closest(".comment-popup .comment-item").index();

    $(this).closest(".comment-content").addClass("hide");
    $(this).closest(".comment-etc-tooltip").removeClass("show");

    $(".comment-popup .comment-item").find(commentEdit).eq(titleIdx).addClass("click");
    $(".comment-popup .comment-item").find(commentBox).eq(titleIdx).addClass("active");
    $(".comment-popup .comment-item").find(editButtonClear).eq(titleIdx).addClass("active");
});

editButton2.click(function(){
    titleIdx = $(this).closest(".card-list .comment-item").index();

    $(this).closest(".comment-content").addClass("hide");
    $(this).closest(".comment-etc-tooltip").removeClass("show");

    $(".card-list .comment-item").find(commentEdit).eq(titleIdx).addClass("click");
    $(".card-list .comment-item").find(commentBox).eq(titleIdx).addClass("active");
    $(".card-list .comment-item").find(editButtonClear).eq(titleIdx).addClass("active");
});

editButtonAfter1.click(function(){
    titleIdx = $(this).closest(".comment-popup .comment-item").index();

    $(this).closest(".comment-item").find(".comment-content").removeClass("hide");

    $(".comment-popup .comment-item").find(commentEdit).eq(titleIdx).removeClass("click");
    
    $(".comment-popup .comment-item").find(commentBox).eq(titleIdx).removeClass("active");
    $(".comment-popup .comment-item").find(editButtonClear).eq(titleIdx).removeClass("active");
});

editButtonAfter2.click(function(){
    titleIdx = $(this).closest(".card-list .comment-item").index();

    $(this).closest(".comment-item").find(".comment-content").removeClass("hide");

    $(".card-list .comment-item").find(commentEdit).eq(titleIdx).removeClass("click");
    $(".card-list .comment-item").find(commentBox).eq(titleIdx).removeClass("active");
    $(".card-list .comment-item").find(editButtonClear).eq(titleIdx).removeClass("active");
});

editButtonEsc1.click(function(){
    titleIdx = $(this).closest(".comment-popup .comment-item").index();

    $(this).closest(".comment-item").find(".comment-content").removeClass("hide");

    $(".comment-popup .comment-item").find(commentEdit).eq(titleIdx).removeClass("click");
    $(".comment-popup .comment-item").find(commentBox).removeClass("active");
    $(".comment-popup .comment-item").find(editButtonClear).eq(titleIdx).removeClass("active");
});

editButtonEsc2.click(function(){
    titleIdx = $(this).closest(".comment-item").index();

    $(this).closest(".comment-item").find(".comment-content").removeClass("hide");

    $(".card-list .comment-item").find(commentEdit).eq(titleIdx).removeClass("click");
    $(".card-list .comment-item").find(commentBox).eq(titleIdx).removeClass("active");
    $(".card-list .comment-item").find(editButtonClear).eq(titleIdx).removeClass("active");
});

// 삭제키
// removeButton.click(function() {
//     removeIdx = $(this).closest(".new").index();
//     $(".my-comment-inner").find(".new").eq(removeIdx).detach();
// });

// variables
var accordionBtn = document.querySelectorAll('.accordionTitle');
var allTexts = document.querySelectorAll('.text');
var accIcon = document.querySelectorAll('.accIcon');

// event listener
accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)
});

// function
function toggleAccordion(el) {
   var targetText = el.currentTarget.nextElementSibling.classList;
   var targetAccIcon = el.currentTarget.children[0];
   var target = el.currentTarget;
   
   if (targetText.contains('show')) {
    titleIdx = $(this).closest(".item").index();
       targetText.remove('show');
       targetAccIcon.classList.remove('anime');
       target.classList.remove('accordionTitleActive');
       $(".card-list.show").find(titleBox).eq(titleIdx).removeClass("show");
        $(".card-list.show").find(titleIcon).eq(titleIdx).removeClass("show");
   } 
   else {
      accordionBtn.forEach(function (el) {
        //  el.classList.remove('accordionTitleActive');
         
        //  allTexts.forEach(function (el) {
        //     el.classList.remove('show');
        //  })
         
        //  accIcon.forEach(function (el) {
        //   el.classList.remove('anime');
        //  }) 
         
      })
      titleIdx = $(this).closest(".item").index();

        targetText.add('show');
        target.classList.add('accordionTitleActive');
        targetAccIcon.classList.add('anime');
        $(".card-list.show").find(titleBox).eq(titleIdx).addClass("show");
        $(".card-list.show").find(titleIcon).eq(titleIdx).addClass("show");
   }  
   
}

$(function() {
    $('.togle-box > button').click( function() {
        
        if( $(this).html() == '비공개' ) {
          $(this).html('공개');
          this.style.color = "#fff";
          this.parentNode.style.backgroundColor = "#fe811c";
        }
        else {
            $(this).html('비공개');
            this.style.color = "#686868";
            this.parentNode.style.backgroundColor = "#eeeeee";
        }
    });
  });

  $(".my-page .my-tab-inner button").click(function(){

    $(".my-page .my-tab-inner").find("ul").animate({
        scrollLeft : $(this).offset().left - 20
    },350)
})