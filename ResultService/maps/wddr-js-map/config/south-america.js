var wdsajsconfig = {
    "wdsajs1": {
        "hover": "ARGENTINA", //info of the popup
        "url": "https://www.html5interactivemaps.com/", //link to any webpage
        "target": "same_window", // use "new_window", "same_window", "modal", or "none"
        "upColor": "#FFFFF3", //default color
        "overColor": "#ECFFB3", //highlight color
        "downColor": "#cae9af", //clicking color
        "active": true //true/false to activate/deactivate
    },
    "wdsajs2": {
        "hover": "<b><u>BOLIVIA</u></b><br>Write any text and load images<br><img src='example.png'>",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs3": {
        "hover": "<b><u>BRAZIL</u></b><br><span style='color: #bcbcbc;'>Street Address:</span><br>&nbsp;321 Example, Address 54321<br><span style='color: #bcbcbc;'>Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#d7f57a",
        "overColor": "#beef2a",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs4": {
        "hover": "<b><u>CHILE</u></b><br><span style='color: #999;'>*Click to open a webpage*</span>",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs5": {
        "hover": "<b><u>COLOMBIA</u></b><br><span style='color: #999;'>Click to open a modal window!</span><br><span style='color: #ff6666;'><b>Modal Window Option is Compatible<br> with Bootstrap Only.</b></span>",
        "url": "#mymodal",
        "target": "modal",
        "upColor": "#edff66",
        "overColor": "#cbe600",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs6": {
        "hover": "ECUADOR",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#E0E2E2",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": false
    },
    "wdsajs7": {
        "hover": "FALKLAND ISLANDS",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs8": {
        "hover": "FRENCH GUIANA",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs9": {
        "hover": "GUYANA",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs10": {
        "hover": "PARAGUAY",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs11": {
        "hover": "PERU",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs12": {
        "hover": "SURINAME",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs13": {
        "hover": "<b><u>URUGUAY</u></b><br>Write any text and load images<br><img src='example.png'>",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs14": {
        "hover": "VENEZUELA",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "general": {
        "borderColor": "var(--map-border-color)",
        "visibleNames": "#adadad"
    }
};

// This for loop will change key values in the object above. 
for (const [country, props] of Object.entries(wdsajsconfig)) {
    if (country != "general") {
        props["upColor"] = "var(--main-site-color)";
        props["overColor"] = "var(--site-subcolor-third)";
        console.log("Colors in South America submap changed to var(--main-site-color)");

    } else {
        console.log("Key '" + country + "' not an item of list!");
    }
}