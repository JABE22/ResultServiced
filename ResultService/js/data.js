const getJSON = function(url) {
    return fetch(url).then(function(response) {
        return response.json();
    });
};

const toJSON = function(event_object) {
    console.log("Sending into JSON file...");
};


//var csv is the CSV file with headers
function csvJSON(csv) {
    // Interesting splitting in the end of the each row in the file
    var lines = csv.split("\r\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
}