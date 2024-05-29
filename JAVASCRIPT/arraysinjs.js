//Arrays in js
let flower = ["roses", "lotus", "lily"];
let items = ["hello", 90, true]; //can create array of different items but generally don't

console.log(flower)
console.log(flower.length)
console.log(typeof flower)//arrays are special kind of object
console.log(flower[0]) //gives undefined it accessing index which is not available

//arrays are mutable
flower[2] = "sunflower"
console.log(flower)

//looping over array
for (let i = 0; i < flower.length; i++) {
    console.log(flower[i])
}

for (let i of flower) {
    console.log(i)
}

//PRACTICE QUESTIONS
//Q.1
let marks = [96, 66, 78, 34, 56];

let sum = 0;
for (let i of marks) {
    sum += i;
}

let avg = sum / marks.length;
console.log(avg)

//Q.2
let itemslist=[250,645,300,900,50];
let idx=0
for(let val of itemslist){
    console.log(`The price of item ${idx} is ${val} `)
    let offer=val/10;
    itemslist[idx]=val-offer;
    console.log(`The price of item ${idx} is ${itemslist[idx]} `)
    idx++;
}

for(let i =0  ; i<itemslist.length;i++){
    let offer=itemslist[i]/10;
    itemslist[i]-=offer;
}
console.log(itemslist)

//ARRAY METHODS

let food=["chips","cake","chocolate","cola"];

console.log(food.push("cabbage")) //returns new length
console.log(food)

console.log(food.pop())//gives deleted item
console.log(food)

console.log(food)
//console.log(food.toString()) 

let marvel=["ironman","hulk","thor","hawkeye","captainAmerica"];
let dc=["batman","superman","joker"]
let femHero=["blackwidow","captainCosmos"]

let heros=(marvel.concat(dc,femHero)) //returns the result
console.log(heros)

console.log(heros.unshift("antman"))//returns new length

console.log(heros.shift())//gives deleted item
console.log(heros.slice(0,3))
//add
heros.splice(0,0,"vision","scarelettewitch")
console.log(heros)

//delete
heros.splice(3,1);
console.log(heros)

//replace
heros.splice(3,1,"wanda")
console.log(heros)

//only idx
console.log(heros.splice(4))

//PRACTICE QUESTIONS

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies.shift());
companies.splice(1,1,"Ola")
console.log(companies)
companies.push("Amazon")
console.log(companies)