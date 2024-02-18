// Task: 
// Write a program that prompts the user to enter
//  a month Number (1 for january, 2 for february,
//     etc.). Using a switch statement, display
//      the number it's not a leap year.

// const month = prompt("enter month number")
// if(month == 1){
//     console.log("not a leap year");
// }
// if (month == 2){
//     console.log("leap year");
// }



let month = prompt("enter a month digit")

let currentMonth = ""

switch (month) {
    case "1":
        currentMonth = "January"
        break;
    case "2":
        currentMonth = "Febuary"
        break;
    case "3":
        break;
    case "4":
        break;
    case "5":
        break;
    case "6":
        break;
    case "7":
        break;
    case "8":
        break;
    case "9":
        break;
    case "10":
        break;
    case "11":
        break;
    case "12":
        break;

    default:
        currentMonth = "Entry data is an invalid month";
        break;
}

if (month == 2) {
    console.log(currentMonth + " is a leap year");
} else if (month > 12) {
    console.log(currentMonth);
} else {
    console.log(currentMonth + " Not a leap year");
}




// switch (month){
//     case 1:
//         console.log("Not a leap year");
//         break;
//     case 2:
//         console.log("leap year");
//         break;
//     case 3:
//         console.log("Not a leap year");
//         break;
//     case 4:
//         console.log("Not a leap year");
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     // case 11:
//     // case 12:
//  default:
//         break;
// }if (month == 3){
//     console.log("Not a leap year");
// }
// if (month == 4){
//     console.log("Not a leap year");
// }
// if (month == 5){
//     console.log("Not a leap year");
// }
// if (month == 6){
//     console.log("Not a leap year");
// }
// if (month == 7){
//     console.log("Not a leap year");
// }
// if (month == 8){
//     console.log("Not a leap year");
// }
// if (month == 9){
//     console.log("Not a leap year");
// }
// if (month == 10){
//     console.log("Not a leap year");
// }
// if (month == 11){
//     console.log("Not a leap year");
// }
// if (month == 12){
//     console.log("Not a leap year");
// }



// let currentYear = 2024;

// const user = prompt("enter your name") 
// if (user) {
//     alert("Hello " + user + " Welcome to Age checker AI Enter your year of birth")
// }else {
//     alert("user cancelled")
// }
// const inputYear = prompt ("Enter Year of birth")
// if (currentYear){
//     alert(currentYear - inputYear)
//     const userYear = currentYear - inputYear
//     console.log(userYear)
// }
 


