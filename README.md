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
[ISO langauge codes][iso], and then tabs will be generated in the dictionaries that
have been chosen by the developer. This chrome extension currently supports:
German (de), Korean (ko), French (fr), Hebrew (he), Chinese (zh), and
Spanish (sp). To use the language codes, seperate the language code from the
search term with a colon(:).Like: `de: Hallo`, or `sp: hola`. The list of
supported urls gets updated pretty frequently, please see
[config.js](config.js), for an updated list of the currently supported terms.

Shulgi also supports keyboard shortcuts. On Windows `Ctrl+Shift+U` will open
the popup html file. And `Ctrl+Shift+Y` will open Google Translate with
whatever is in the clipboard. For Mac, just use the `Cmd` key. Both of these
keyboard shortcuts can by combined: Hold down `Ctrl+Shift`, and then press `U` 
and then `Y` and Shulgi will open the Google Translate page. 

## Installing

Soon this extension will soon be available in the Chrome Store, but
for the time being download the [zipped file][GitZip] from github, put the resulting
folder in a convenient directory, and open Chrome. In the address bar type
`chrome://extensions`. Enable developer mode, and chose load extension from
file. Every time Chrome opens a new window, you will get a warning about this
extension not being approved. That can't be avoided until the app is released
through the app store.

## About Shulgi 

To read more about Shulgi, [see ABOUT.md](ABOUT.md).

## Sources Harvested 

I used the [official Google tutorial][chrometut] to make a simple chrome
extension.  Also, referencing this tutorial,[which promises to make an
extension in 10 minutes][tenmin]. But [this gist][clipboardgist] was
invaluable for getting Chrome to play nicely with the clipboard.


[GitZip]: https://github.com/e2dubba/shulgi/archive/master.zip "Github Zip file"
[chrometut]: https://developer.chrome.com/extensions/getstarted "Chrome Tutorial"
[tenmin]: https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/ "Ten Min Tutorial"
[clipboardgist]: https://gist.github.com/srsudar/e9a41228f06f32f272a2#file-background-js "Gist"
[iso]: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes "ISO Language Codes Wikipedia"
