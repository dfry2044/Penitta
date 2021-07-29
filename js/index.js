
// c1
var mainSwiper = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: false,
    keyboard: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 0,
    grabCursor: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

//c2

var twoSwiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });

//c-3 slider

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3500,
    },
    on: {
        touchStart: function () {
            swiper.autoplay.stop();
        },
        touchEnd: function () {
            swiper.autoplay.start();
        }
    },
});
swiper.autoplay.stop();
setInterval(function () {
    swiper.autoplay.start();
}, 3500);

var swiper2 = new Swiper(".pop-img", {
    slidesPerView: 'auto',
    loop: true,
    direction: 'vertical',
    centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 3500,
    },
    on: {
        touchStart: function () {
            swiper2.autoplay.stop();
        },
        touchEnd: function () {
            swiper2.autoplay.start();
        }
    },
});
swiper.on('transitionStart', function () {
    swiper2.slideTo(this.activeIndex, 1000);
})
swiper2.on('transitionStart', function () {
    swiper.slideTo(this.activeIndex, 1000);
})
swiper2.autoplay.stop();
setInterval(function () {
    swiper2.autoplay.start();
}, 3500)






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
