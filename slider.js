function windowSize(){
    if($(window).innerWidth() < '960'){
        $(function() {
            // Owl Carousel
            var owl = $(".owl-carousel");
            owl.owlCarousel({
              items: 1,
              margin: 0,
              loop: false,
              nav: true
            });
          }); 
    }
    if ($(window).innerWidth() < '1300'){
        $(function() {
            // Owl Carousel
            var owl = $(".owl-carousel");
            owl.owlCarousel({
              items: 2,
              margin: 0,
              loop: false,
              nav: true
            });
          });
    } else {
        $(function() {
            // Owl Carousel
            var owl = $(".owl-carousel");
            owl.owlCarousel({
              items: 3,
              margin: 0,
              loop: false,
              nav: true
            });
          });
    }
}
$(window).on('load resize',windowSize);