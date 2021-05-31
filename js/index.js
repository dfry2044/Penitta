//c1 - slider
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//c2 - slider
// 위치 조정 필요 
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 40,
    pagination: {
        el: ".mySwiper2 .swiper-pagination",
        clickable: true,
    },
});

//c-3 slider

var popImg = document.querySelector('.pop-img-img');
var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    autoplay: {
       delay: 3500,
        disableOnInteraction: false,
     },
    on: {
        // transitionStart: function () {
        //     popImg.classList.remove('active');
        //     setTimeout(function () {
        //         popImg.classList.add('active');
        //     }, 500);
        // },
        // transitionEnd: function () {
        //     var activeSlider = document.querySelector('.mySwiper3 .swiper-slide-active img').getAttribute('src');
        //     popImg.setAttribute('src', activeSlider);
        // },
    },
});

var swiper2 = new Swiper(".pop-img", {
    slidesPerView: 1,
    loop: true,
    direction:'vertical',
    centeredSlides: true,
    autoplay: {
       delay: 3500,
        disableOnInteraction: false,
     },
    on: {
        // transitionStart: function () {
        //     popImg.classList.remove('active');
        //     setTimeout(function () {
        //         popImg.classList.add('active');
        //     }, 500);
        // },
        // transitionEnd: function () {
        //     var activeSlider = document.querySelector('.mySwiper3 .swiper-slide-active img').getAttribute('src');
        //     popImg.setAttribute('src', activeSlider);
        // },
    },
});


//header-scroll 
ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: {
        className: 'active',
        targets: 'header'
    }
});

//pop-img-up
var pop = document.querySelector('.pop-img');
gsap.fromTo(pop, {}, {
    scrollTrigger: {
        trigger: '.c3',
        start: 'top-=300',
        end: '+=1500',
        toggleClass: {
            className: 'active',
            targets: '.pop-img'
        }
    }
});
