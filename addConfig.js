function addToConfig () {


}

document.addEventListener('DOMContentLoaded', function() {
    var getConfigVar = document.getElementById('AddPairToConfig', function () {
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
