var swiper = new Swiper(".swiper-container", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        slideChange: function() {
            var index = swiper.activeIndex;
            $('.tab').find("li").eq(index).addClass("yanse").siblings().removeClass("yanse");
            $('.tab').find("li").eq(index).addClass("active").siblings().removeClass("active");
        },
        init: function() {
            swiperAnimate(this);
        }
    }
});
$('.tab ul').on('click', 'li', function() {
    var ind = $(this).index();
    console.log(ind);
    $(this).addClass("yanse").siblings().removeClass("yanse");
    $(this).addClass("active").siblings().removeClass("active");
    swiper.slideTo(ind, 300, false);
})
var bscrol = new BScroll('.one');
var bscroll = new BScroll('.two');
var bscrolll = new BScroll('.three');