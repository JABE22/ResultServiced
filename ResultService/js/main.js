function constructUpcomingEvents(id, events) {
    /* First of all, we need to sort events by date, the most recent first.
     * Also, we do not want to show "upcoming" events already passed.
     */
    events.sort((a, b) => (a.date > b.date) ? 1 : -1);


    var eventbox_number = events.length // Math.min(events.length, 9);
    var eventcontainer = document.getElementById(id);
    // Creating and setting up eventbox

    for (let i = 0; i < eventbox_number; i++) {
        var href = document.createElement("a");
        var eventbox = document.createElement("div");
        //href.onclick = "https://www.biathlonworld.com/calendar";
        eventbox.className = "eventbox zoom_big sp";
        eventbox.style.backgroundImage = "url('../img/Nationals/flag_" + events[i]['ccode'] + ".jpg')";
        // Creating and setting up eventbox components
        var opacity_filter = document.createElement("div");
        var event_name = document.createElement("h2");
        var event_description = document.createElement("p");
        opacity_filter.className = "upcom_eventbox_infobackg";
        event_name.innerText = events[i]['ename'];
        event_name.id = "event_name";
        const edate = new Date(events[i]['date']);
        styledate = edate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        event_description.innerText = events[i]['country'] + ", " + events[i]['city'] + "\n" +
            styledate + "\n" + styledist(events[i]['dist']);
        event_description.className = "event_text"
            // Setting elements
        opacity_filter.append(event_name, event_description);
        eventbox.append(opacity_filter);
        href.appendChild(eventbox);
        eventcontainer.append(href);
    }
}

function styledist(numlist) {
    var str = "______________\n";
    for (var i = 0; i < numlist.length; i++) {
        dist = numlist[i];
        if (dist > 30) {
            str += "Marathon (" + dist + " km)\n";
        } else if (dist <= 30 && dist > 19) {
            str += "Half Marathon (" + dist + " km)\n";
        } else {
            str += dist + " km";
            // After last line we do not want comma
            if (i < numlist.length - 1) {
                str += ", "
            }
        }
    }
    return str;
}

function createResultTable(id, results) {
    const table_container = document.createElement('div');
    table_container.className = "table_container hide";
    table_container.id = id;
    var table = document.createElement('table');
    table.className = "competitors";
    var row_number = 12;
    // Table header row
    table_hr = document.createElement('tr');
    table_hr.className = "table_header";
    // Content columns
    th_place = document.createElement('th');
    th_name = document.createElement('th');
    th_country = document.createElement('th');
    th_time = document.createElement('th');
    // Setting labels
    label_1 = document.createElement('label');
    label_2 = document.createElement('label');
    label_3 = document.createElement('label');
    label_4 = document.createElement('label');
    label_1.className = "place";
    label_2.className = "athlete_name";
    label_3.className = "nationality";
    label_4.className = "result_time";
    label_1.innerText = "Place";
    label_2.innerText = "Name";
    label_3.innerText = "Country";
    label_4.innerText = "Time";
    th_place.appendChild(label_1);
    th_name.appendChild(label_2);
    th_country.appendChild(label_3);
    th_time.appendChild(label_4);
    table_hr.append(th_place, th_name, th_country, th_time);
    // Setting header row to the table
    table.appendChild(table_hr);
    // For now, we select 12 athletes randomly from the results;
    const indexes = getRandomSet12(0, 19, 12);
    //console.log(indexes);
    // Table content row
    for (let i = 0; i < indexes.length; i++) {
        index = indexes[i];
        //console.log("Index set: " + index);
        table_tr = document.createElement('tr');
        table_tr.className = "sp";
        // Content columns
        td_place = document.createElement('td');
        td_name = document.createElement('td');
        td_country = document.createElement('td');
        td_time = document.createElement('td');
        // Setting labels
        label_1 = document.createElement('label');
        label_2 = document.createElement('label');
        img_3 = document.createElement('img');
        label_4 = document.createElement('label');
        // Setting class names
        label_1.className = "place";
        label_2.className = "athlete_name";
        img_3.className = "country zoom_ultra";
        label_4.className = "result_time";
        // Setting content of labels 
        // NOTICE: FOR NOW, SOMETHING WEIRD IS HAPPENING TO GENERATE FUN DATA COMPINATION
        label_1.innerText = i + 1 // results[index]['Place (Overall)'];
        label_2.innerText = results[index]['Name'];
        img_3.src = "img/Nationals/flag_" + results[index]['Nationality'] + ".jpg";
        img_3.alt = results[index]['Nationality'];
        label_4.innerText = results[i]['Finish'];
        // Appending components
        td_place.appendChild(label_1);
        td_name.appendChild(label_2);
        td_country.appendChild(img_3);
        td_time.appendChild(label_4);
        table_tr.append(td_place, td_name, td_country, td_time);
        table.appendChild(table_tr);
    }

    table_container.appendChild(table);
    return table_container;
}
/** 
 <tr>
    <th><label class="place">Place</label></th>
    <th><label class="athlete_name">Name</label></th>
    <th><label class="country">Country</label></th>
    <th><label class="result_time">Time</label></th>
</tr>
<tr class="sp">
    <td><label class='place'>1</label></td>
    <td><label class="athlete_name">Maria Anders</label></td>
    <td><img class="country" src="img/flag_fin.jpg" alt="FIN"></td>
    <td><label class='result_time'>01.10,34</label></td>
</tr>
 */

