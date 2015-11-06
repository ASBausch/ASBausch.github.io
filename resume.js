$(document).ready(function(){
	$('main').hide();
	$('button').click(function(){
		$('button').hide();
		$('main').fadeIn(1000);
	});	

//adds explanation years to vin circle labels and bolds upon click
//needs refactoring
//can I refactor these functions to make ONE
	
	$('p.labelyellow').one('click', function(){
		var years = '<br />8years'
		$(this).append(years);
		$(this).addClass('labelchange');
	});

	$('p.labelorange').one('click', function(){
		var years = '<br />6years'
		$(this).append(years);
		$(this).addClass('labelchange');

	});

	//why did "this" work in the selectors but not the full attribute list?

	$('p.labelgreen').one('click', function(){
		var years = '<br />14years'
		$(this).append(years);
		$(this).addClass('labelchange');

	});

	$('p.labelblue').one('click', function(){
		var years = '<br />20years'
		$(this).append(years);
		$(this).addClass('labelchange');

	});

	
});





