var tabBtn = $(".my-tab-inner li");
var tabContent = $(".my-card .card-list");
var editButton = $(".edit-button");
var commentEdit = $(".comment-edit");
var commentBox = $(".comment-edit-click");
var editButtonAfter = $(".edit-button-box > button");
var editButtonEsc = $(".noedit-button-box > button");
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

editButton.click(function(){
    titleIdx = $(this).closest(".comment-item").index();

    $(this).closest(".comment-content").addClass("hide");
    $(this).closest(".comment-etc-tooltip").removeClass("show");

    commentEdit.eq(titleIdx).addClass("click");
    commentBox.eq(titleIdx).addClass("active");
    editButtonClear.eq(titleIdx).addClass("active");
});

editButtonAfter.click(function(){
    titleIdx = $(this).closest(".comment-item").index();

    $(this).closest(".comment-item").find(".comment-content").removeClass("hide");

    commentEdit.eq(titleIdx).removeClass("click");
    commentBox.eq(titleIdx).removeClass("active");
    editButtonClear.eq(titleIdx).removeClass("active");
});

editButtonEsc.click(function(){
    titleIdx = $(this).closest(".comment-item").index();

    $(this).closest(".comment-item").find(".comment-content").removeClass("hide");

    commentEdit.eq(titleIdx).removeClass("click");
    commentBox.eq(titleIdx).removeClass("active");
    editButtonClear.eq(titleIdx).removeClass("active");
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