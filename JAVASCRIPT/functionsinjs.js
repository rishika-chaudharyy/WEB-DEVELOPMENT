//functions
function myfunc() {
  console.log("Hello world");
}

myfunc();

function one(msg) {
  console.log(msg);
}
one("Hello");

function sum(a, b) {
  return a + b;
}
console.log(sum(4, 5));

const sumofnum = (a, b) => {
  console.log(a + b);
};

sumofnum(4, 5);

const welcome = () => {
  console.log("hello");
};
welcome();

//PRACTICE QUESTIONS
//Q.1

let str = "Hello world";
function returnVowel(str) {
  let count = 0;
  for (let i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  return count;
}

console.log(returnVowel(str));

const same = (str) => {
  let count = 0;
  for (let i of str) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
      count++;
    }
  }
  return count;
};

console.log(same("aeiou"));

//forEach function in arrays

let arr = [1, 2, 3, 4, 5];

arr.forEach((val) => {
  console.log(val);
});

let strarr = ["flower", "roses", "mango", "chocolate"];
strarr.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

//PRACTICE QUES
//Q.2
arr.forEach((val) => {
  console.log(val * val);
});

//map
let newarr = arr.map((val) => {
  return val;
});
console.log(newarr);

//filter
let even = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(even);

//reduce

let result = arr.reduce((res, curr) => {
  return res > curr ? res : curr;
});

console.log(result);

//PRACTICE QUESTIONS

//Q.1
let marks = [35, 56, 78, 90, 99, 89, 99];
const out = marks.filter((val) => {
  return val >= 90;
});
console.log(out);

let n = prompt("Enter a number");
let arrn = [];
for (let i = 1; i <= n; i++) {
  arrn.push(i);
}

let res = arrn.reduce((res, val) => {
  return res + val;
});
console.log(res);

let mul = arrn.reduce((res, val) => {
  return res * val;
});
console.log(mul);
