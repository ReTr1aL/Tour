$(document).ready(function(){
  $("#maincarousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
  });
});

$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 0,
    loop: false,
    nav: true,
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1,
      },
      // breakpoint from 480 up
      960 : {
        items: 2,
      },
      // breakpoint from 768 up
      1300 : {
        items: 3,
      }
  }
  });
});