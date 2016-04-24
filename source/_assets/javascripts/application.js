$(function() {
	// Scroll to assigned section on button click

	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }

	});

	// Tooltip on hover

	var $info = $('[class^="icon"]');
	$info.each( function () {
	  var dataInfo = $(this).data("tooltip");
	  $( this ).append('<span class="inner" >' + dataInfo + '</span>');
	});
});