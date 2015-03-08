// ==UserScript==
// @name         this.might.be/offensive - open pix
// @namespace    https://github.com/andytuba/tmbo/
// @version      0.0.1
// @description  open a bunch of pix from tmbo at once
// @author       andytuba
// @match        https://thismight.be/offensive/?c=hof&t=today
// @grant        none
// ==/UserScript==

setTimeout(function() {
	var allLinks = document.querySelectorAll('#grid-container a[href^="/offensive/pages/pic.php"]');
	var selection = [].slice.call(allLinks, 0, 20);
	var urls = selection.map(function(elem, index) {
		return elem.href; 
	});
    
    urls.forEach(function(url, index) {
		setTimeout(window.open, index * 200, url); 
	});
}, 100);


