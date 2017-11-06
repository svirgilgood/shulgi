window.onload = function () {
    createTableFromJSON()
};

function createTableFromJSON() {
    // copied from http://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
    // This takes the JSON object `localStorage` and creates a HTML table. 
    var myConfig = [localStorage]; // this array is used to get the keys to use to call values
    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table"); // !
    //document.getElementById('tablePrint').innerHTML = table;
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    var tr = table.insertRow(-1);                   // TABLE ROW.
    var langcell = tr.insertCell(-1);
    langcell.innerHTML = "ISO Codes";
    var urlcel = tr.insertCell(-1);
    urlcel.innerHTML = "URL";

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table"); // !
        table.classList.add("center");
       // document.getElementById('tablePrint').innerHTML = table;


        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.
        var langcell = tr.insertCell(-1);
        langcell.innerHTML = "ISO Codes";
        var urlcel = tr.insertCell(-1);
        urlcel.innerHTML = "URL";

    for (var i = 0; i < myConfig.length; i++) {
    for (var key in myConfig[i]) {
        tr = table.insertRow(-1);
        var tabcell = tr.insertCell(-1)
            tabcell.innerHTML = key;
        var tabcell2 = tr.insertCell(-1)
            var urlarray = localStorage[key].split('/')
            var urltext = urlarray[2]
            tabcell2.innerHTML = '<a href="'+urlarray[0]+'//'+urltext+'">'+urltext+'</a>'
        }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}

/*
function addToConfig () {
    // I may try to reuse this code to make config.js into a pure json file
    var isoCode = document.getElementById('ISOcode')
        isoCode = isoCode.value;
    var urlString = document.getElementById('URLwithSubString')
        urlString = urlString.value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', chrome.extension.getURL('config.json'), true);
    xhr.onreadystatechange = function() {
        var urljson = JSON.parse(xhr.responseText);
    }
    xhr.send();
    urljson[isoCode] = urlString
}
*/

function addToConfig () {
    // This takes the input from the text boxes and adds it to the `localStorage` object
    var isoCode = document.getElementById('ISOcode')
        isoCode = isoCode.value;
    var urlString = document.getElementById('URLwithSubString')
        urlString = urlString.value;
    localStorage[isoCode] = urlString
    document.getElementById('ISOcode').value = '';
    document.getElementById('URLwithSubString').value = ''
}


document.addEventListener('DOMContentLoaded', function() {
	var createtable = document.getElementById('CreateTable');
    createtable.addEventListener('click', function() {
        createTableFromJSON()
    }) 
});


document.addEventListener('DOMContentLoaded', function() {
    var getConfigVar = document.getElementById('AddPairToConfig')
   getConfigVar.addEventListener('click', function () {
        addToConfig ()
    })
});


document.addEventListener('DOMContentLoaded', function() {
    var getConfigVarbyKey = document.getElementById('URLwithSubString')
    getConfigVarbyKey.addEventListener('keydown', function(e) {
        if (e.keyCode == 13) {
            addToConfig()
        }
    })
});


