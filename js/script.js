$(document).ready(function(){

    //counterup 
    $('.count1').counterUp({
        delay: 10,
        time: 1000
    });

    //Review slider code
    $(".owl-carousel").owlCarousel({
        autoplay:true,
        autoplayHoverPause:true,
        items:4,
        dots:true,
        loop:true,
        lazyload:true,
        margin:5,
        stagePadding:5,
        responsive:{
            0:{
                items:1,
                dots:true	
            },
            485:{
                items:1,
                dots:true	
            },
            728:{
                items:1,
                loop:true
            },
            960:{
                items:1,
                loop:true	
            },
            1200:{
                items:1,
                dots:true	
            }
        }
        });


        //End of slide code
});

