# Shulgi
Chrome Extension for reading languages.

Like the Sumerian king Shulgi, this extension can handle many languages
easily. The standout feature of this extension is its ability to remove new
lines from a text that is copied from a pdf, and open that text in Google
Translate. It also supports looking up words in the best online
multilingual dictionaries. 

## Using the Extension 

To retrive text that has been copied into the system clipboard, click on the
extensions icon. Then on the extensions popup menu click the button that says
"Get Translation!". A new tab will be generated with the text in Google Translate. 

To look up a word you can type it into the text box and hit the return key, or
the button marked "Define!". If no language code is specified, a new tab will
be generated defining it in Google Translate. You can specify a language using
ISO langauge codes, and then tabs will be generated in the dictionaries that
have been chosen by the developer. This chrome extension currently supports:
German (de), Korean (ko), French (fr), Hebrew (he), Chinese (zh), and
Spanish (sp). To use the language codes, seperate the language code from the
search term with a colon(:).Like: `de: Hallo`, or `sp: hola`. 

## Installing

Soon this extension will soon be available in the Chrome Store, but
for the time being download the [zipped file][GitZip] from github, put the resulting
folder in a convenient directory, and open Chrome. In the address bar type
`chrome://extensions`. Enable developer mode, and chose load extension from
file. Every time Chrome opens a new window, you will get a warning about this
extension not being approved. That can't be avoided until the app is released
through the app store.

## About Shulgi 

The wikipedia article on [Shulgi][ShulgiW] is a great place to start. Many of the
literature written about Shulgi is available throug the Electronic Text Corpus
of the Sumerian Literature ([ETCSL][etcsl]). The text that inspires the name for this app
is the [Shulgi Hymn B][ShulgiB]. Like many ancient Near Eastern kings, much of
the material written by Shulgi and his court is praise for his idealness as a
ruler. Shulgi is unique among the ANE kings in that he brags bout his scribal
abilities as well as his military exploits. In lines 10-20 of Shulgi Hymn B,
he talks about his education in the scribal schools:
>      (11-20) I am a king, offspring begotten by a king and borne by a queen.
>      I, Šulgi the noble, have been blessed with a favourable destiny right
>      from the womb. When I was small, I was at the academy, where I learned
>      the scribal art from the tablets of Sumer and Akkad. None of the nobles
>      could write on clay as I could. There where people regularly went for
>      tutelage in the scribal art, I qualified fully in subtraction,
>      addition, reckoning and accounting. The fair Nanibgal, Nisaba, provided
>      me amply with knowledge and comprehension. I am an experienced scribe
>      who does not neglect a thing 

But not only could he write the languages of Sumerian and Akkadian (the
languages of ancient Southern Mesopotamia), Shulgi also new all of the
languages of his world: 
>    (206-220) When I …… like a torrent with the roar of a great storm, in the
>    capture of a citadel in Elam ……, I can understand what their spokesman
>    answers. By origin I am a son of Sumer; I am a warrior, a warrior of
>    Sumer. Thirdly, I can conduct a conversation with a man from the black
>    mountains. Fourthly, I can do service as a translator with a man of
>    Martu, a man of the mountains ……. I myself can correct his confused words
>    in his own language.  Fifthly, when a man of Subir yells ……, I can even
>    distinguish the words in his language, although I am not a fellow-citizen
>    of his. When I provide justice in the legal cases of Sumer, I give
>    answers in all five languages. In my palace no one in conversation
>    switches to another language as quickly as I do.                                                                                                                                  
Shulgi is a fascinating king of the ancient Near East, and one worthy of
intense study! 

## Sources Harvested 

I used the [official Google tutorial][chrometut] to make a simple chrome
extension.  Also, referencing this tutorial,[which promises to make an
extension in 10 minutes][tenmin]. But [this gist][clipboardgist] was invaluable for getting the
Chrome to play nicely with the clipboard.

[GitZip]: https://github.com/e2dubba/shulgi/archive/master.zip "Github Zip file"
[ShulgiW]: https://en.wikipedia.org/wiki/Shulgi "Shulgi Wikipedia"
[ShulgiB]: http://etcsl.orinst.ox.ac.uk/cgi-bin/etcsl.cgi?text=t.2.4.2.02 "ShulgiB"
[etcsl]: http://etcsl.orinst.ox.ac.uk/edition2/etcslbycat.php "ETCSL"
[chrometut]: https://developer.chrome.com/extensions/getstarted "Chrome Tutorial"
[tenmin]: https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/ "Ten Min Tutorial"
[clipboardgist]: https://gist.github.com/srsudar/e9a41228f06f32f272a2#file-background-js "Gist"

