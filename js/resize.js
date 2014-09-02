define(['phase', 'back', 'jquery-1.10.2.min'], function(phase, back){
	console.log('resize: Assigning event handler');

	return{
		resizePage : function(page, screenType){
			switch(page){
				case 'home':
					$(window).resize(function(){
						var windowWidth = window.innerWidth;
						if(windowWidth > 1048 && screenType != 3)
						{
							$('#main-java').css({opacity:1});
							$('.square').css({display: 'inline-block'});
							$('.square').click(function(event){
							event.preventDefault();
							phase.phaseOut($(this).attr('id'));
					});
							screenType = 3;
							console.log('js resize event handler attached');
						}
						else if(windowWidth <= 1048 && screenType != 2 && windowWidth > 640)
						{
							$('#about-return').unbind('click');
							$('#contact-return').unbind('click');
							$('#profile-return').unbind('click');
							$('#portfolio-return').unbind('click');
							$('.square').unbind('click');
							$('.square').css({display: 'inline-block'});
							screenType = 2;
							console.log('js resize event handler detached');
						}
						if(windowWidth <= 640 && screenType != 1){
								$('.square').css({display: 'block'});
								screenType = 1;

						}
					});
					break;
				case 'about':
					$(window).resize(function(){
						var windowWidth = window.innerWidth;
						if(windowWidth > 1048 && screenType != 3)
						{
							$('#main-java').css({opacity:1});
							back.backToHome($('#about-return'));
							screenType = 3;
							console.log('js events attached');
						}
						if(windowWidth <= 1048 && screenType == 3)
						{
							$('#about-return').unbind('click');
							screenType = 2;
						}
					});
					break;
				case 'portfolio':
					$(window).resize(function(){
						var windowWidth = window.innerWidth;
						if(windowWidth > 1048 && screenType != 3)
						{
							$('#main-java').css({opacity:1});
							$('#portfolio').css({marginTop:'80px'});
							back.backToHome($('#portfolio-return'));
							screenType = 3;
						}
						if(windowWidth <= 1048 && screenType == 3)
						{
							$('#portfolio-return').unbind('click');
							$('#portfolio').css({marginTop:'20px'});
							screenType = 2;
						}
					});
					break;
				case 'profile':
					$(window).resize(function(){
						var windowWidth = window.innerWidth;
						console.log('body width is: ' + $(document).width());
						if(windowWidth > 1048 && screenType != 3)
						{
							$('#main-java').css({opacity:1});
							back.backToHome($('#profile-return'));
							$('#frontend').css({marginTop:'55px', marginLeft:'190px'});
							$('#backend').css({marginTop:'200px', marginRight:'230px'});
							$('#history').css({marginTop:'25px', marginLeft:'250px'});
							screenType = 3;
						}
						if(windowWidth <= 1048 && windowWidth > 640 && screenType != 2)
						{
							$('#profile-return').unbind('click');
							$('#frontend').css({marginTop:'0px', marginLeft:'10px'});
							$('#backend').css({marginTop:'90px', marginRight:'0px'});
							$('#history').css({marginTop:'10px', marginLeft:'80px'});
							screenType = 2;
						}
						if(windowWidth <= 640 && screenType != 1)
						{
							$('#profile-return').unbind('click');
							$('#frontend').css({marginTop:'0px', marginLeft:'10px'});
							$('#backend').css({marginTop:'90px', marginRight:'0px'});
							$('#history').css({marginTop:'10px', marginLeft:'0px'});
							screenType = 1;
						}
					});
					break;
				case 'contact':
					$(window).resize(function(){
						var windowWidth = window.innerWidth;
						if(windowWidth > 1048 && screenType != 3)
						{
							$('#main-java').css({opacity:1});
							back.backToHome($('#contact-return'));
							screenType = 3;
						}
						if(windowWidth < 1048 && screenType == 3)
						{
							$('#contact-return').unbind('click');
							screenType = 2;
						}
					});
					break;
			}
		}
	}
});