function createEventRow(eventId, tableId, event) {
    // Creating elements to add past event container
    var event_row = document.createElement('div');
    event_row.id = eventId;
    event_row.className = "accordion eventrow zoom sp";

    // Creating event accordion rows
    label_1 = document.createElement('label');
    img_2 = document.createElement('img');
    label_3 = document.createElement('label');
    img_4 = document.createElement('img');
    img_5 = document.createElement('img');
    // Setting class names
    label_1.className = "date";
    img_2.className = "country zoom_ultra";
    label_3.className = "event_name";
    img_4.id = "arrow_down" + tableId.substring(5);
    img_5.id = "arrow_up" + tableId.substring(5);
    img_4.className = "arrow_show";
    img_5.className = "arrow_hide";
    // Setting content of labels and images
    label_1.innerText = event['date'];
    img_2.src = "img/Nationals/flag_" + event['ccode'] + ".jpg";
    label_3.innerText = event['ename'];
    img_3.alt = event['country'];
    img_4.src = "icons/chevron-double-down.svg";
    img_5.src = "icons/chevron-double-up.svg";
    // Container for accordion arrows
    arrow_container = document.createElement('div');
    arrow_container.className = 'arrow_container';
    arrow_container.append(img_4, img_5)
        // Adding components
    event_row.append(label_1, img_2, label_3, arrow_container);
    event_row.onclick = function(event) {
        event.preventDefault;
        hideElement(tableId);
    }
    return event_row;
}

function createEventComboBoxes(parent_element_id, events, results) {
    //var event_number = 12;

    for (let i = 0; i < events.length; i++) {
        // Outermost frame div
        var compo = document.createElement('div');
        compo.className = "event_compo";
        // Creating compo box content
        content = createResultTable('table' + i, results);
        event_row = createEventRow('event' + i, 'table' + i, events[i]);
        compo.append(event_row, content);
        //console.log(event_row.id);
        document.getElementById(parent_element_id).appendChild(compo);
    }
}

/**
 <div class="accordion eventrow zoom sp" onclick="hideElement('table_container')">
    <label class='date'>06.10.2021</label>
    <label class="event_name">Tampere Juoksee</label>
    <img class="country" src="img/flag_fin.jpg" alt="FIN">
    <label class="drop">></label>
</div>
 */

function hideElement(tableId) {
    var tbl = document.getElementById(tableId);
    var arrowUp = document.getElementById("arrow_up" + tableId.substring(5));
    var arrowDown = document.getElementById("arrow_down" + tableId.substring(5))
    console.log("Element: " + tbl.id);
    if (tbl.className.indexOf(" hide") === -1) {
        tbl.className = tbl.className.replace(' show', ' hide');
        arrowUp.className = arrowUp.className.replace('arrow_show', 'arrow_hide')
        arrowDown.className = arrowDown.className.replace('arrow_hide', 'arrow_show');
    } else {
        tbl.className = tbl.className.replace(' hide', ' show');
        arrowUp.className = arrowUp.className.replace('arrow_hide', 'arrow_show')
        arrowDown.className = arrowDown.className.replace('arrow_show', 'arrow_hide');
    }
    console.log("Table container under " + tbl.id + " has now class names: " + tbl.className);
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function filter() {
    var input, filter, tablerows;
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
        //console.log(elabels[0], elabels[1]);
        var edetails = elabels[0].innerText + " " + elabels[1].innerText;
        if (edetails.toUpperCase().indexOf(filter) > -1) {
            event_match = true;
        }
        // Filtering event result rows in tables
        tablerows = tables[i].getElementsByTagName("tr");
        for (var j = 1; j < tablerows.length; j++) {
            // Filtering only athlete name
            var name = tablerows[j].getElementsByTagName("td")[1].innerText;
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

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function getRandomSet12(from = 1, to = 20, count = 12) {
    // Between any two numbers
    var numbers = range(from, to);
    var selected = [];
    var max = numbers.length;

    while (selected.length < count) {
        var index = (Math.floor(Math.random() * max));
        var number = numbers.splice(index, 1)[0];
        selected.push(number);
        max = numbers.length;
    }
    //numbers.sort(function(a, b) { return a - b });
    return selected;
}