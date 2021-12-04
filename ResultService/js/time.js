// request a weekday along with a long date
var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short'
};



setInterval(function() {
    var date = new Date();
    date.toLocaleString('fi-FI', options);
    document.getElementById("date").innerHTML = date;
}, 1000);