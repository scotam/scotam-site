!(function (window, $) {
    "use strict";

    $(window).scroll(function(e){
        parallaxScroll();
    });

    function parallaxScroll(){
        var scrolled = $(window).scrollTop();
        $('#parallax-bg-3').css('top',(0-(scrolled*.75))+'px');
    }

    // Accordiong Navigation
    if( $.fn.navAccordion ) {

        $('.mainNav').navAccordion({

            expandButtonText: '<i class="fa fa-plus"></i>',  //Text inside of buttons can be HTML
            collapseButtonText: '<i class="fa fa-minus"></i>',
            // delayLink: true
            
        });
    }

    // Local Scroll Init
    if( $.fn.localScroll ) {        
        $('#menu2').localScroll({
            offset: -100,
            hash: true
        });
    }
    

})(window, jQuery);
