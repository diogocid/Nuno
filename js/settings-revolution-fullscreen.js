var revapi;

jQuery(document).ready(function() {

	revapi = jQuery('.fullscreenbanner').revolution({
		delay:4000,
		startwidth:1440,
		startheight:600,
		fullScreen:"on",
		hideThumbs:10,
		navigationType: "none",
		videoJsPath:"js/videojs/"
	});

});	//ready