function getContentFromClipboard() {
    // This function uses the text field to get text from the clipboard this 
    // is kind of a weird work around because of the way Chrome protects users 
    // but still wants access to the clipboard.
    var result = '';
    var sandbox = document.getElementById('dummy-text-field');
    sandbox.value = '';
    sandbox.select();
    if (document.execCommand('paste')) {
        result = sandbox.value;
        console.log('got value from sandbox: ' + result);
	result = result.replace(/-\r?\n/g, '');
	result = result.replace(/\r?\n/g, ' ');
    result = result.replace(/\b- \b/g, '') // This should probably be taken out, but it works for now
    }
    sandbox.value = '';
    return result;
};


function openGoogleTranslate () {
    // This gets the clipboard data from the above function and then opens
    // the corrected data in a google translate page
	clipboardContent = getContentFromClipboard();
		var url = 'https://translate.google.com/#auto/en/'; 
		url += encodeURIComponent(clipboardContent)
		console.log(url);
		chrome.tabs.create({url: url});
	return false; // prevent the default handler from running.
};


chrome.commands.onCommand.addListener(function (command) {
    console.log('Command: ' + command)
    if (command == 'openGoogleTranslate') {
        openGoogleTranslate()
    };
});
