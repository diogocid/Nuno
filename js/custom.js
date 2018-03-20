
$(document).ready(function() {
	$('body > div.navbar.navbar-inverse.navbar-fixed-top > div > div.navbar-collapse.collapse > ul > li a').each(function(){
		if($(this).attr('href') == window.location.pathname.replace('/',''))
			$(this).addClass('aActive');
	});
});