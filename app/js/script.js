'use strict'

/*
 * Either assign object to already 
 established object or start over!!!
 */
var run = window.run || {};

run = {

	time : 1,
	replayTime: 0,
	count: 0,
	bannerTime: null,
	root: window,
	myCarousel: null,
	logIn: null,
	logInModal: null,
	iconFade: null,

	fadeNum: true,

	init: function(){
		run.loadSpriteSheet();
	},

	setUpElements: function(){
		run.myCarousel = $('#myCarousel');
		run.logIn = $('#log-in');
		run.logInModal = $('#log-in-modal');
		run.contactM = $('#contact');
		run.contactModal = $('#contact-modal');
		run.iconFade = $('.icon-fade');
		run.navliHref = $('.nav li a');
		run.navOffset = $('.navbar-header').height();
		run.myCarousel.maxheight = '300' + 'px';
		//
		run.control();
	},

	//PRELOAD SPRITESHEETS | IMAGES
	loadSpriteSheet: function(){
	    var loadedImages = 0;
	    var imageArr = [
	    '../images/spriteSheet.png'
	    ];

	    preloadImages();

	    function preloadImages(){
	        for(var i = 0; i<imageArr.length;i++){
	            var tempImage = new Image();
	            tempImage.src = imageArr[i];
	            tempImage.onload = trackProgress();
	        }
	        //console.log('loadedImages ',imageArr);
	    };

	    function trackProgress(){
	        loadedImages++;
	        if(loadedImages == imageArr.length){
	        	//*RUN FUNCTION HERE*
	        	run.setUpElements();
	        }
	    };

	},

	//FADE IN 
	fadeIn: function(object){
		TweenLite.to(object, run.time - .5, {alpha: .5, ease:Quad.easeOut});
		//console.log('fadeOut = ', object);	
	},

	//FADE OUT 
	fadeOut: function(object){
		TweenLite.to(object, run.time - .5, {alpha: 1, ease:Quad.easeOut});
		//console.log('fadeOut = ', object);
	},

	//KILL TWEENS
	killTweens: function(object){
		TweenLite.killTweensOf(object);
	},

	scrollToAnchor: function($Object){
		var $anchor = $Object;
		if( $( $anchor.attr('href') ) === '#' ){
			$( $anchor.attr('href') ) = '';
		}else {
			TweenLite.to($('html, body'), run.time - .5, 
			{scrollTop: ($($anchor.attr('href')).offset().top - run.navOffset), ease:Quad.easeOut});
		}
	},

	//MAIN ANIMATION
	control: function(){
		//Nav Scroll to
		run.navliHref.on('click', function(e){
			e.preventDefault();
			run.scrollToAnchor( $(this) );
		});

		//Contact Modal
		run.logIn.on('click', function(e){
			e.preventDefault();
			run.logInModal.modal();
			console.log('clicked');
		});

		//Log in Modal
		run.contactM.on('click', function(e){
			e.preventDefault();
			run.contactModal.modal();
			console.log('clicked');
		});

		//Tool-Tip
		$('[data-toggle="tooltip"]').tooltip();

		//Footer Icon fade
		run.iconFade.hover(function(e){
			e.preventDefault();
			run.fadeIn($(this));
		}, function (){
			run.fadeOut($(this));
		});


		
		
	}
	
};

document.addEventListener('DOMContentLoaded', function(){
	console.log('WORKING NOW');
	run.init();
});