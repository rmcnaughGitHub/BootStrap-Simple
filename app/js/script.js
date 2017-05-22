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

	init: function(){
		run.loadSpriteSheet();
		run.myCarousel = document.getElementById('myCarousel');
		run.myCarousel.maxheight = '300' + 'px';
		
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
	        	run.control();
	        }
	    };

	},

	//ALL EVENT LISTENERS
	eventListeners: function(object){
		
	},


	//KILL TWEENS
	killTweens: function(object){
		TweenLite.killTweensOf(object);
	},

	//MAIN ANIMATION
	control: function(){

		/*/Carousel Controls
		run.myCarousel.carousel({
		  interval: 4000
		});
		run.myCarousel.on('slide.bs.carousel', function () {
		  //myCarousel.carousel('pause');
		  console.log('Slide Complete');
		});*/
			
		
	}
	
};

document.addEventListener('DOMContentLoaded', function(){
	console.log('WORKING NOW');
	run.init();
});