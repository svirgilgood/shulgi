    function createTableFromJSON() {
	    // copied from http://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
        var myConfig = [jsonurl];

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table"); // !
        document.getElementById('tablePrint').innerHTML = table;


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
                var urlarray = jsonurl[key].split('/')
                var urltext = urlarray[2]
                tabcell2.innerHTML = '<a href="'+urlarray[0]+'//'+urltext+'">'+urltext+'</a>'
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

document.addEventListener('DOMContentLoaded', function() {
	var createtable = document.getElementById('CreateTable');
    createtable.addEventListener('click', function() {
        createTableFromJSON()
    }) 
});
