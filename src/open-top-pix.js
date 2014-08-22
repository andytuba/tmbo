$(function() {
	var allLinks = document.querySelectorAll('#grid-container a[href^="/offensive/pages/pic.php"]');
	var selection = [].slice.call(allLinks, 0, 20);
	selection.forEach(function(elem, index) {
		var url = elem.href;
		setTimeout(function() { 
			chrome.tabs.create({
				active: false,
				url: url
			});
		}, 100 * index);
	});
});
