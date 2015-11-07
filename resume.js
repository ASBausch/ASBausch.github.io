$(document).ready(function(){
	$('main').hide();
	$('button').click(function(){
		$('button').hide();
		$('main').fadeIn(1000);
	});	

//adds explanation years to vin circle labels and bolds upon click
	
	var highlightit = function() {
		var years = $(this).data('years')
		if($(this).has(".detail").length) {
			$(this).find(".detail").remove();
		} else {	
		    $(this).append('<span class= "detail"><br />' + years + 'years</span>');
	    }
    };

	$('section.vincol').children().filter(":even").on('click', highlightit)

});





