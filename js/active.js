(function($) {
    'use strict';	
	//===== home-slider
	
	$('.man_timeline_carousel').owlCarousel({
        center: false,
        items: 4,
        loop: false,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000,
        pauseOnHover: false,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">']
    });
	
	
	$('.man_testimonials').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: false,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">']
    });
		
		
	$('.man_news').owlCarousel({
        center: false,
        items: 2,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 10000,
        pauseOnHover: false,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
            },
            600:{
                items:2,
                dots: true,
            },
            1000:{
                items:2,
                dots: true,
            }
        }
    });	
	
	
	$('.event').owlCarousel({
        center: false,
        items: 2,
        loop: true,
        stagePadding: 0,
        margin: 15,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">']
    });
	
	
	
	$('.slide-one-item').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">']
    });	
	
	
	
	$('.product-slider').owlCarousel({
        center: false,
        items: 4,
        loop: true,
        stagePadding: 0,
        margin: 15,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: false,
        nav: true,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
                dots:true,
            },
            992:{
                items:3,
                nav:false,
                dots:true,
            },
            1101:{
                items:4,
                dots: false,
                nav:true,
            }
        }
    });
    
    
	$('.promo-slider').owlCarousel({
        center: false,
        items: 4,
        loop: true,
        stagePadding: 0,
        margin: 15,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
                dots:true,
            },
            992:{
                items:3,
                nav:false,
                dots:true,
            },
            1101:{
                items:4,
                dots: true,
                nav: false,
            }
        }
    });	
	
	

	
	$('.manu-sector-slider').owlCarousel({
        center: false,
        items: 3,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav:false,
            },
            600:{
                items:2,
                nav:false,
                dots:true,
            },
            992:{
                items:3,
                nav:false,
                dots:true,
            },
            1101:{
                items:4,
            }
        }
    });	
	
	

	
	$('.trade-service-slider').owlCarousel({
        center: false,
        items: 2,
        loop: true,
        stagePadding: 0,
        margin: 0,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">']
    });	
	

	
	$('.testimonial-slider').owlCarousel({
        center: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1500,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">']
    });	


	
	$('.partner-slider').owlCarousel({
        center: false,
        items: 4,
        loop: true,
        stagePadding: 0,
        margin: 15,
        smartSpeed: 1500,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: false,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">']
    });	
	

	
	$('.customer-experience-slider').owlCarousel({
        center: false,
        items: 4,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 500,
        autoplayTimeout: 10000,
        autoplay: true,
        pauseOnHover: true,
        dots: true,
        nav: false,
        navText: ['<span class="fas fa-chevron-left">', '<span class="fas fa-chevron-right">']
    });	
	
	
	

	
	
	
	
	
		
})(jQuery);