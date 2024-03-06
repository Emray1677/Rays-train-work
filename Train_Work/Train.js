let submit_btn = document.getElementById("submit_btn");
let FirstClass = 2;
let EconomyClass = 3;
let After_submit = document.getElementById("After_submit");
let After_submitone = document.getElementById("After_submitone");
let ok_btn = document.getElementById("ok_btn");


let timeOfTriP = ""
let FinalBirthDate = ""
let fullnamegtn = ""
let TRAINSERVICE = ""
let DateOFTrip = ""
let TRIPSERVICE = ""


function handleFormSubmit() {
    let fullName = document.getElementById("fullName");
    if (fullName.value === "") {
        nameErr.innerHTML = "name is required";
        fullName.style.borderColor = "red";
    } else {
        nameErr.innerHTML = "";
        fullName.style.borderColor = "black";
    }
    console.log(fullName.value);
}

function DateOfBirth() {
    if (BirthDate.value === "") {
        BirthErr.innerHTML = "Birth Date is required";
        BirthDate.style.borderColor = "red";
    } else {
        BirthErr.innerHTML = "";
        BirthDate.style.borderColor = "black";
    }
}
function BirthDateFig() {
    let BirthDate = document.getElementById("BirthDate").value;
    let today = new Date(BirthDate);
    let newDay = new Date();
    let diffrence = newDay - today;
    let outcome = Math.floor
        (diffrence / (1000 * 60 * 60 * 24 * 7 * 4 * 12)) - 1
    console.log(outcome);
    if (outcome >= 18) {
        // alert("good")
        console.log("good");
    } else {
        // alert("You are not allowed to use this service Due to your Age")
        console.log("bad");
    }
    FinalBirthDate = outcome;
}

function DateOfTrip() {
    if (TripDate.value === "") {
        TripErr.innerHTML = "Trip Date is required";
        TripDate.style.borderColor = "red";
    } else {
        TripErr.innerHTML = "";
        TripDate.style.borderColor = "black";
    }
}
function tripDate() {
    let TripDate = document.getElementById("TripDate").value;
    let userinput = new Date(TripDate);
    let today = new Date();
    let diffrence = userinput - today;
    let totOutcome = Math.floor
        (diffrence / (1000 * 60 * 60 * 24))
    console.log(totOutcome + "  Days remaing");
    DateOFTrip = totOutcome;
    
}
function EmailAddress() {
    if (EmailAdd.value === "") {
        EmailErr.innerHTML = "Email Address is required";
        EmailAdd.style.borderColor = "red";
    } else {
        EmailErr.innerHTML = "";
        EmailAdd.style.borderColor = "black";
    }
}
function Phone() {
    if (PhoneAdd.value === "") {
        PhoneErr.innerHTML = "Phone Number is required";
        PhoneAdd.style.borderColor = "red";
    } else {
        PhoneErr.innerHTML = "";
        PhoneAdd.style.borderColor = "black";
    }
}
function TimeOfTrip() {
    if (TripTime.value === "") {
        TimeErr.innerHTML = "Time of Trip is required";
        TripTime.style.borderColor = "red";
    } else {
        TimeErr.innerHTML = "";
        TripTime.style.borderColor = "black";
    }
}
function Triptime() {
    let TripTime = document.getElementById("TripTime").value;
    console.log(TripTime);
    timeOfTriP = TripTime
}
function TripDestination() {
    if (TripAddress.value === "") {
        DestinationErr.innerHTML = "Trip Destination is required";
        TripAddress.style.borderColor = "red";
    } else {
        DestinationErr.innerHTML = "";
        TripAddress.style.borderColor = "black";
    }
}

