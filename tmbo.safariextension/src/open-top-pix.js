$(function() {
	var allLinks = document.querySelectorAll('#grid-container a[href^="/offensive/pages/pic.php"]');
	var selection = [].slice.call(allLinks, 0, 20);
	var urls = selection.map(function(elem, index) {
		return elem.href; 
	});

	chrome.runtime.sendMessage({
		requestType: 'open',
		urls: urls
	});	
});
