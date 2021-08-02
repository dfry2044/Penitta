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
var makeCanvasImg = $(".make-img-container img");
var makeListItem = $(".make-list ul .make-list-item");
var makeSlidePrevBtn = $(".make-slide .prev-btn");
var makeSlideNextBtn = $(".make-slide .next-btn");
var makeSlideCurrentNum = $(".make-slide .current-number");
var makeSlideTotalNum = $(".make-slide .total-number");
var makeSlideWrap = $(".make-slide-wrap-pc .make-slide-img-group");
var makeSlideItem = $(".make-slide-wrap-pc .make-slide-img-group img");
var makeSlideActiveItem;
var makeSlideActiveImg;
var slideClickIdx;
var slideItemIdx = 0;
var slideIdx = 0;

var makeSwiper = new Swiper(".make-slide-wrap",{
    effect:"fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el : ".make-slide-number-pagination",
        type : "fraction"
    }
})

makeListItem.click(function(){
    slideItemIdx = $(this).index();

    if($(window).innerWidth() >= 1024){
        makeSlideWrap.removeClass("active");
    
        makeSlideWrap.eq(slideItemIdx).addClass("active");
    
        makeListItem.removeClass("active");
    
        makeListItem.eq(slideItemIdx).addClass("active");
    }else{

        makeListItem.closest(".swiper-wrapper").find("li.make-list-item").removeClass("active");
    
        makeListItem.closest(".swiper-wrapper").find("li.make-list-item").eq(slideItemIdx).addClass("active");
    }
})

