var activateOpenedTab = true;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch (request.requestType) {
		case 'open':
			openUrls(request.urls, activateOpenedTab);
	}
});

function openUrls(urls, activateOpenedTab) {
	urls.forEach(function(url, index) {
		setTimeout(chrome.tabs.create, index * 200, { active: activateOpenedTab && index === 0, url: url }); 
	});
}

