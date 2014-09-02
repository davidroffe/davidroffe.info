require(['reset', 'resize', 'phase', 'jquery-1.10.2.min'], function(reset, resize, phase){
	console.log('main.js');
			
	var pageTitle = $('title').text();
	var page;
	var screenType = 1;
	var windowWidth = window.innerWidth;
	switch(pageTitle){
		case 'David Roffe':
			page = 'home';
			break;
		case 'About / David Roffe':
			page = 'about';
			break;
		case 'Portfolio / David Roffe':
			page = 'portfolio';
			break;
		case 'Profile / David Roffe':
			page = 'profile';
			break;
		case 'Contact / David Roffe':
			page = 'contact';
			break;
	}

	console.log('page value is: ' + page);
	console.log('The page width is:' + windowWidth);

	if(windowWidth > 1048)
	{
		console.log('width is larger than 1048');
		reset.resetPage(page);
		console.log($('#main-java').length);
		//if js is enabled(Tested by checking for the page including js, which has the main div set as main-js)
			phase.phaseIn(page);
		screenType = 3;
	}else if(windowWidth > 640 && windowWidth <= 1048)
		screenType = 2;

	resize.resizePage(page, screenType);
});