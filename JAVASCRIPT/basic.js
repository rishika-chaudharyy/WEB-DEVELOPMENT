console.log("Hello World, Welcome to console");
console.log("Let's learn JS together");

var name = "Tony Stark";
console.log(name);

var price = 99.99;
console.log(price);

var c = null;
console.log(c);

var y = undefined;
console.log(y);

var isFollow = false;
console.log(isFollow);

var fullname = "Rishika";
var FULLNAME = "RISHIKA";
console.log(fullname);
console.log(FULLNAME);

console.log(typeof price);

let x = BigInt("123");
console.log(x);

let sym = Symbol("This is a symbol");
console.log(sym)

const student = {
    firstName: "Rahul",
    age: 70,
    cgpa: 9.00,
    college: "nirma"
};

console.log(student); // Logging the student object
console.log(student["firstName"])
console.log(student.age)
console.log(student["cgpa"])


//practice question
//Q.1

const product = {
    title: "Parker ball pen",
    offer: 5,
    rating: 4.0,
    hasDeal: true,
    price: 270
};

console.log(product);


const profile = {
    userId: "Rishika",
    followers: 597000,
    posts: 107,
    following: 4,
    thread: "@Rishika"
};
console.log(profile)


//operators in javascript

//arithmetic operators
let a = 9;
let b = 2;

console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a * b = ", a * b)
console.log("a / b = ", a / b)
console.log("a % b = ", a % b)
console.log("a ** b = ", a ** b)

//unary operators
// ++a
// a++
// --b
// b--
console.log(a)
console.log(b)

//assignment operators

console.log(a += b)
console.log(a -= b)
console.log(a *= b)
console.log(a /= b)
console.log(a %= b)
console.log(a **= b)

//comparision operator

console.log(a == b)
console.log(a != b)
console.log(a === b)
console.log(a !== b)

c = 5
let d = "5"
console.log(c == d) //returns true as it only checks the value
console.log(c === d)//returns false as it checks value and also type


let m = 4
let n = 3

let cond1 = m > n //true
let cond2 = m === 4 //true
console.log(cond1 && cond2)
console.log(cond1 || cond2)
console.log(!cond2)


//conditional statements

let age = 25
if (age >= 18) {
    console.log("You can vote and drive")
}

if (age < 18) {
    console.log("You cannot vote and drive")
}

let mode = "dark"
let color;

if (mode === "dark") {
    color = "black"
}
else {
    color = "white"
}

console.log(color)

//checking odd and even

let num = 10
if (num % 2 === 0) {
    console.log("Even")
} else {
    console.log("Odd")
}


let ageNumber = 60

if (ageNumber <= 19) {
    console.log("Teenager")
} else if (ageNumber > 19 && ageNumber < 55) {
    console.log("Adult")
} else {
    console.log("Senior citizen")
}


//ternary operator

age >= 18 ? console.log("adult") : console.log("Not adult")

//switch case

const fruit = "apple"

switch (fruit) {
    case "mango": console.log("This is a mango")
        break

    case "apple": console.log("This is an apple")
        break

    default: console.log("Not a match")
}


//Practice questions

//Q.1 

let number = prompt("Enter a number")

if (number % 5 === 0) {
    console.log("Multiple of five")
} else {
    console.log("Not a multiple of 5")
}

//Q.2

let grade;
grade = prompt("Enter your total marks out of 100")

if (grade >= 80 && grade <= 100) {
    console.log("A")
} else if (grade >= 70 && grade < 79) {
    console.log("B")
} else if (grade >= 60 && grade <= 69) {
    console.log("C")
} else if (grade >= 50 && grade <= 59) {
    console.log("D")
} else {
    console.log("E")
}