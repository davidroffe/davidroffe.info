define(['jquery-1.10.2.min'], function(){
	console.log('phase: phaseOut, phaseIn, reversPhaseOut');
	return{

		phaseTest: function(pass){
			alert('Testing the passed value:' + pass);
		},

		phaseOut: function(squareId)
		{
			$('#one').animate({
				left:'-=375px',
				opacity: 0,
			},{
				duration:'slow'
			});

			$('#two').animate({
				top:'+=340px',
				opacity: 0
			},{
				duration:'slow'
			});

			$('#three').animate({
				top:'-=315px',
				opacity: 0
			},{
				duration:'slow'
			});

			$('#four').animate({
				left:'+=400px',
				opacity: 0
			},{
				duration:'slow'
			});

			var redirectURL = 'index.html';

			switch(squareId)
			{
				case 'one':
					redirectURL = 'about.html';
					break;
				case 'two':
					redirectURL = 'portfolio.html';
					break;
				case 'three':
					redirectURL = 'profile.html';
					break;
				case 'four':
					redirectURL = 'contact.html';
					break;
			}

			setTimeout(function(){window.location.href = redirectURL;}, 800);
		},

		phaseIn: function(page)
		{
			console.log('Phasing in page: ' + page);
			switch(page)
			{
				case 'home':
					$('#one').animate({
						left:'+=375px',
						opacity: 1
					}, 1000);
					$('#two').animate({
						top:'-=340px',
						opacity: 1
					}, 1000);
					$('#three').animate({
						top:'+=315px',
						opacity: 1
					}, 1000);
					$('#four').animate({
						left:'-=400px',
						opacity: 1
					}, 1000);
					break;
				case 'about':
					$('#about').css({display: 'block'}).animate({opacity:1, marginLeft:'+=1000px'}, 1500);
					$('#about-return').css({display: 'inline-block'}).animate({opacity:1, marginLeft:'-=450px'}, 1500);
					break;
				case 'portfolio':
					$('#portfolio').animate({opacity:1,marginTop:'80px'}, 1200);
					break;
				case 'profile':
						$('#skills').animate({opacity:1}, 1000);
						$('#frontend').animate({opacity:1, marginLeft: '190px'}, 1000);
						$('#backend').animate({opacity:1, marginRight: '230px'}, 1000);
					setTimeout(function(){$('#history').animate({opacity:1, marginTop: '25px'}, 1000);}, 800);
					break;
				case 'contact':
					$('#contact').animate({opacity:1}, 1500);
					break;
				
			}
		},

		reversePhaseOut: function(returnId)
		{
			switch(returnId)
			{
				case 'about-return':
					$('#about').animate({marginLeft:'-=1000px',opacity:0}, 'slow');
					$('#about-return').animate({opacity:0, marginLeft:'+=500px'}, 500);
					setTimeout(function(){window.location.href = 'index.html';}, 500);
					break;
				case 'contact-return':
					$('#contact').animate({opacity:0}, 'slow');
					setTimeout(function(){window.location.href = 'index.html';}, 500);
					break;
				case 'profile-return':
					delayToHome = 1215;
					$('#profile').animate({height:'0px'}, 1200);
					setTimeout(function(){window.location.href = 'index.html';}, 1215);
					break;
				case 'portfolio-return':
					$('#portfolio').animate({opacity:0, marginTop:'500px'}, 500)
					setTimeout(function(){window.location.href = 'index.html';}, 500);
					break;
			}
		}
	}
});