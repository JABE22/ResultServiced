document.getElementById('contact_form').addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
    logSubmit(e);
});

// SETTING EVENT LISTENERS for form elements
var input_components = document.getElementsByClassName('form-control');
for (i = 0; i < input_components.length; i++) {
    input = input_components[i];
    input.addEventListener('focus', function(e) {
        e.preventDefault();
        removeWarnings();
    });
}

function removeWarnings() {
    var input_components = document.getElementsByClassName('form-control');
    for (i = 0; i < input_components.length; i++) {
        input = input_components[i];
        if (input.className.indexOf(" invalid") > -1) {
            input.className = input.className.replace(' invalid', '');
            console.log("Replaced class: " + input.className);
        }
    }
}

function validateForm() {
    // This function deals with validation of the form fields
    var y, i, valid = true;
    y = document.getElementsByTagName("input");
    sel = document.getElementsByTagName("select");

    for (i = 0; i < y.length; i++) {
        if (y[i].value === "") {
            y[i].className += " invalid";
            valid = false;
        }
    }
    // Validating 'select' inputs
    for (i = 0; i < sel.length; i++) {
        if (sel[i].value === "") {
            sel[i].className += " invalid";
            valid = false;
        }
    }

    console.log("Form validation status: " + valid);
    return valid; // return the valid status
}

function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}