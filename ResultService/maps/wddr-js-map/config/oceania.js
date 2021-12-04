var wdocjsconfig = {
    "wdocjs1": {
        "hover": "<b><u>AUSTRALIA</u></b><br>Write any text and load images<br><img src='example.png'>", //info of the popup
        "url": "https://www.html5interactivemaps.com/", //link to any webpage
        "target": "same_window", // use "new_window", "same_window", "modal", or "none"
        "upColor": "#FFFFF3", //default color
        "overColor": "#ECFFB3", //highlight color
        "downColor": "#cae9af", //clicking color
        "active": true //true/false to activate/deactivate
    },
    "wdocjs2": {
        "hover": "<b><u>FIJI</u></b><br>Write any text and load images<br><img src='example.png'>",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs3": {
        "hover": "<b><u>KIRIBATI</u></b><br><span style='color: #bcbcbc;'>Street Address:</span><br>&nbsp;321 Example, Address 54321<br><span style='color: #bcbcbc;'>Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#d7f57a",
        "overColor": "#beef2a",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs4": {
        "hover": "<b><u>MARSHALL ISLANDS</u></b><br><span style='color: #999;'>*Click to open a webpage*</span>",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs5": {
        "hover": "MICRONESIA",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs6": {
        "hover": "NAURU",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs7": {
        "hover": "NEW ZEALAND",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs8": {
        "hover": "PALAU",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs9": {
        "hover": "<b><u>PAPUA NEW GUINEA</u></b><br><span style='color: #999;'>Click to open a modal window!</span><br><span style='color: #ff6666;'><b>Modal Window Option is Compatible<br> with Bootstrap Only.</b></span>",
        "url": "#mymodal",
        "target": "modal",
        "upColor": "#edff66",
        "overColor": "#cbe600",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs10": {
        "hover": "SAMOA",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs11": {
        "hover": "SOLOMON ISLANDS",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs12": {
        "hover": "TONGA",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs13": {
        "hover": "<b><u>TUVALU</u></b><br>Write any text and load images<br><img src='example.png'>",
        "url": "https://www.html5interactivemaps.com/",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs14": {
        "hover": "VANUATU",
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
for (const [country, props] of Object.entries(wdocjsconfig)) {
    if (country != "general") {
        props["upColor"] = "var(--main-site-color)";
        props["overColor"] = "var(--site-subcolor-third)";
        console.log("Colors in Oceania submap changed to var(--main-site-color)");

    } else {
        console.log("Key '" + country + "' not an item of list!");
    }
}