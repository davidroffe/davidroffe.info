define(['phase', 'back', 'jquery-1.10.2.min'], function(phase, back){

	console.log('Function: reset');

	return {
		resetPage: function (page, fresh){
			$('#main-java').css({opacity:1});
			switch(page)
			{
				case 'home':
						console.log('home being reset');
						$('.square').css({opacity:0});
						$('#one').css({top:'200px',left:'-375px'});
						$('#two').css({top:'440px'});
						$('#three').css({top:'-115px'});
						$('#four').css({top:'100px',left:'400px'});
					$('.square').click(function(event){
						event.preventDefault();
						phase.phaseOut($(this).attr('id'));
					});
					break;
				case 'about':
					$('#about').css({opacity:0,marginTop:'50px',marginLeft:'-1000px'});
					$('#about-return').css({opacity:0,marginTop:'40px',marginLeft:'450px'});
					back.backToHome($('#about-return'));
					break;
				case 'contact':
					$('#contact').css({opacity:0});
					back.backToHome($('#contact-return'));
					break;
				case 'profile':
					$('#skills').css({opacity:0});
					$('#frontend').css({opacity:0,marginTop:'55px',marginLeft:'-150px'});
					$('#backend').css({opacity:0,marginTop:'200px',marginRight:'-180px'});
					$('#history').css({opacity:0, marginTop:'230px', marginLeft:'250px'});
					back.backToHome($('#profile-return'));
					break;
				case 'portfolio':
					$('#portfolio').css({opacity:0, marginTop:'500px'});
					back.backToHome($('#portfolio-return'));
					break;
			}
		}
	}
});