// Setting eventlisteners for these elements
var button = document.getElementById("filtermenu_button");
var filters_container = document.getElementById("search_filters");
var search_input = document.getElementById("search_input");

button.addEventListener("click", function(event) {
    event.preventDefault();
    if (filters_container.className === 'hide') {
        filters_container.className = 'show_flex';
    } else {
        filters_container.className = 'hide';
    }
    console.log("Filters class = " + filters_container.className);
});

// Execute a function when the user press a key on the keyboard
search_input.addEventListener("keypress", function(e) {
    // Number 13 is the "Enter" key on the keyboard
    if (e.key === 'Enter') {
        // Cancel the default action, if needed
        e.preventDefault();
        // Do the action
        findResults();
    }
});

let upevents, pevents, results;

(async() => {
    // Downloading data from the database
    upevents = await getJSON('../data/up_events.json');
    pevents = await getJSON('../data/past_events.json');
    results = await fetch('../data/raceresults/GB-VLM.csv')
        .then(response => response.text())
        .then(text => JSON.parse(csvJSON(text)));
})();

function findResults() {
    // Every search will clear all the content from the page
    // So, before adding new content, we need to remove old content
    var econt = document.getElementById("eventcontainer");
    var pcont = document.getElementById("past_eventcontainer");
    var acont = document.getElementById("athletecontainer");
    econt.innerHTML = "";
    pcont.innerHTML = "";
    acont.innerHTML = "";
    // Getting filter options set by user
    const filter_inputs = document.getElementsByTagName('input');
    const filters = {
        text: filter_inputs[0].value, // Value is as typed in the text input,
        upevents: filter_inputs[1].checked, // If not checked value is false,
        pevents: filter_inputs[2].checked, // If not checked value is false,
        results: filter_inputs[3].checked, // If not checked value is false,
        fdate: filter_inputs[4].value, // If not set, value is empty string "", otherwise in format '2021-12-08'
        tdate: filter_inputs[5].value // If not set, value is empty string "", otherwise in format '2021-12-08'
    }
    console.log(filters);

    // Let's filter the data
    var filtered_upevents, filtered_pevents, filtered_athletes;

    if (!(filters.pevents || filters.upevents || filters.results)) {
        // If no filters set, searching for everything
        filters.upevents = true;
        filters.pevents = true;
        filters.results = true;
    }

    if (filters.upevents) {
        // Filtering upcoming events
        filtered_upevents = getUpEvents(upevents, filters);
        console.log(filtered_upevents);
        (filtered_upevents.length === 0) ? econt.style.display = "none": econt.style.display = "";
        // Inserting new content
        constructUpcomingEvents("eventcontainer", filtered_upevents);
    } else {
        econt.style.display = "none";
    }
    if (filters.pevents) {
        // Filtering past events
        filtered_pevents = getPastEvents(pevents, filters);
        console.log(filtered_pevents);
        (filtered_pevents.length === 0) ? pcont.style.display = "none": pcont.style.display = "";
        // Inserting new content
        createEventComboBoxes("past_eventcontainer", filtered_pevents, results);
    } else {
        pcont.style.display = "none";
    }
    /*
    if (filters.results) {
        // Filtering athletes
        filtered_athletes = getAthletes(results, filters);
        console.log(filtered_athletes);
        (filtered_athletes.length === 0) ? acont.style.display = "none": acont.style.display = "";
        // Inserting new content
        //createAthleteCards("athletecontainer", results, results);
    } else {
        acont.style.display = "none";
    }
    */
}

/*
<div id="area_upevents"></div>
<div id="area_pevents"></div>
<div id="area_athletes"></div>
*/