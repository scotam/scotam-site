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
        // $.localScroll();

        $('#menu2').localScroll({
            offset: -75,
            hash: true
        });
    };

    if( $.fn.isotope ) {
        var $grid = $('.ul-lightbox-people').isotope({
        // options
            // layoutMode: 'fitColumns'    
        });

        // filter items on button click
        $('.filter_group').on( 'click', 'a', function(evt) {
            var filterValue = $(this).attr('data-filter');
            // console.log(filterValue, 'filterval');
            $grid.isotope({ filter: filterValue });

            evt.preventDefault();
        });
    }
    

})(window, jQuery);
