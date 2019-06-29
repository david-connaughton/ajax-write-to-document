const baseURL = "https://swapi.co/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();


    xhr.open("GET", baseURL + type + "/");
    xhr.send();


    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };
}
function writeToDocument(type) {
    getData(type, function(data) {
        console.dir(data);
        document.getElementById("data").innerHTML = data;
    });
}