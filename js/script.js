(function($) {

	

	"use strict";
	//Update Header Style and Scroll to Top

	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');

			var scrollLink = $('.scroll-to-top');
			var scrollLink = $('.scroll-to-toped');
			
			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
			
		}
	}


	headerStyle();

	

	

	//Event Countdown Timer

	if($('.time-countdown').length){  

		$('.time-countdown').each(function() {

		var $this = $(this), finalDate = $(this).data('countdown');

		$this.countdown(finalDate, function(event) {

			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));

		});

	 });

	}

	

	

	//Submenu Dropdown Toggle

	if($('.main-header li.dropdown ul').length){

		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		

		//Dropdown Button

		$('.main-header li.dropdown .dropdown-btn').on('click', function() {

			$(this).prev('ul').slideToggle(500);

		});

		

		//Disable dropdown parent link

		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {

			e.preventDefault();

		});

	}

/* ==========================================================================

   When document is Scrollig, do

   ========================================================================== */

	

	$(window).on('scroll', function() {

		headerStyle();

	});

	

/* ==========================================================================

   When document is loading, do

   ========================================================================== */

	
	//===== home-slider
	



})(window.jQuery);