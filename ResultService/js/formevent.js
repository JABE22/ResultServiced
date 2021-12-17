document.cookie = "SameSite=None; Secure";

// SETTING EVENT LISTENERS for form elements
var input_components = document.getElementsByTagName('input');
var googlemap = document.getElementsByClassName('map-container')[0];

for (i = 0; i < input_components.length; i++) {
    var input = input_components[i];
    if (i > 0 && i < 6) {
        input.addEventListener('focus', (e) => {
            e.preventDefault();
            removeWarnings();
            googlemap.style.display = "flex";
        });
    } else if (i > 0) {
        input.addEventListener('focus', function(e) {
            e.preventDefault();
            removeWarnings();
            googlemap.style.display = "none";
        });
    }
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
    input_fields = document.getElementsByTagName("input"); // 13 input elements
    input_select = document.getElementsByTagName("select")[0]; // 1 select elements for distances
    input_textarea = document.getElementsByTagName("textarea")[0]; // 1 textarea for additional info
    v_info_box = document.getElementById('validation_info'); // 1 Validation info for feedback
    // Variables
    var orgname, orgstreet, orgcity, orgpcode, orgcountry; // Event organizer info
    var ename, edate, etime, ecountry, ecity, edist; // Event info
    var pfname, plname, pemail, phone; // Responsible person
    var addinfo // Additional info (can be empty)
        // Organization info
    const orgdata = {
        orgname: input_fields[0],
        orgstreet: input_fields[1],
        orgcity: input_fields[2],
        orgstate: input_fields[3],
        orgpcode: input_fields[4],
        orgcountry: input_fields[5]
    };
    // Event info (marathon)
    const edata = {
        ename: input_fields[6],
        edate: input_fields[7],
        etime: input_fields[8],
        edist: input_select
    };
    // Person info
    const pdata = {
        pfname: input_fields[9],
        plname: input_fields[10],
        pemail: input_fields[11],
        phone: input_fields[12],
        addinfo: input_textarea
    };

    // Additional info (For event, person and organization)


    console.log([orgdata, edata, pdata]);

    valid = validateOrganizationData(orgdata);
    if (valid) {
        valid = validateEventData(edata);
    }
    if (valid) {
        valid = validatePersonData(pdata);
    }

    console.log("Form validation status: " + valid);
    return valid;
    // return the valid status
}

function validateOrganizationData(data) {
    v_info_box.innerText = "Organization validation not implemented!";
    return true;
}

function validateEventData(data) {
    // Person data validation
    if (!validateEventName(data.ename)) {
        if (data.ename.className.indexOf(' invalid') === -1) {
            data.ename.className += " invalid";
        }
        v_info_box.innerText = "Check event name, please!";
        return false;
    }

    return true;
}

function validatePersonData(data) {
    // Person data validation
    if (!validateFName(data.pfname)) {
        if (data.pfname.className.indexOf(' invalid') === -1) {
            data.pfname.className += " invalid";
        }
        v_info_box.innerText = "Check your firstname, please!";
        return false;
    }
    if (!validateLName(data.plname)) {
        if (data.plname.className.indexOf(' invalid') === -1) {
            data.plname.className += " invalid";
        }
        v_info_box.innerText = "Check your lastname, please!";
        return false;
    }

    if (!validateEmail(data.pemail)) {
        if (data.pemail.className.indexOf(' invalid') === -1) {
            data.pemail.className += " invalid";
        }
        v_info_box.innerText = "Email is incorrect!";
        return false;
    }

    if (!validatePhone(data.phone)) {
        if (data.phone.className.indexOf(' invalid') === -1) {
            data.phone.className += " invalid";
        }
        v_info_box.innerText = "Check phone number, please!";
        return false;
    }

    if (!validateMessage(data.addinfo)) {
        if (data.addinfo.className.indexOf(' invalid') === -1) {
            data.addinfo.className += " invalid";
        }
        v_info_box.innerText = "Message shorter than three words!";
        return false;
    }

    return true;
}

// INPUT VALIDATION FUNCTIONS
function validateName(input) {
    var name = /^[a-zA-Z]+ [a-zA-Z]+$/
    return ((input.value.match(name)));
}

function validateEmail(input) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return ((input.value.match(email)));
}

function validateFName(input) {
    var fname = /^[a-zA-Z]{3,25}$/
    return ((input.value.match(fname)));
}

function validateLName(input) {
    var lname = /^[a-zA-Z]{3,25}$/ // Jarno Matarmaa
    return ((input.value.match(lname)));
}

function validatePhone(input) {
    const phone_nmb = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // 991-945-9647
    return ((input.value.match(phone_nmb)));
}

function validateAddress(input) {
    const dest = /^[a-zA-Z]{1,30} [0-9]{1,3}[a-zA-Z]$/ // Koukkurannankatu 63B,  
    return (input.value.match(dest));
}

function validateDate(input) {
    // Validates either DD/MM/YYYY or DD-MM-YYYY e.g., 12/12/2012 or alternative 2021/12/12
    const date = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    const alt_date = /^\d{4}[\/\-](0[1-9]|1[012])[\/\-](0[1-9]|[12][0-9]|3[01])$/

    return (input.value.match(date) || input.value.match(alt_date));
}

function validateTime(input) {
    const time = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
    return (input.value.match(time));
}

function validateQuantity(input) {
    const nmb = parseInt(input.value);
    return (!isNaN(nmb) && nmb > 0 && nmb < 100);
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
    return (input.value.split(' ').length > 2);
}

function validateEventName(input) {
    return (input.value.length > 3);
}