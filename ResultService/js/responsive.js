function setresponsive() {
    var x = document.getElementById("respnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}