// select
var categorySelect = $(".make-category-select");
var categorySelectItem = categorySelect.find(".select-content li");
var categorySelectTitle = categorySelect.find(".select-top span");

var bgmSelect = $(".bgm-choice-select .bgm-select");
var bgmSelectItem = $(".bgm-choice-select .select-content li");
var bgmSelectTitle = $(".bgm-choice-select .select-top span");

var voiceSelect = $(".voice-choice-select .voice-select");
var voiceSelectItem = $(".voice-choice-select .select-content li");
var voiceSelectTitle = $(".voice-choice-select .select-top span");

var speedSelect = $(".slide-choice-select");
var speedSelectItem = $(".slide-choice-select .select-content li");
var speedSelectTitle = $(".slide-choice-select .select-top span");

var fontSelect = $(".font-choice-select");
var fontSelectItem = $(".font-choice-select .select-content li");
var fontSelectTitle = $(".font-choice-select .select-top span");

var weightSelect = $(".weight-choice-select");
var weightSelectItem = $(".weight-choice-select .select-content li");
var weightSelectTitle = $(".weight-choice-select .select-top span");

var sizeSelect = $(".size-choice-select");
var sizeSelectItem = $(".size-choice-select .select-content li");
var sizeSelectTitle = $(".size-choice-select .select-top span");

var expanded = false;

function showSelect(kind){
    if(!expanded){
        expanded = true;
        
        if(kind == "category"){
            categorySelect.addClass("show");
        }else if(kind == "bgm"){
            bgmSelect.addClass("show");
        }else if(kind == "voice"){
            voiceSelect.addClass("show");
        }else if(kind == "speed"){
            speedSelect.addClass("show");
        }else if(kind == "font"){
            fontSelect.addClass("show");
        }else if(kind == "weight"){
            weightSelect.addClass("show");
        }else if(kind == "size"){
            sizeSelect.addClass("show");
        }
    }else{
        expanded = false;

        if(kind == "category"){
            categorySelect.removeClass("show");
        }else if(kind == "bgm"){
            bgmSelect.removeClass("show");
        }else if(kind == "voice"){
            voiceSelect.removeClass("show");
        }else if(kind == "speed"){
            speedSelect.removeClass("show");
        }else if(kind == "font"){
            fontSelect.removeClass("show");
        }else if(kind == "weight"){
            weightSelect.removeClass("show");
        }else if(kind == "size"){
            sizeSelect.removeClass("show");
        }
    }
}

categorySelect.click(function(){
    showSelect("category");
})
categorySelectItem.click(function(){
    var thisText = $(this).text();
    categorySelectTitle.text(thisText);
})

bgmSelect.click(function(){
    showSelect("bgm");
})
bgmSelectItem.click(function(){
    var thisText = $(this).text();
    bgmSelectTitle.text(thisText);
})

voiceSelect.click(function(){
    showSelect("voice");
})
voiceSelectItem.click(function(){
    var thisText = $(this).text();
    voiceSelectTitle.text(thisText);
})

speedSelect.click(function(){
    showSelect("speed");
})
speedSelectItem.click(function(){
    var thisText = $(this).text();
    speedSelectTitle.text(thisText);
})

fontSelect.click(function(){
    showSelect("font");
})
fontSelectItem.click(function(){
    var thisText = $(this).text();
    fontSelectTitle.text(thisText);
})

weightSelect.click(function(){
    showSelect("weight");
})
weightSelectItem.click(function(){
    var thisText = $(this).text();
    weightSelectTitle.text(thisText);
})

sizeSelect.click(function(){
    showSelect("size");
})
sizeSelectItem.click(function(){
    var thisText = $(this).text();
    sizeSelectTitle.text(thisText);
})

// input-hover
var titleInput = $("#title-input");
var titleInputCont = $(".make-category-input");
var tagInput = $("#tag-input");
var tagInputCont = $(".make-tag-input");
var sourceInput = $(".source-input input");
var sourceInputCont = $(".source-input");

titleInput.focus(function(){
    focusAnim(titleInputCont);
})
titleInput.blur(function(){
    blurAnim(titleInputCont);
})
tagInput.focus(function(){
    focusAnim(tagInputCont);
})
tagInput.blur(function(){
    blurAnim(tagInputCont);
})
sourceInput.focus(function(){
    focusAnim(sourceInputCont);
})
sourceInput.blur(function(){
    blurAnim(sourceInputCont);
})

function focusAnim(el){
    el.addClass("hover");
}
function blurAnim(el){
    el.removeClass("hover");
}

