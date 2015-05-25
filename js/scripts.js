$(function () {

    /*
    // Menu

    $(".menu ul li a").click(function(){
        $('.menu a').removeClass('active');
        $(this).addClass('active');

        var subitem = $(this).parent().find('ul');

        $(".menu li ul").slideUp();
         if(subitem.length){    
             if(subitem.is(':visible')){
                    subitem.slideUp();
            }else{
              subitem.slideDown();
            }
         }
    });
    */

    // Menu mobile

    $('.menu-mobile a').click(function(e){
        e.preventDefault();
        $('.menu-content').slideToggle();
    });


    $(window).resize(function(){
        if ($(window).width() > 740 ) {
            $('.menu-content').removeAttr('style');
        }
    });

    // Procurar

    $(".bt-procurar").click(function(e){
        e.preventDefault();
        $('.procurar').fadeToggle();
    });

    // OWL Carousel

    $("#owl-carousel").owlCarousel({
        autoPlay: true,
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true
    });

})