function trainService() {
    let TrainService = document.getElementById("TrainService");
    let serviceErr = document.getElementById("serviceErr");
    let optionone = document.getElementById("optionone").value;
    let optiontwo = document.getElementById("optiontwo").value;
    let optionthree = document.getElementById("optionthree").value;

    if (TrainService.value == optionone) {
        console.log("good");
        TrainService.style.borderColor = "red"
        serviceErr.innerHTML = "invalid Train Service"
    }
    if (TrainService.value == optiontwo) {
        console.log("mmmee");
        FirstClass -= 1;
        TrainService.style.borderColor = "black"
        serviceErr.innerHTML = ""
        console.log(FirstClass);
        TRAINSERVICE = optiontwo;
    }
    if (TrainService.value == optionthree) {
        console.log("klgkee");
        EconomyClass -= 1;
        TrainService.style.borderColor = "black"
        serviceErr.innerHTML = ""
        console.log(EconomyClass);
        TRAINSERVICE = optionthree;
    }
    if (FirstClass <= 0) {
        console.log("no more trauin");
        alert("sorry no more room")
    }

    if (EconomyClass <= 0) {
        console.log("no more trauin");
        alert("sorry no more room")
    }
}

function TripService() {
    let Train_Service = document.getElementById("Train_Service");
    let WayErr = document.getElementById("WayErr");
    let trainOptOne = document.getElementById("trainOptOne").value;
    let trainOptTwo = document.getElementById("trainOptTwo").value;
    let trainOptThree = document.getElementById("trainOptThree").value;

    if (Train_Service.value == trainOptOne) {
        console.log("good");
        Train_Service.style.borderColor = "red"
        WayErr.innerHTML = "invalid Trip Service"
    } // else{
    //     Train_Service.style.borderColor = "black"
    // } 
    if (Train_Service.value == trainOptTwo) {
        Train_Service.style.borderColor = "black"
        WayErr.innerHTML = ""
        TRIPSERVICE = trainOptTwo;
    }
    if (Train_Service.value == trainOptThree) {
        Train_Service.style.borderColor = "black"
        WayErr.innerHTML = ""
        TRIPSERVICE = trainOptThree;
    }
}

function NewElement(){
    After_submit.style.display = "flex"
   let GoodReply = document.getElementById("GoodReply");
   let badReply = document.getElementById("badReply");
    if(FinalBirthDate >= 18){
        GoodReply.style.display = "flex"
        var myList = [
            "FULL NAME : " + fullName.value+" ;",
            "DATE OF BIRTH : " + FinalBirthDate+" ;",
             "TRIP SERVICE : " + TRIPSERVICE+" ;",
             "TRAIN SERVICE :" + TRAINSERVICE+" ;",
             "DATE OF TRIP :" + DateOFTrip+"  Days Remaining ;",
             "TIME OF TRIP :" + timeOfTriP+" ;",
            ];
            
        var ListElement =document.getElementById("myList");
    
        for (var i =0;i < myList.length; i++){
            var ListItem =document.createElement("li");
    
            ListItem.textContent = myList[i];
            ListElement.appendChild(ListItem);
            ListItem.style.color = "green"
        }
    }

    else {
        badReply.style.display = "flex"
        var myList = [
            "FULL NAME : " + fullName.value+" ;",
            "DATE OF BIRTH : " + FinalBirthDate+" ;",
             "TRIP SERVICE : " + TRIPSERVICE+" ;",
             "TRAIN SERVICE :" + TRAINSERVICE+" ;",
             "DATE OF TRIP :" + DateOFTrip+"  Days Remaining ;",
             "TIME OF TRIP :" + timeOfTriP+" ;",
            ];
    
        var ListElement =document.getElementById("myList");
    
        for (var i =0;i < myList.length; i++){
            var ListItem =document.createElement("li");
    
            ListItem.textContent = myList[i];
            ListElement.appendChild(ListItem);
        }
    }
}
function OKbtn(){
    After_submit.style.display = "none"

}

submit_btn.addEventListener('click', DateOfBirth)
submit_btn.addEventListener('click', DateOfTrip)
submit_btn.addEventListener('click', EmailAddress)
submit_btn.addEventListener('click', Phone)
submit_btn.addEventListener('click', TimeOfTrip)
submit_btn.addEventListener('click', TripDestination)
submit_btn.addEventListener('click', BirthDateFig)
submit_btn.addEventListener('click', tripDate)
submit_btn.addEventListener('click', Triptime)
submit_btn.addEventListener('click', trainService)
submit_btn.addEventListener('click', TripService)
submit_btn.addEventListener('click', NewElement)
submit_btn.addEventListener('click', handleFormSubmit)
ok_btn.addEventListener('click', OKbtn)

