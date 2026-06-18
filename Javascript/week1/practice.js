function getGrade(score) {
    if (score >= 90 && score <= 100) return "A";
    if (score >= 80 && score <= 89) return "B";
    if (score >= 70 && score <= 79) return "C";
    if (score >= 60 && score <= 69) return "D";
    if (score >= 39 && score <= 59) return "E";
    if (score >= 0 && score <= 32) return "Fail";
    else return "Invalid Marks"

}
console.log(getGrade(55))


// Problem 1 — ATM Machine
// Ek variable banao balance jisme 10000 rakho. Ek variable withdraw jisme koi amount rakho. Phir check karo:

// Agar withdraw amount zero ya usse kam ho toh bolo "Invalid amount"
// Agar withdraw amount balance se zyada ho toh bolo "Insufficient balance"
// Agar dono theek hain toh balance mein se withdraw amount ghata do aur bolo "Success! Remaining balance: [amount]"


let balance = 10000;
let withdraw = 5000;


if (withdraw <=0) {
    console.log("Invalid amount");

} else if (withdraw >= balance) {
    console.log("Insufficient balance")
}else {
    balance = balance - withdraw
    console.log("Success", + balance)
}



// Problem 2 — Login System
// Ek variable correctUser mein "ali" rakho, correctPass mein "secure123" rakho. User ne jo daala woh inputUser aur inputPass mein rakho. Phir check karo:

// Dono sahi hain toh "Login successful"
// Username sahi hai password galat toh "Wrong password"
// Username hi galat hai toh "User not found"


let correctUser = "ali";
let correctPass = "secure123";

let inputUser = "ali";
let inputPass = "wrongpass";

if (correctUser === inputUser && correctPass === inputPass) {
    console.log("login-Successful");
} else if (correctUser === inputUser && correctPass !== inputPass) {
    console.log("Wrong password")
} else {
    console.log("user not found")
}



// Problem 3 — Electricity Bill
// Units use ki hain ek variable mein rakho. Bill calculate karo is hisaab se:

// 0 se 100 units — har unit ka 5 rupay
// 101 se 300 units — har unit ka 8 rupay
// 300 se zyada — har unit ka 12 rupay

// Sirf total bill print karo.

let units = 80;
let bill;

if (units >= 0 && units <=100) {
    bill = units * 5
} else if (units >= 101 && units <= 300) {
    bill = units * 8
} else {
    bill = units * 12
}


console.log("Total Bill"+ bill)