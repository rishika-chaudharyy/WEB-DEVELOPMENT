let heading = document.getElementById("heading");
console.dir(heading);

let elems = document.getElementsByClassName("myclass");
console.dir(elems);

let para = document.getElementsByTagName("p");
console.dir(para);

let firstelem = document.querySelector("p");
console.dir(firstelem);

let allelem = document.querySelectorAll(".myclass");
console.dir(allelem);

console.log(firstelem.tagName);

console.log(document.body.firstChild);

let res = document.querySelectorAll("#mydiv").children;
console.log(res);

let text = document.querySelector("h2");
console.dir(text);
text.innerText = text.innerText + " From Apna College Students";

let divs = document.querySelectorAll(".box");
console.dir(divs);
divs[0].innerText = "new value";

let ptag = document.querySelector(".myclassp");
console.dir(ptag);

console.log(ptag.tagName);
ptag.innerHTML = "<b>hello<b>";
ptag.innerText = "abcs";
ptag.textContent;

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let parag = document.querySelector("p");
// console.log(setAttribute("class","myparagraph"))

console.log(div.style);

let el = document.createElement("button");
el.innerText = "Clickme";

//PRACTICE QUES

let btn = document.createElement("button");
btn.innerHTML = "<b>Clickme<b>";
btn.style.color = "white";
btn.style.backgroundColor = "red";

let body = document.querySelector("body");
body.prepend(btn);

let p = document.querySelector(".content");
p.classList.add(newclass);

let button=document.querySelector("#btn1");
button.onclick=()=>{
    console.log("button was clicked")
}

let div1=document.querySelector("#div1");
div1.onmouseover=()=>{
    console.log("On the div")
}

let mode=document.querySelector(".mode");
let curr="light"
mode.addEventListener("click",()=>{
    if(curr=="light"){
        curr="dark";
        document.querySelector("body").style.backgroundColor="black"
    }else{
        curr="light"
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(curr)
})