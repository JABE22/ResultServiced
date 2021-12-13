document.cookie = "SameSite=None; Secure";
// SETTING EVENT LISTENERS for form elements
var input_components = document.getElementsByClassName('form-control');
for (i = 0; i < input_components.length; i++) {
    input = input_components[i];
    input.addEventListener('focus', function(e) {
        e.preventDefault();
        removeWarnings();
    });
}

// SETTING FORM SUBMIT BUTTON EVENT LISTENER
document.getElementById('addevent_form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        setSuccessInfo();
        setTimeout(() => { location.href = "eventnotif.html" }, 3000);
    } else {
        document.getElementById('submit_event').style.display = 'none';
        document.getElementById('validation_info').style.display = 'block';
    }
});

function setSuccessInfo() {
    document.getElementById('submit_event').style.display = 'none';
    form_valid_info = document.getElementById('validation_info');
    form_valid_info.innerText = 'Succefully submitted!!';
    form_valid_info.style.background = 'rgb(135, 255, 135, .7)';
    form_valid_info.style.border = 'solid 1px black';
    form_valid_info.style.display = 'block';
}

// SETTING EVENT LISTENERS for form elements
var inputs = document.getElementsByTagName('input');
for (i = 0; i < inputs.length; i++) {
    input = inputs[i];
    input.addEventListener('focus', function(e) {
        e.preventDefault();
        removeWarnings();
    });
}

function removeWarnings() {
    document.getElementById('validation_info').style.display = "none";
    document.getElementById('submit_event').style.display = "block";
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
    var input_fields, valid = true;
    input_fields = document.getElementsByTagName("input");
    input_select = document.getElementById("subject");
    input_textarea = document.getElementById("message");
    v_info_box = document.getElementById('validation_info');

    var name, email, message;

    name = input_fields[0];
    email = input_fields[1];
    subject = input_select;
    message = input_textarea;

    console.log([name.value, email.value, subject.value, message.value])


    if (!validateName(name)) {
        if (name.className.indexOf(' invalid') === -1) {
            name.className += " invalid";
        }
        v_info_box.innerText = "Give your full name, please!";
        return false;
    }

    if (!validateEmail(email)) {
        if (email.className.indexOf(' invalid') === -1) {
            email.className += " invalid";
        }
        v_info_box.innerText = "Email is incorrect!";
        return false;
    }

    if (!validateSubject(subject)) {
        if (subject.className.indexOf(' invalid') === -1) {
            subject.className += " invalid";
        }
        v_info_box.innerText = "Select your subject, please!";
        return false;
    }

    if (!validateMessage(message)) {
        if (message.className.indexOf(' invalid') === -1) {
            message.className += " invalid";
        }
        v_info_box.innerText = "Message shorter than three words!";
        return false;
    }

    console.log("Form validation status: " + valid);
    return valid; // return the valid status
}

// INPUT VALIDATION FUNCTIONS
function validateName(input) {
    var name = /^[a-zA-Z]+ [a-zA-Z]+$/
    if ((input.value.match(name))) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(input) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if ((input.value.match(email))) {
        return true;
    } else {
        return false;
    }
}

function validateFName(input) {
    var fname = /^[a-zA-Z]{3,25}$/
    if ((input.value.match(fname))) {
        return true;
    } else {
        return false;
    }
}

function validateLName(input) {
    var lname = /^[a-zA-Z]{3,25}$/ // Jarno Matarmaa
    if ((input.value.match(lname))) {
        return true;
    } else {
        return false;
    }
}

function validatePhone(input) {
    const phone_nmb = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // 991-945-9647
    if ((input.value.match(phone_nmb))) {
        return true;
    } else {
        return false;
    }
}

function validateDestination(input) {
    const dest = /^[a-zA-Z]{1,30} [0-9]{1,3}[a-zA-Z]$/ // Koukkurannankatu 63B,  
    if (input.value.match(dest)) {
        return true;
    } else {
        return false;
    }
}

function validateDate(input) {
    // Validates either DD/MM/YYYY or DD-MM-YYYY e.g., 12/12/2012 or alternative 2021/12/12
    const date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    const alt_date = /^\d{4}[\/\-](0[1-9]|1[012])[\/\-](0[1-9]|[12][0-9]|3[01])$/

    if (input.value.match(date) || input.value.match(alt_date)) {
        return true;
    } else {
        return false;
    }
}

function validateTime(input) {
    const time = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    if (input.value.match(time)) {
        return true;
    } else {
        return false;
    }
}

function validateQuantity(input) {
    const nmb = parseInt(input.value);
    if (!isNaN(nmb) && nmb > 0 && nmb < 100) {
        return true;
    } else {
        return false;
    }
}

function validateSubject(input) {
    if (input.value !== "") {
        console.log("Subject selected: " + input.value);
        return true;
    } else {
        return false;
    }
}

function validateMessage(input) {
    if (input.value.split(' ').length > 2) {
        return true;
    } else {
        return false;
    }
}