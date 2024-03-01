let currentBalance = 100000;
let points = 0;

let myBtn = document.getElementById("form_btn");
let text_show = document.getElementById("text_show");

let defaultBalance = 100000;
let totalLoanScore = 0;
let requestedAmount = loan_amount.value
// console.log(requestedAmount)



function Account(){
    let requestedAmount = document.getElementById
    ("loan_amount").value;
    
    if(requestedAmount <= currentBalance){
        points += 10;
        loan_amount.style.border = "1px solid #C9BDBD"
    }else{
        // alert("Requested amount is more than eligable amount")
        loan_amount.style.border = "1.5px solid red"
        // points -= 10;
     } 
}


function LoanHistory(){
    let CollectionMonth = document.getElementById
    ("CollectionMonth").value;
    
    if(CollectionMonth == [1]){
        points += 10;
    }else{
        // points -= 5;
    }
}

function lastDepositeDate(){
    let lastDepositeInput = document.getElementById
    ("lastDeposite").value;
    let depositDate = new Date
    (lastDepositeInput);
    let curreantDay = new Date();

    let durationInDays = curreantDay - depositDate;
    let difference = Math.floor
    (durationInDays / (1000 * 60 * 60 * 24))

if (difference <= 30){
    points += 5;
}else{
    console.log("not upto required date");
    // points -= 5;
     } 
}


function AccountType(){
    let account_type = document.getElementById
    ("account_type").value;
    
    if(account_type == [2]){
        points += 10;
        console.log("dkkkkkkk");
        // alert(1)
    }
    else if(account_type == [1]){
        // points -= 5;
    }
}

function RepayDay(){
    let repaymentDate = document.getElementById
    ("repaymentDate").value;
    let depositDate = new Date
    (repaymentDate);
    let curreantDay = new Date();

    let durationInMonth = curreantDay - depositDate;
    let differenceBe = Math.floor
    (durationInMonth / (1000 * 60 * 60 * 24 * 7 * 4))

if (differenceBe <= 6){
    points += 10;
}else{
    console.log("not upto required date");
    // points -= 5;
     } 
}


function textShow() {
    console.log("button clicked")
    if(points >= 30){
    test_result.innerHTML="congratulations! you have been granted a loan. you scored 60% in your loan accessment form"
    text_show.style.display = "flex"
    // alert("uug")
    }else{
        test_result.innerHTML="Sorry Your Total Points Scored Is NOT Up To Required Points for Loan"
    text_show.style.display = "flex"
        // console.log("nothing");
    }
    console.log(points);

}

// function checkvalidation(){
//     let inputField = document.getElementById("firstname");
//     let input = inputField.value;

//     if (input === ""){
//         inputField.style.borderColor = "red"
//     }
// }    


myBtn.addEventListener('click', Account)
myBtn.addEventListener('click', LoanHistory)
myBtn.addEventListener('click', lastDepositeDate)
myBtn.addEventListener('click', AccountType)
myBtn.addEventListener('click', RepayDay)
myBtn.addEventListener('click', textShow)

