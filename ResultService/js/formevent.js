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
    var orgname = data.orgname;
    var orgstreet = data.orgstreet;
    var orgcity = data.orgcity;
    var orgstate = data.orgstate;
    var orgpcode = data.orgpcode;
    var orgcountry = data.orgcountry;
    // Event data validation
    if (!validateOrgName(orgname)) {
        if (orgname.className.indexOf(' invalid') === -1) {
            orgname.className += " invalid";
        }
        v_info_box.innerText = "Check organization name, please!";
        return false;
    }
    if (!validateAddress(orgstreet)) {
        if (orgstreet.className.indexOf(' invalid') === -1) {
            orgstreet.className += " invalid";
        }
        v_info_box.innerText = "Check organization address, please!";
        return false;
    }
    if (!validateCity(orgcity)) {
        if (orgcity.className.indexOf(' invalid') === -1) {
            orgcity.className += " invalid";
        }
        v_info_box.innerText = "Check organization city, please!";
        return false;
    }
    if (!validateState(orgstate)) {
        if (orgstate.className.indexOf(' invalid') === -1) {
            orgstate.className += " invalid";
        }
        v_info_box.innerText = "Check organization state, please!";
        return false;
    }
    if (!validatePostCode(orgpcode)) {
        if (orgpcode.className.indexOf(' invalid') === -1) {
            orgpcode.className += " invalid";
        }
        v_info_box.innerText = "Check organization post code, please!";
        return false;
    }
    if (!validateCountry(orgcountry)) {
        if (orgcountry.className.indexOf(' invalid') === -1) {
            orgcountry.className += " invalid";
        }
        v_info_box.innerText = "Check organization country, please!";
        return false;
    }

    return true;
}

function validateEventData(data) {
    var ename = data.ename;
    var edate = data.edate;
    var etime = data.etime;
    var edist = data.edist;
    // Event data validation
    if (!validateEventName(ename)) {
        if (ename.className.indexOf(' invalid') === -1) {
            ename.className += " invalid";
        }
        v_info_box.innerText = "Check event name, please!";
        return false;
    }
    if (!validateDate(edate)) {
        if (edate.className.indexOf(' invalid') === -1) {
            edate.className += " invalid";
        }
        v_info_box.innerText = "Check event date, please!";
        return false;
    }
    if (!validateTime(etime)) {
        if (etime.className.indexOf(' invalid') === -1) {
            etime.className += " invalid";
        }
        v_info_box.innerText = "Check event time, please!";
        return false;
    }
    if (!validateDist(edist)) {
        if (edist.className.indexOf(' invalid') === -1) {
            edist.className += " invalid";
        }
        v_info_box.innerText = "Check event distance, please!";
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

function validateOrgName(input) {
    var name = /^[.0-9a-zA-Z\s,'-]{5,30}$/ // Marathoner's club
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

function validatePhone(input) { // +79919459647, +7 991 945 9647, +7-(991)-945-9647, +358458723633, 0458723622
    const phone_nmb_rus = /^([+]{1}[0-9][-\s*. ]?)?[(]?[0-9]{3}[)]?[-\s*.]?[0-9]{3}[-\s*.]?[0-9]{4}$/im;
    const phone_nmb_fin = /^[+]{1}[0-9]{3}[-\s]*[0-9\s]{9}|[0-9]{10}$/im;
    return (input.value.match(phone_nmb_rus) || input.value.match(phone_nmb_fin));
}

function validateAddress(input) {
    // [a-zA-Z]{1,30} [0-9]{1,3}[a-zA-Z]    // Koukkurannankatu 6B
    const addr_nmb_first = /^[0-9]{0,5} [a-zA-Z\s,.'-]{5,30}$/ //70 Komsomolskaya Str., 70
    const addr_nmb_after = /^[a-zA-Z\s,.'-]{5,30} [0-9]{0,5}$/
    return (input.value.match(addr_nmb_first) || input.value.match(addr_nmb_after));
}

function validateCity(input) {
    const dest = /^[a-zA-Z]{1,30}$/ // Jekaterinburg
    return (input.value.match(dest));
}

function validatePostCode(input) {
    const dest = /^[0-9]{5,10}$/ // 620078
    return (input.value.match(dest));
}

function validateState(input) {
    const dest = /^[a-zA-Z\s'-]{1,30}$/ // Sverdlovskaya Oblast
    return (input.value.match(dest));
}

function validateCountry(input) {
    const country_option = document.querySelector("#" + 'countries' + " option[value='" + input.value + "']");
    return (country_option != null) ? (country_option.value.length > 0) : false;
    // const dest = /^[a-zA-Z\s-]{1,30}$/ // Russia
    // return (input.value.match(dest));
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

function validateDist(input) {
    const dist = parseInt(input.value);
    return (dist == 0) ? false : true;
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