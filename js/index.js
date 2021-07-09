//c1 - slider
var swiper = new Swiper(".mySwiper_", {
    autoplay: true,
    speed: 3500,
    effect : 'fade',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
//c2 - slider
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 5,
    spaceBetween: 40,
    pagination: {
        el: ".mySwiper2 .swiper-pagination",
        clickable: true,
    },
});

//c-3 slider

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
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
