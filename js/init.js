function returnToMain(elementRef){
	elementRef.click(function(event){
		event.preventDefault();
		reversePhaseOut(elementRef.attr('id'));
		elementRef.off();
		setTimeout(function(){returnToMain(elementRef);}, 800);
	})
}

function reset(page, fresh)
{
	switch(page)
	{
		case 'home':
			if(fresh)
			{
				$('.square').css({opacity:0});
				$('#one').css({top:'200px',left:'-375px'});
				$('#two').css({top:'440px'});
				$('#three').css({top:'-115px'});
				$('#four').css({top:'100px',left:'400px'});
			}
			$('.square').click(function(event){
				event.preventDefault();
				phaseOut($(this).attr('id'));
			});
			break;
		case 'about':
			if(fresh)
			{
				$('#about').css({opacity:0,marginTop:'50px',marginLeft:'-1000px'});
				$('#about-return').css({opacity:0,marginTop:'40px',marginLeft:'450px'});
			}
			returnToMain($('#about-return'));
			break;
		case 'contact':
			if(fresh)
			{
				$('#contact').css({opacity:0});
			}
			returnToMain($('#contact-return'));
			break;
		case 'profile':
			if(fresh)
			{
				$('#skills').css({opacity:0});
				$('#frontend').css({opacity:0,marginTop:'55px',marginLeft:'-150px'});
				$('#backend').css({opacity:0,marginTop:'200px',marginRight:'-180px'});
				$('#history').css({opacity:0, marginTop:'230px', marginLeft:'250px'});
			}
			returnToMain($('#profile-return'));
			break;
		case 'portfolio':
			if(fresh)
			{
				$('#portfolio').css({opacity:0, marginTop:'500px'});
			}
			returnToMain($('#portfolio-return'));
			break;
	}


	return true;
}

