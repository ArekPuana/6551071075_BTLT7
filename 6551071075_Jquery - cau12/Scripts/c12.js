$(document).ready(function(){
	$('.checkme').on('click', function(){
		let parent = $(this).closest('.checkbox-card');
		if($(this).is(':checked')){
			parent.find('.passport-box').slideDown(200);
			parent.find('.apply-box').hide();
		}else{
			parent.find('.passport-box').slideUp(200);
		}
	});
});