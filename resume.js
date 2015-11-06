$(document).ready(function(){
	$('main').hide();
	$('button').click(function(){
		$('button').hide();
		$('main').fadeIn(1000);
	});	

//adds explanation years to vin circle labels and bolds upon click
	
	var highlightit = function(){
		var years = $(this).data('years')
		$(this).append('<br />' + years + ' years');
		$(this).addClass('labelchange');
	}

	$('section.vincol').children().filter(":even").one('click', highlightit)

});





