//Loops in JS
//FOR loops
console.log("Apna College")

for (let i = 1; i <= 5; i++) {
    console.log("Hello")
}
console.log("Loop has ended")


//Finding sum of numbers
let sum = 0
for (let i = 1; i <= 10; i++) {
    sum += i
}
console.log(sum)


//WHILE loops
let i = 1
while (i <= 10) {
    console.log("Apna College")
    i++
}

//DO_WHILE loops

let y = 20
do {
    console.log("Condition is false but it runs atleast one time")
    y++
} while (y < 10);

let num = 1
do {
    console.log(num)
    num++
} while (num <= 10);

//FOR_OF loops
let str = "Hello"

for (let i of str) {
    console.log(i)
}

//couting letters in String
let str2 = "Hello World"

let count = 0
for (let i of str2) {
    count++
}
console.log(count)

//FOR_IN loops

const obj = {
    "name": "rishika",
    "status": "Single",
    "age": 19,
    "course": "btech(CSE)+mba",
    "college": "Nirma Uni"
};

for (let i in obj) {
    console.log(i)
    console.log(obj[i])
}

//PRACTICE QUESTIONS
//Q.1 

for (let i = 0; i <= 100; i++) {
    if ((i % 2) !== 0) {
        console.log(i)
    }
}

//Q.2 
// console.log("Welcome to the guessing game");

// let correctGuess = 25;
// let user;

// while (correctGuess != user) {
//     user = prompt("Guess a number between 1-50");
//     user = Number(user); // Convert the input to a number

//     if (user === correctGuess) {
//         console.log("You guessed correctly!");
//         break;
//     } else if (user > correctGuess) {
//         alert("Wrong guess, try a lower number");
//     } else if (user < correctGuess) {
//         alert("Wrong guess, try a higher number");
//     }
// }


//STRINGS

let myname = "Rishika"
console.log(myname.length)
console.log(myname[0])

//TEMPLATE LITERALS 

const biodata = {
    name: "Rishika",
    age: 19
};

console.log(`The name is ${biodata.name} and age is ${biodata.age} and ${1 + 2}`)

//ESCAPE CHARACTER
let str1 = "Rishika \n Chaudhary"
console.log(str1)
console.log(str1.length)


//STRING METHODS
//creates new string and does not change the original as strings are  immutable

let str3 = "Apna College"
str3 = str3.toUpperCase()
console.log(str3)

str3=str3.toLowerCase()
console.log(str3)

let str4="  Apna Col ege  "
str4=str4.trim()
console.log(str4)

let str5="Roses and Chocolates and Rings"
console.log(str5.slice(0,4))

console.log(str2.concat(str3))
console.log(str2+str3)
console.log(str5.replace("c","h"))
console.log(str5.replaceAll("c","h"))

console.log(str5.charAt(0))

//PRACTICE QUESTIONS

let username=prompt("Enter your full name without spaces")
let userid="@"+username+username.length
console.log(userid)