// slide
var makeSlideItem = $(".make-list-item");
var makeCanvasImg = $(".make-img-container img");
var makeSlidePrevBtn = $(".make-slide .prev-btn");
var makeSlideNextBtn = $(".make-slide .next-btn");
var makeSlideCurrentNum = $(".make-slide .current-number");
var makeSlideTotalNum = $(".make-slide .total-number");
var makeSlideActiveItem;
var makeSlideActiveImg;
var slideClickIdx;
var slideIdx = 0;

makeSlideItem.click(function(){
    slideClickIdx = $(this).index();
    
    makeSlideItem.removeClass("active");

    makeSlideActiveImg = makeSlideItem.eq(slideClickIdx).find("img").attr("src");
    makeCanvasImg.attr("src",makeSlideActiveImg);
    makeSlideItem.eq(slideClickIdx).addClass("active");
})

makeSlidePrevBtn.click(function(){
    
    if(slideIdx == 0){

        slideIdx = 4;
        makeSlideCurrentNum.text(makeSlideTotalNum.text());
        
    }else{
        makeSlideCurrentNum.text(slideIdx);        
        
        slideIdx--;
    }

})
makeSlideNextBtn.click(function(){
    
    slideIdx++;

    console.log(slideIdx);
    if(slideIdx == makeSlideTotalNum.text()){

        slideIdx = 0;
        
        makeSlideCurrentNum.text(1);
        
    }else{
        
        makeSlideCurrentNum.text(slideIdx + 1);        
    }
})

// range
$('input[type=range]').on('input', function(){
    var val = $(this).val();
    $(this).css('background', 'linear-gradient(to right, #ff7800 0%, #ff7800 '+ val +'%, #e1e1e1 ' + val + '%, #e1e1e1 100%)');
});

// toggle
var toggleBtn = $(".voice-toggle-btn");
toggleBtn.click(function(){
    if($(this).hasClass("active")){
        toggleBtn.removeClass("active");
    }else{
        toggleBtn.addClass("active");
    }
})

// tab menu
var tabMenuBtn = $(".make-editer-tab li");
var tabMenuContent = $(".make-editer-tab-content>li");
tabMenuBtn.click(function(){
    var idx = $(this).index();
    
    tabMenuContent.removeClass("active");
    tabMenuBtn.removeClass("active");
    tabMenuContent.eq(idx).addClass("active");
    tabMenuBtn.eq(idx).addClass("active");
})

// colorpicker popup
var colorpicker = $(".colorpicker-content");
var colorpickerOpenBtn = $(".colorpicker");
var colorpickerCloseBtn = $(".colorpicker-close-btn");
var colorpickerPrevBtn = $(".colorpicker-prev-btn");
var colorpickerHeader = $(".colorpicker-title > div");
var colorpickerContents = $(".colorpicker-main > div");
var colorpickerChangeBtn = $(".open-pallate-btn");
var colorpickerSpoid = $(".spoid");

colorpickerOpenBtn.click(function(){
    colorpicker.addClass("show");
})
colorpickerCloseBtn.click(function(){
    colorpicker.removeClass("show");
})
colorpickerPrevBtn.click(function(){
    if(colorpickerContents.eq(0).hasClass("active")){
        colorpickerContents.eq(0).removeClass("active");
        colorpickerContents.eq(1).addClass("active");
    }else{
        colorpickerContents.eq(0).addClass("active");
        colorpickerContents.eq(1).removeClass("active");
    }
})
colorpickerSpoid.click(function(){
    if($(this).hasClass("active")){
        $(this).removeClass("active");
    }else{
        $(this).addClass("active");
    }
})
colorpickerChangeBtn.click(function(){
    colorpickerContents.eq(0).removeClass("active");
    colorpickerContents.eq(1).addClass("active");
    
    colorpickerHeader.eq(0).removeClass("active");
    colorpickerHeader.eq(1).addClass("active");

    colorpickerChangeBtn.addClass("hide");
})
colorpickerPrevBtn.click(function(){
    colorpickerContents.eq(0).addClass("active");
    colorpickerContents.eq(1).removeClass("active");

    colorpickerHeader.eq(0).addClass("active");
    colorpickerHeader.eq(1).removeClass("active");

    colorpickerChangeBtn.removeClass("hide");
})

// bgm button
var bgmOpenBtn = $(".bgm-btn");
var bgmContent = $(".bgm-select");
var bgmCloseBtn = $(".bgm-select-close-btn");

bgmOpenBtn.click(function(){
    bgmContent.addClass("active");
})
bgmCloseBtn.click(function(){
    bgmContent.removeClass("active");
})

// list swiper
var listSwiper = new swiper(".list-swiper",{
    slidesPerView: 4,
    spaceBetween: 12,
    freeMode: true
})