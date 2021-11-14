// The mission names have to match the button text
let missions = {
    "U.S. AIR FORCE (OTV-5)" : {
        launchDate: "9/7/2017",
        launchSite: "Cape Canaveral",
        vehicle: "Falcon 9"
    },
    "NATIONAL SPACE ORGANIZATION (TAIWAN)" : {
        launchDate: "8/24/2017",
        launchSite: "Vandenberg",
        vehicle: "Falcon 9"
    },
    "INTELSAT" : {
        launchDate: "7/5/2017",
        launchSite: "Cape Canaveral",
        vehicle: "Falcon 9"
    },
    "IRIDIUM (FLIGHT 2)" : {
        launchDate: "6/25/2017",
        launchSite: "Vandenberg",
        vehicle: "Falcon 9"
    },
    "BULGARIASAT-1" : {
        launchDate: "6/23/2017",
        launchSite: "Cape Canaveral",
        vehicle: "Falcon 9"
    },
    "NASA RESUPPLY TO ISS (FLIGHT 11)" : {
        launchDate: "9/7/2017",
        launchSite: "Cape Canaveral",
        vehicle: "Dragon & Falcon 9"
    }
}


// cache DOM
let missionButtons = document.querySelectorAll("button");
let launchDateText = document.querySelector("#launch-date");
let launchSiteText = document.querySelector("#launch-site");
let vehicleText = document.querySelector("#vehicle");

// add event listener fuctions
missionButtons.forEach((button) => {
    button.addEventListener("click", updateMissionContent)
});


function updateMissionContent() {
    
    updateCopy(this);
    
    updateButtons(this);
    
}

function updateCopy(btn) {
    let date = missions[btn.innerText].launchDate;
    let site = missions[btn.innerText].launchSite;
    let vehicle = missions[btn.innerText].vehicle;
    
    launchDateText.innerText = date;
    launchSiteText.innerText = site;
    vehicleText.innerHTML = vehicle;
}

function updateButtons(btn) {
    
    removeActiveButton();
    
    addActiveButton(btn);
    
}

function removeActiveButton() {
    missionButtons.forEach((button) => {
        button.classList.remove('btn-active');
    })
}

function addActiveButton(btn) {
    btn.classList.add('btn-active');
}