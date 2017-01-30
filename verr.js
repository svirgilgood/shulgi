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


document.addEventListener('DOMContentLoaded', function() {
	var getWordLookup = document.getElementById('define')
	document.getElementById('dummy-text-field').addEventListener('keyup', function(e) {
	e.preventDefault();
	if (e.keycode == 13) {
		document.getElementById('define').click();
	}
});

	getWordLookup.addEventListener('click', function () {
		var term = '';
		myText = document.getElementById('dummy-text-field');
		console.log(myText.value)
		term = myText.value
		term = term.split(':');
		var url = ''
		console.log(term[0])
        if (term.length == 1) { 
			url = 'https://translate.google.com/#auto/en/'
			url += encodeURIComponent(term[0])
        } else if (term[0] == 'de') {
			url = 'https://dict.leo.org/ende/index_de.html#/search='
			url += encodeURIComponent(term[1])
			url += '&searchLoc=0&resultOrder=basic&multiwordShowSingle=on'
		} else if (term[0] == 'ko') {
			url = 'https://zkorean.com/dictionary/search_results?word='
			url += encodeURIComponent(term[1])
		} else if (term[0] == 'fr') {
			url = 'http://www.larousse.fr/dictionnaires/francais/'
			url += encodeURIComponent(term[1])
		} else if (term[0] == 'sp') {
			url = 'http://www.spanishdict.com/translate/'
			url += encodeURIComponent(term[1])
		} else if (term[0] == 'he') {
			url = 'http://www.morfix.co.il/'
			url += encodeURIComponent(term[1])
        } else if (term[0] == 'zh') {
            url = 'https://chinese.yabla.com/chinese-english-pinyin-dictionary.php?define='
            url += encodeURIComponent(term[1])
		} else {
			url = 'https://translate.google.com/#auto/en/'
			url += encodeURIComponent(term[1])
		};
		chrome.tabs.create({ url: url });
		return false;
	})
});

	

document.addEventListener('DOMContentLoaded', function() {
	var getTranslationButton = document.getElementById('getTranslation')
	getTranslationButton.addEventListener('click', function () {
		clipboardContent = getContentFromClipboard();
		var url = 'https://translate.google.com/#auto/en/'; 
		url += encodeURIComponent(clipboardContent)
		console.log(url);
		chrome.tabs.create({url: url});
	return false; // prevent the default handler from running.
		})
	});
