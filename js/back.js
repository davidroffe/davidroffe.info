define(['phase', 'jquery-1.10.2.min'], function(phase){

	console.log('back: backToHome');

	return {
		backToHome: function(elementRef){
			elementRef.click(function(event){
				event.preventDefault();
				phase.reversePhaseOut(elementRef.attr('id'));
				elementRef.off();
				setTimeout(function(){backToHome(elementRef);}, 800);
			})
		}
	}
});