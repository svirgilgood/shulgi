function getContentFromClipboard() {
    var result = '';
    var sandbox = document.getElementById('dummy-text-field');
    sandbox.value = '';
    sandbox.select();
    if (document.execCommand('paste')) {
        result = sandbox.value;
        console.log('got value from sandbox: ' + result);
	result = result.replace(/\-\r?\n/g, '');
	result = result.replace(/\r?\n/g, ' ');
    }
    sandbox.value = '';
    return result;
};


function openGoogleTranslate () {
	clipboardContent = getContentFromClipboard();
		var url = 'https://translate.google.com/#auto/en/'; 
		url += encodeURIComponent(clipboardContent)
		console.log(url);
		chrome.tabs.create({url: url});
	return false; // prevent the default handler from running.
};


chrome.commands.onCommand.addListener(function (command) {
    console.log('Command: ' + command)
    openGoogleTranslate()
});
