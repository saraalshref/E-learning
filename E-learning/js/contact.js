let off = $("#con").offset().top;
let nav = $(".navbar");

$(window).scroll(function() {
    let scrol = $(window).scrollTop();

    if (scrol >= off) {
        nav.css("position","fixed");
        nav.css("width","100%")
    } 
    else{
        nav.css("position","sticky");
    }
});

let btnScroll=$("#btnScroll");
let offcontactUs = $("#con").offset().top;


$(window).scroll(function() {
    let scrolll = $(window).scrollTop();

    if (scrolll >= offcontactUs) {
        btnScroll.css("display","block");
       
    } 
    else{
        btnScroll.css("display","none");
    }
   
});

btnScroll.on('click', function() {
    $('html').animate({
      scrollTop: 0
    }, 500);
    
})




$(".h1").show(1000)
$(".t1").show(500,()=>{
    $(".t2").show(500)
     $(".t3").fadeIn(500)
})

