
function defineWord() {
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
    } else {
        var querry = term[1]
    } else {
        url = 'https://translate.google.com/#auto/en/'
        url += encodeURIComponent(term[1])
    };
    chrome.tabs.create({ url: url });
    return false;
};


document.addEventListener('DOMContentLoaded', function() {
	var getWordLookup = document.getElementById('define')

	getWordLookup.addEventListener('click', function() {
    defineWord() 
    }) 
});


document.addEventListener('DOMContentLoaded', function() {
	var getTranslationButton = document.getElementById('getTranslation')
	getTranslationButton.addEventListener('click', function () {
        openGoogleTranslate()
    });
});


chrome.commands.onCommand.addListener(function (command) {
    console.log('Command: ' + command)
    openGoogleTranslate()
});
    

document.addEventListener('DOMContentLoaded', function() {
    var textField = document.getElementById('dummy-text-field')
    textField.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
           console.log('hmmm')
           defineWord()
        }
    });
});
/*
 * To Do:
 * a help HTML page. 
 * integrate the JSON object into the code
 * add additional dictionaries
 * add a page to add dictionaries to the JSON object
 */