makeSlidePrevBtn.click(function(){
    
    if(slideIdx == 0){

        return false;

    }else{
        makeSlideCurrentNum.text(slideIdx);        
        
        slideIdx--;

        makeSlideWrap.eq(slideItemIdx).find(makeSlideItem).removeClass("active");

        makeSlideWrap.eq(slideItemIdx).find(makeSlideItem).eq(slideIdx).addClass("active");
    }

})
makeSlideNextBtn.click(function(){
    
    if(slideIdx == makeSlideWrap.eq(slideItemIdx).find(makeSlideItem).length - 1){

        return false;

    }else{
        slideIdx++;
        
        makeSlideCurrentNum.text(slideIdx + 1);        
        
        makeSlideWrap.eq(slideItemIdx).find(makeSlideItem).removeClass("active");

        makeSlideWrap.eq(slideItemIdx).find(makeSlideItem).eq(slideIdx).addClass("active");
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

var tabMenuBtnMo = $(".make-editer-tab-mo li");
var tabMenuContentMo = $(".make-editer.mo .make-editer-tab-content>li");
var makeEditerMo = $(".make-editer.mo");
var makeEditerDimMo = $(".make-editer.mo .dim");

tabMenuBtnMo.click(function(){
    var idx = $(this).index();

    tabMenuContentMo.removeClass("active");
    tabMenuBtnMo.removeClass("active");
    tabMenuContentMo.eq(idx).addClass("active");
    tabMenuBtnMo.eq(idx).addClass("active");
    
    makeEditerMo.addClass("show");
    makeEditerDimMo.addClass("shopw");
})

makeEditerDimMo.click(function(){
    makeEditerMo.removeClass("show");
    makeEditerDimMo.removeClass("show");
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
var colorpickerDim = $(".colorpicker-dim");

colorpickerOpenBtn.click(function(){
    colorpicker.addClass("show");
    colorpickerDim.addClass("show");
})
colorpickerCloseBtn.click(function(){
    colorpicker.removeClass("show");
    colorpickerDim.removeClass("show");
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
    colorpickerContents.eq(2).removeClass("active");
    colorpickerContents.eq(3).addClass("active");
    
    colorpickerHeader.eq(0).removeClass("active");
    colorpickerHeader.eq(1).addClass("active");
    colorpickerHeader.eq(2).removeClass("active");
    colorpickerHeader.eq(3).addClass("active");

    colorpickerChangeBtn.addClass("hide");
})
colorpickerPrevBtn.click(function(){
    colorpickerContents.eq(0).addClass("active");
    colorpickerContents.eq(1).removeClass("active");
    colorpickerContents.eq(2).addClass("active");
    colorpickerContents.eq(3).removeClass("active");

    colorpickerHeader.eq(0).addClass("active");
    colorpickerHeader.eq(1).removeClass("active");
    colorpickerHeader.eq(2).addClass("active");
    colorpickerHeader.eq(3).removeClass("active");

    colorpickerChangeBtn.removeClass("hide");
})

// bgm button
var bgmOpenBtn = $(".bgm-btn");
var bgmContent = $(".bgm-select");
var bgmCloseBtn = $(".bgm-select-close-btn");
var bgmSelectDim = $(".bgm-select-dim");

bgmOpenBtn.click(function(){
    bgmContent.addClass("active");
    bgmSelectDim.addClass("active");
})
bgmCloseBtn.click(function(){
    bgmContent.removeClass("active");
    bgmSelectDim.removeClass("active");
})

// list swiper
var listSwiper = new Swiper(".list-swiper",{
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: true
})

// preview
var previewOpenBtn = $(".preview-btn");
var previewCloseBtn = $(".preview-close-btn");
var previewContent = $(".preview");
var previewDim = $(".preview-dim");
var previewItem = $(".preview-content li");
var previewPrevBtn = $(".preview-controller .prev-btn");
var previewNextBtn = $(".preview-controller .next-btn");
var previewAutoPlayBtn = $(".preview-controller .autoplay-btn");
var previewCurrent = $(".preview-number .current");
var previewTotal = $(".preview-number .total");

var previewIdx = 1;
var previewItemLength;

previewOpenBtn.click(function(){
    showPreview();
})
previewCloseBtn.click(function(){
    hidePreview();
})
previewPrevBtn.click(function(){
    prevPreview();
})
previewNextBtn.click(function(){
    nextPreview();
})
previewAutoPlayBtn.click(function(){
    autoPlayPreview();
})

function showPreview(){
    previewItemLength = previewItem.length;

    previewContent.addClass("show");
    previewDim.addClass("show");

    previewCurrent.text("1");
    previewTotal.text(previewItemLength);
}

function hidePreview(){
    previewContent.removeClass("show");
    previewDim.removeClass("show");
}

function prevPreview(){
    if(previewIdx == 1){

        return false;
    }else{
        previewNextBtn.removeClass("last");
        previewIdx--;
        previewCurrent.text(previewIdx);
        
        previewItem.removeClass("active");
        previewItem.eq(previewIdx - 1).addClass("active");
        
        if(previewIdx == 1){
            
            previewPrevBtn.addClass("last");
            
            return false;
        }
    }
}

function nextPreview(){
    if(previewIdx == previewItemLength){

        return false;
    }else{
        previewPrevBtn.removeClass("last");
        previewIdx++;
        previewCurrent.text(previewIdx);

        previewItem.removeClass("active");
        previewItem.eq(previewIdx - 1).addClass("active");

        if(previewIdx == previewItemLength){

            previewNextBtn.addClass("last");
            
            return false;
        }
    }
}

function autoplay(){
    if(previewIdx == previewItemLength){
                
        clearInterval(autoplay);

        return false;
    }else{
        previewPrevBtn.removeClass("last");
        previewIdx++;
        previewCurrent.text(previewIdx);

        previewItem.removeClass("active");
        previewItem.eq(previewIdx - 1).addClass("active");

        if(previewIdx == previewItemLength){

            previewNextBtn.addClass("last");

            return false;
        }
    }
}
var autoPlaySpeed = 500;
var autoPlayInterval = setInterval(autoplay, autoPlaySpeed);

clearInterval(autoPlayInterval);
var autoPlayToggle = true;

function autoPlayPreview(){
    if(previewAutoPlayBtn.hasClass("play")){
        previewAutoPlayBtn.removeClass("play");

        clearInterval(autoPlayInterval);
        autoPlayToggle = false;
    }else{
        previewAutoPlayBtn.addClass("play");

        autoPlayInterval = setInterval(autoplay,autoPlaySpeed);
        autoPlayToggle = true;
    }
}

// mobile - tag input open&close
var tagInputMobile = $("#tag-input-m");
var tagInputOpenBtn = $(".make-tag-btn");
var tagInputCloseBtn = $(".tag-input-m-close");

tagInputOpenBtn.click(function(){
    tagInputMobile.addClass("show");
})
tagInputCloseBtn.click(function(){
    tagInputMobile.removeClass("show");
})