// request a weekday along with a long date
let options1 = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short'
};

let options2 = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'CET',
    timeZoneName: 'short'
};

setInterval(function() {
    var date = new Date(); // → "Donnerstag, 20. Dezember 2012"
    document.getElementById("date").innerHTML = date.toLocaleString('de-DE', options2);
}, 1000);