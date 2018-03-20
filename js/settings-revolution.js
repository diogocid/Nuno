var revapi;

jQuery(document).ready(function() {

	revapi = jQuery('.fullwidthbanner').revolution({
		delay:4000,
		startwidth:1440,
		startheight:600,
		fullWidth:"on",
		hideThumbs:10,
		navigationType: "none",
		videoJsPath:"js/videojs/"
	});

});	//ready