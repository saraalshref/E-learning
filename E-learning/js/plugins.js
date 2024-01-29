setTimeout(function() {
    $(document).ready(function() {
      $(".text-white").fadeIn(2000);
    });
  }, 500);
  
  $(document).ready(function() {
    if ($(".animation").length) {
      setTimeout(scrollCards, 0); 
      setTimeout(scrollAboutUs, 1000); 
      setTimeout(scrollInstructor, 1600); 
    }
  });
  
  function scrollAboutUs() {
    $(window).scroll(function() {
      $(".animation").each(function() {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
  
        if (scroll > position - windowHeight) {
          $(".aboutus-element").addClass("open");
        }
      });
    });
  }
  
  function scrollInstructor() {
    $(window).scroll(function() {
      $(".animation").each(function() {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
  
        if (scroll > position - windowHeight) {
          $(".instructor-element").addClass("open");
        }
      });
    });
  }
  
  function scrollCards() {
    $(window).scroll(function() {
      $(".animation").each(function() {
        const position = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
  
        if (scroll > position - windowHeight) {
          $(".about-card").addClass("open");
        }
      });
    });
  }
  