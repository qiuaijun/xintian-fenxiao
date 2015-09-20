var overAct = function(c){$(this).addClass('act');},outAct = function(c){$(this).removeClass('act');};
var ph = function(f){
	$('#'+f+' input[ph]').each(function () {
		var o = $(this),t = o.attr('ph');
		if ((o.attr('type') === 'text' || o.attr('type') === 'password') && t) {
			o.focus(function () {
				o.removeClass('ph');
				if (o.val() === t) o.val('');
			}).blur(function () {
				if (o.val() === '' || o.val() === t) o.val(t).addClass('ph');
			}).blur();
		}
	});
	$('#'+f).submit(function(){
		$(this).find('input[ph]').each(function(){
			var o=$(this);
			if(o.val()==o.attr('ph')) o.val('');
		});
		return true;
	});
};
$(document).ready(function(){
	$('.menu dl').has('dd').not('.cur').find('dt').click(function(){
		$(this).blur();
		o=$(this).parent();
		o.toggleClass('expand');
	});
	$('.tooltip').hover(function(){$(this).find('span').show();},function(){$(this).find('span').hide();});
});
