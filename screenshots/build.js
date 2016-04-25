var page = require('webpage').create();
page.viewportSize = {width: 1000, height: 1000};
page.open('./test/perceptual/alert.html', function() {
	var clipRect = page.evaluate(function () {
		var screenshot = document.querySelector(".screenshot");
		screenshot.style.display = 'inline-block';
		return screenshot.getBoundingClientRect();
	});
	page.clipRect = {
		top:    clipRect.top,
		left:   clipRect.left,
		width:  clipRect.width,
		height: clipRect.height
	};
	page.render('./screenshots/screenshot.png');
	phantom.exit();
});
