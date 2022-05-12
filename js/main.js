const swiper1 = new Swiper('.first', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    items:4,
    autoplay:true,
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay:true,

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
   },
});

$(window).on('load',function(){
    $(".gif").delay(2000).fadeOut(500)
})
$(".button").click(function(){
    $(".button").removeClass("active")
    $(this).addClass("active")
})
$(".all").click(function(){
    $(".pizza1").removeClass("none")
    $(".cola").removeClass("none")
    $(".sezar").removeClass("none")
    $(".pasta").removeClass("none")
    $(".cookie").removeClass("none")
    $(".pizza2").removeClass("none")
    $(".sezar2").removeClass("none")
    $(".pizza3").removeClass("none")
})
$(".drinks").click(function(){
    $(".pizza1").addClass("none")
    $(".cola").removeClass("none")
    $(".sezar").addClass("none")
    $(".pasta").addClass("none")
    $(".cookie").addClass("none")
    $(".pizza2").addClass("none")
    $(".sezar2").addClass("none")
    $(".pizza3").addClass("none")
})
$(".salads").click(function(){
    $(".pizza1").addClass("none")
    $(".cola").addClass("none")
    $(".sezar").removeClass("none")
    $(".pasta").addClass("none")
    $(".cookie").addClass("none")
    $(".pizza2").addClass("none")
    $(".sezar2").addClass("none")
    $(".pizza3").addClass("none")
})
$(".pastas").click(function(){
    $(".pizza1").addClass("none")
    $(".cola").addClass("none")
    $(".sezar").addClass("none")
    $(".pasta").removeClass("none")
    $(".cookie").addClass("none")
    $(".pizza2").addClass("none")
    $(".sezar2").addClass("none")
    $(".pizza3").addClass("none")
})
$(".burgers").click(function(){
    $(".pizza1").addClass("none")
    $(".cola").addClass("none")
    $(".sezar").addClass("none")
    $(".pasta").addClass("none")
    $(".cookie").removeClass("none")
    $(".pizza2").addClass("none")
    $(".sezar2").addClass("none")
    $(".pizza3").addClass("none")
})
$(".deserts").click(function(){
    $(".pizza1").addClass("none")
    $(".cola").removeClass("none")
    $(".sezar").addClass("none")
    $(".pasta").addClass("none")
    $(".cookie").removeClass("none")
    $(".pizza2").addClass("none")
    $(".sezar2").addClass("none")
    $(".pizza3").addClass("none")
})
$(".pizzas").click(function(){
    $(".pizza1").addClass("none")
    $(".cola").addClass("none")
    $(".sezar").addClass("none")
    $(".pasta").addClass("none")
    $(".cookie").addClass("none")
    $(".pizza2").addClass("none")
    $(".sezar2").removeClass("none")
    $(".pizza3").removeClass("none")
})