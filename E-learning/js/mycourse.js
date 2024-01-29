$(document).ready(function() {
  
    setTimeout(function() {
        $(".main-title").fadeIn(2000);
    }, 250);
  
   
   setTimeout(function() {
       $(".imgs").fadeIn(2000);
    }, 250);
  
    
    setTimeout(function() {
        $(".card").fadeIn(2000);
     }, 250);
  });
    
      $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  })