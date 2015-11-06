$(document).ready(function(){
	$('main').hide();
	$('button').click(function(){
		$('button').hide();
		$('main').fadeIn(1000);
	});	

//adds explanation years to vin circle labels and bolds upon click
//needs refactoring
//can I refactor these functions to make ONE
	
	var highlightit = function(){
		var years = $(this).data('years')
		$(this).append('<br />' + years + ' years');
		$(this).addClass('labelchange');
	}

	$('p.labelyellow').one('click', highlightit);	

	$('p.labelorange').one('click', highlightit);

	$('p.labelgreen').one('click', highlightit);

	$('p.labelblue').one('click', highlightit);

	
	
});





