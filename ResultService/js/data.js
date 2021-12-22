const getJSON = async function(url) {
    const response = await fetch(url);
    return await response.json();
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

var textFile = null;
const makeTextFile = (text) => {
    var data = new Blob([text], { type: 'text/plain' });

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
};


function getUpEvents(json_data, filters) {
    var matches = [];
    matches = json_data.filter(function(el) {
        var fmatch = (filters.fdate === "") ? true : (new Date(el.date) >= new Date(filters.fdate));
        var tmatch = (filters.tdate === "") ? true : (new Date(el.date) <= new Date(filters.tdate));
        var datematch = fmatch && tmatch;
        var txtmatch = el.ename.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            el.country.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            el.ccode.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            el.city.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            el.dist.map(String).includes(filters.text);

        return datematch && txtmatch;
    });
    return matches;
    /*
      "date": "2022-12-19",
      "ename": "Taipei International Marathon",
      "country": "Taiwan",
      "ccode": "TWN",
      "city": "Taipei",
      "dist": [42, 21]
    */
}

function getPastEvents(json_data, filters) {
    var matches = [];
    matches = json_data.filter(function(el) {
        var fmatch = (filters.fdate === "") ? true : (new Date(el.date) >= new Date(filters.fdate));
        var tmatch = (filters.tdate === "") ? true : (new Date(el.date) <= new Date(filters.tdate));
        var datematch = fmatch && tmatch;
        var txtmatch = el.ename.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            el.country.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            el.ecode.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 || // This is the only difference compared to upcoming events selection
            el.ccode.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            el.city.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            el.dist.map(String).includes(filters.text.toUpperCase());

        return datematch && txtmatch;
    });
    return matches;
}

function getAthletes(json_data, filters) {

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function filter() {
    var input, filter, tablerows, eventrow, elabels;
    const compos = document.getElementsByClassName('event_compo');
    const eventrows = document.getElementsByClassName('eventrow');
    const tables = document.getElementsByClassName('competitors');
    input = document.getElementById("filter_input");
    filter = input.value.toUpperCase();
    var event_match;
    var table_match;

    for (var i = 0; i < eventrows.length; i++) {
        event_match = false;
        table_match = false;
        eventrow = eventrows[i];
        elabels = eventrow.getElementsByTagName('label');
        country_flag = eventrow.getElementsByTagName('img')[0];
        //console.log(elabels[0], elabels[1]);
        var edetails = elabels[0].innerText + " " + elabels[1].innerText + " " + country_flag.alt;
        if (edetails.toUpperCase().indexOf(filter) > -1) {
            event_match = true;
        }
        // Filtering event result rows in tables
        tablerows = tables[i].getElementsByTagName("tr");
        for (var j = 1; j < tablerows.length; j++) {
            // Filtering only athlete name
            var name = tablerows[j].getElementsByTagName("td")[2].innerText;
            if (name.toUpperCase().indexOf(filter) > -1) {
                table_match = true;
            }
        }
        //console.log(event_match, table_match);
        if (event_match || table_match) {
            compos[i].style.display = "";
        } else {
            compos[i].style.display = "none";
        }
    }
}